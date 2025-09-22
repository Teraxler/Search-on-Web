import { useEffect, useState } from "react";
import { useParams } from "react-router";
import WebSite from "../../../components/WebSite/WebSite";
import { getSearchResult } from "../../../services/search.service";
import Pagination from "@mui/material/Pagination";
import PeopleSearch from "../../../components/PeopleSearch/PeopleSearch";
import IntroduceCard from "../../../components/IntroduceCard/IntroduceCard";
import { numberGenerator } from "../../../utils/numberMethods";
import SkeletonWebSite from "../../../components/WebSite/SkeletonWebSite";
// import searchResult from "../../../data/search.json";

export default function AllResults() {
  const params = useParams();

  const [query, setQuery] = useState(params.q ?? "");
  const [pages, setPages] = useState([]);
  // const [questions, setQuestions] = useState([]);
  const [knowledgeGraph, setKnowledgeGraph] = useState(null);
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (params.page && params.page !== currentPage) {
      setCurrentPage(params.page);
    }

    if (params.q && params.q !== query) {
      setQuery(params.q);
      setIsLoaded(false);
    }
  }, [params]);

  useEffect(() => {
    async function fetchDate() {
      const data = await getSearchResult(query, currentPage);
      // const data = searchResult;

      setPages(data?.organic);
      setKnowledgeGraph(data?.knowledgeGraph);
      // setQuestions(data?.peopleAlsoAsk);
      setRelatedSearches(data?.relatedSearches);
      setIsLoaded(true);
    }

    fetchDate();
  }, [currentPage, query]);

  function navigateHandler(page) {
    setCurrentPage(page);
    setIsLoaded(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="grid grid-rows-[auto_auto_auto] grid-cols-12 flex-col gap-y-7.5 h-auto py-7.5 px-4 xs:px-7 sm:px-8.5">
        <div className="row-start-2 sm:row-start-1 row-end-3 col-start-1 lg:col-start-2 col-end-12 sm:col-end-8 lg:col-end-9 pe-5 flex flex-col gap-y-7.5">
          <div className="flex flex-col gap-y-7.5">
            {isLoaded && pages
              ? pages.map((page) => <WebSite key={page.position} {...page} />)
              : numberGenerator(0, 10).map((id) => (
                  <SkeletonWebSite key={id} />
                ))}
          </div>
          {/* People Also Search */}
          {relatedSearches ? (
            <div className="max-w-full w-162.5 text-[22px]">
              <span>People also search for</span>
              <div className="flex gap-y-4 flex-wrap -mx-2 mt-1.5">
                {relatedSearches.map((relatedSearch) => (
                  <PeopleSearch
                    key={relatedSearch.query}
                    query={relatedSearch.query}
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {knowledgeGraph ? (
          <div className="border-b sm:border-b-0 max-w-fit sm:border-s border-gainsboro sm:ps-5 row-start-1 row-end-2 col-start-1 sm:col-start-8 lg:col-start-9 col-end-13">
            <IntroduceCard {...knowledgeGraph} />
          </div>
        ) : (
          ""
        )}

        {/* <Pagination/> */}
        <div className="row-start-3 row-end-4 col-start-1 col-end-13 flex justify-center w-full max-h-fit">
          <Pagination
            count={10}
            page={currentPage}
            onChange={(event, page) => navigateHandler(page)}
          />
        </div>
      </div>
    </>
  );
}
