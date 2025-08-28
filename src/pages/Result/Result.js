import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link,  useParams } from "react-router";
import WebSite from "../../components/WebSite/WebSite";
import { getSearchResult } from "../../services/search.service";
import Pagination from "@mui/material/Pagination";

export default function Result() {
  const params = useParams();

  const [query, setQuery] = useState(params.q ?? ""); 
  const [pages, setPages] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [relatedSearches, setRelatedSearches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (params.page && params.page !== currentPage) {
      setCurrentPage(params.page);
    }

    if (params.q && params.q !== query) {
      setQuery(params.q);
    }
  }, [params]);

  useEffect(() => {
    async function fetchDate() {
      const data = await getSearchResult(query, currentPage);

      setPages(data.organic);
      setQuestions(data.peopleAlsoAsk);
      setRelatedSearches(data.relatedSearches);
    }

    fetchDate();
  }, [currentPage, query]);

  function paginateHandler(page) {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Header />
      <div className="border-b border-[#dadce0] mt-25 px-5">
        <nav className="grid grid-cols-12 ">
          <ul className="col-start-2 col-end-12 flex max-w-full overflow-x-auto text-[#70757a] font-medium text-sm">
            <li>
              <Link
                // to={"/ai-mode"}
                className="flex items-end h-12 px-3 hover:text-[#1f1f1f]"
              >
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  AI Mode
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-end h-12 px-3 text-[#1f1f1f] ">
                <span className="pb-2 mb-0.75 border-b-3 border-[#1f1f1f]">
                  All
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-end h-12 px-3 hover:text-[#1f1f1f]">
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  Images
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex items-end h-12 px-3 hover:text-[#1f1f1f]">
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  Videos
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="h-auto py-7.5 px-4 xs:px-7 sm:px-8.5">
        <div className="grid grid-rows-1 grid-cols-12 gap-y-7.5">
          {pages.length
            ? pages.map((page) => (
                <WebSite key={`${page.title}${page.link}`} {...page} />
              ))
            : ""}
        </div>

        {/* <Pagination/> */}
        <div className="flex justify-center w-full mt-7.5">
          <Pagination
            count={10}
            page={currentPage}
            onChange={(event, page) => paginateHandler(page)}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
