import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../../components/Footer/Footer";
import { Link, useParams } from "react-router";
import WebSite from "../../components/WebSite/WebSite";
import { getSearchResult } from "../../services/search.service";
import Pagination from "@mui/material/Pagination";
import PeopleSearch from "./PeopleSearch";
// import IntroduceCard from "./IntroduceCard";

export default function Result() {
  const params = useParams();

  const [query, setQuery] = useState(params.q ?? "");
  const [pages, setPages] = useState([]);
  // const [questions, setQuestions] = useState([]);
  // const [knowledgeGraph, setKnowledgeGraph] = useState(null);
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
      // console.log("🚀 ~ fetchDate ~ data:", data);

      // const data = {
      //   searchParameters: {
      //     q: "apple inc",
      //     gl: "us",
      //     hl: "en",
      //     autocorrect: true,
      //     page: 1,
      //     type: "search",
      //   },
      //   knowledgeGraph: {
      //     title: "Apple",
      //     type: "Technology company",
      //     website: "http://www.apple.com/",
      //     imageUrl:
      //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGQRv5TjjkycpctY66mOg_e2-npacrmjAb6_jAWhzlzkFE3OTjxyzbA&s=0",
      //     description:
      //       "Apple Inc. is an American multinational technology company specializing in consumer electronics, software and online services headquartered in Cupertino, California, United States.",
      //     descriptionSource: "Wikipedia",
      //     descriptionLink: "https://en.wikipedia.org/wiki/Apple_Inc.",
      //     attributes: {
      //       Headquarters: "Cupertino, CA",
      //       CEO: "Tim Cook (Aug 24, 2011–)",
      //       Founded: "April 1, 1976, Los Altos, CA",
      //       Sales: "1 (800) 692-7753",
      //       Products: "iPhone, Apple Watch, iPad, and more",
      //       Founders: "Steve Jobs, Steve Wozniak, and Ronald Wayne",
      //       Subsidiaries: "Apple Store, Beats Electronics, Beddit, and more",
      //     },
      //   },
      //   organic: [
      //     {
      //       title: "Apple",
      //       link: "https://www.apple.com/",
      //       snippet:
      //         "Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, ...",
      //       sitelinks: [
      //         {
      //           title: "Support",
      //           link: "https://support.apple.com/",
      //         },
      //         {
      //           title: "iPhone",
      //           link: "https://www.apple.com/iphone/",
      //         },
      //         {
      //           title: "Apple makes business better.",
      //           link: "https://www.apple.com/business/",
      //         },
      //         {
      //           title: "Mac",
      //           link: "https://www.apple.com/mac/",
      //         },
      //       ],
      //       position: 1,
      //     },
      //     {
      //       title: "Apple Inc. - Wikipedia",
      //       link: "https://en.wikipedia.org/wiki/Apple_Inc.",
      //       snippet:
      //         "Apple Inc. is an American multinational technology company specializing in consumer electronics, software and online services headquartered in Cupertino, ...",
      //       attributes: {
      //         Products: "AirPods; Apple Watch; iPad; iPhone; Mac",
      //         Founders: "Steve Jobs; Steve Wozniak; Ronald Wayne",
      //         Founded:
      //           "April 1, 1976; 46 years ago in Los Altos, California, U.S",
      //         Industry:
      //           "Consumer electronics; Software services; Online services",
      //       },
      //       sitelinks: [
      //         {
      //           title: "History",
      //           link: "https://en.wikipedia.org/wiki/History_of_Apple_Inc.",
      //         },
      //         {
      //           title: "Timeline of Apple Inc. products",
      //           link: "https://en.wikipedia.org/wiki/Timeline_of_Apple_Inc._products",
      //         },
      //         {
      //           title: "List of software by Apple Inc.",
      //           link: "https://en.wikipedia.org/wiki/List_of_software_by_Apple_Inc.",
      //         },
      //         {
      //           title: "Apple Store",
      //           link: "https://en.wikipedia.org/wiki/Apple_Store",
      //         },
      //       ],
      //       position: 2,
      //     },
      //     {
      //       title:
      //         "Apple Inc. | History, Products, Headquarters, & Facts | Britannica",
      //       link: "https://www.britannica.com/topic/Apple-Inc",
      //       snippet:
      //         "Apple Inc., formerly Apple Computer, Inc., American manufacturer of personal computers, smartphones, tablet computers, computer peripherals, ...",
      //       date: "Aug 31, 2022",
      //       attributes: {
      //         "Related People":
      //           "Steve Jobs Steve Wozniak Jony Ive Tim Cook Angela Ahrendts",
      //         Date: "1976 - present",
      //         "Areas Of Involvement": "peripheral device",
      //       },
      //       position: 3,
      //     },
      //     {
      //       title:
      //         "AAPL: Apple Inc Stock Price Quote - NASDAQ GS - Bloomberg.com",
      //       link: "https://www.bloomberg.com/quote/AAPL:US",
      //       snippet:
      //         "Stock analysis for Apple Inc (AAPL:NASDAQ GS) including stock price, stock chart, company news, key statistics, fundamentals and company profile.",
      //       position: 4,
      //     },
      //     {
      //       title: "Apple Inc. (AAPL) Company Profile & Facts - Yahoo Finance",
      //       link: "https://finance.yahoo.com/quote/AAPL/profile/",
      //       snippet:
      //         "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related ...",
      //       position: 5,
      //     },
      //     {
      //       title: "AAPL | Apple Inc. Stock Price & News - WSJ",
      //       link: "https://www.wsj.com/market-data/quotes/AAPL",
      //       snippet:
      //         "Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other varieties of ...",
      //       position: 6,
      //     },
      //     {
      //       title:
      //         "Apple Inc Company Profile - Apple Inc Overview - GlobalData",
      //       link: "https://www.globaldata.com/company-profile/apple-inc/",
      //       snippet:
      //         "Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers (PCs), portable and wearable devices. The company also offers ...",
      //       position: 7,
      //     },
      //     {
      //       title: "Apple Inc (AAPL) Stock Price & News - Google Finance",
      //       link: "https://www.google.com/finance/quote/AAPL:NASDAQ?hl=en",
      //       snippet:
      //         "Get the latest Apple Inc (AAPL) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and ...",
      //       position: 8,
      //     },
      //   ],
      //   peopleAlsoAsk: [
      //     {
      //       question: "What does Apple Inc mean?",
      //       snippet:
      //         "Apple Inc., formerly Apple Computer, Inc., American manufacturer of personal\ncomputers, smartphones, tablet computers, computer peripherals, and computer\nsoftware. It was the first successful personal computer company and the\npopularizer of the graphical user interface.\nAug 31, 2022",
      //       title:
      //         "Apple Inc. | History, Products, Headquarters, & Facts | Britannica",
      //       link: "https://www.britannica.com/topic/Apple-Inc",
      //     },
      //     {
      //       question: "Is Apple and Apple Inc same?",
      //       snippet:
      //         "Apple was founded as Apple Computer Company on April 1, 1976, by Steve Jobs,\nSteve Wozniak and Ronald Wayne to develop and sell Wozniak's Apple I personal\ncomputer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc.",
      //       title: "Apple Inc. - Wikipedia",
      //       link: "https://en.wikipedia.org/wiki/Apple_Inc.",
      //     },
      //     {
      //       question: "Who owns Apple Inc?",
      //       snippet:
      //         "Apple Inc. is owned by two main institutional investors (Vanguard Group and\nBlackRock, Inc). While its major individual shareholders comprise people like\nArt Levinson, Tim Cook, Bruce Sewell, Al Gore, Johny Sroujli, and others.",
      //       title: "Who Owns Apple In 2022? - FourWeekMBA",
      //       link: "https://fourweekmba.com/who-owns-apple/",
      //     },
      //     {
      //       question: "What products does Apple Inc offer?",
      //       snippet:
      //         "APPLE FOOTER\nStore.\nMac.\niPad.\niPhone.\nWatch.\nAirPods.\nTV & Home.\nAirTag.",
      //       title: "More items...",
      //       link: "https://www.apple.com/business/",
      //     },
      //   ],
      //   relatedSearches: [
      //     {
      //       query: "Who invented the iPhone",
      //     },
      //     {
      //       query: "Apple Inc competitors",
      //     },
      //     {
      //       query: "Apple iPad",
      //     },
      //     {
      //       query: "iPhones",
      //     },
      //     {
      //       query: "Apple Inc us",
      //     },
      //     {
      //       query: "Apple company history",
      //     },
      //     {
      //       query: "Apple Store",
      //     },
      //     {
      //       query: "Apple customer service",
      //     },
      //     {
      //       query: "Apple Watch",
      //     },
      //     {
      //       query: "Apple Inc Industry",
      //     },
      //     {
      //       query: "Apple Inc registered address",
      //     },
      //     {
      //       query: "Apple Inc Bloomberg",
      //     },
      //   ],
      // };

      setPages(data.organic);
      // setKnowledgeGraph(data.knowledgeGraph);
      // setQuestions(data.peopleAlsoAsk);
      setRelatedSearches(data.relatedSearches);
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
      <Header />
      <div className="border-b border-[#dadce0] mt-25 px-5">
        <nav className="grid grid-cols-12 ">
          <ul className="col-start-2 col-end-12 flex max-w-full overflow-x-auto text-[#70757a] font-medium text-sm">
            <li>
              <Link
                // to={"/result/ai/"}
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
      <main className="grid grid-rows-1 grid-cols-12 gap-y-7.5 h-auto py-7.5 px-4 xs:px-7 sm:px-8.5">
        {/* {knowledgeGraph ? <IntroduceCard {...knowledgeGraph} /> : ""} */}
        <div className="col-start-2 col-end-12 flex flex-col gap-y-7.5">
          {isLoaded
            ? pages.map((page) => <WebSite key={page.position} {...page} />)
            : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <WebSite key={id} loading={true} />
              ))}
        </div>

        {/* People Also Search */}
        <div className="col-start-2 col-end-12 max-w-full w-162.5 text-[22px]">
          <span>People also search for</span>
          <div className="flex gap-y-4 flex-wrap -mx-2 mt-1.5">
            {relatedSearches
              ? relatedSearches.map((relatedSearch) => (
                  <PeopleSearch
                    key={relatedSearch.query}
                    query={relatedSearch.query}
                  />
                ))
              : ""}
          </div>
        </div>

        {/* <Pagination/> */}
        <div className="col-start-2 col-end-12 flex justify-center w-full">
          <Pagination
            count={10}
            page={currentPage}
            onChange={(event, page) => navigateHandler(page)}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
