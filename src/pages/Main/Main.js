import React, { useState } from "react";
import logo from "../../assets/logo/google_logo.svg";
import "./Main.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { CgSearch } from "react-icons/cg";
import { CgMic } from "react-icons/cg";
import { MdKeyboardVoice } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { MdHistory } from "react-icons/md";

export default function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [isSuggestListVisible, setIsSuggestListVisible] = useState(false);

  return (
    <>
      <Header />
      <main class="flex flex-col justify-center items-center">
        <img class="logo my-9.5" src={logo} />

        <div className="flex flex-col items-center w-full px-5">
          {/* <div className=" rounded-3xl min-h-12 w-146 shadow-search-bar">
            <form action="">
              <div className="w-full flex relative">
                <CgSearch className="absolute left-3.75 top-1/2 -translate-y-1/2 size-5" />
                <input
                  id="search"
                  placeholder="Search Google or type a url"
                  class="w-full pl-13.75 pr-9 px-12 h-12 outline-0"
                  title="Search"
                  type="search"
                />
                <MdKeyboardVoice className="absolute right-24 top-1/2 -translate-y-1/2 size-5" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-x-0.75 items-center justify-center text-[#1f1f1f] bg-[#f3f5f6] rounded-full h-8 pl-2 py-2 pr-3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="19px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#e3e3e3"
                    className="invert"
                  >
                    <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q26 0 49.5 5t45.5 15l-57 56q-9.32-2-18.64-3T384-744q-70 0-119 49t-49 119q0 70 49 119t119 49q58 0 102-33.5t59-86.5h74q-5 26-16 49.5T577-434l239 239-51 51Zm-69-336q0-90.33-62.84-153.16Q570.33-696 480-696q90.33 0 153.16-62.84Q696-821.67 696-912q0 90.33 62.84 153.16Q821.67-696 912-696q-90.33 0-153.16 62.84Q696-570.33 696-480Z" />
                  </svg>
                  AI Mode
                </button>
              </div>
              <ul className="pb-2 mb-2 w-full max-h-87.5 ">
                <li className="h-11 mr-4 rounded-r-3xl ">
                  <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
                  <a
                    className="relative flex items-center gap-x-4 h-full px-4"
                    href="#"
                  >
                    <CgSearch className="size-4" />
                    <span>What is API</span>
                    <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" />
                  </a>
                </li>
                <li className="h-11 mr-4 rounded-r-3xl ">
                  <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
                  <a
                    className="relative flex items-center gap-x-4 h-full px-4"
                    href="#"
                  >
                    <CgSearch className="size-4" />
                    <span>What is API</span>
                    <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" />
                  </a>
                </li>
                <li className="h-11 mr-4 rounded-r-3xl ">
                  <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
                  <a
                    className="relative flex items-center gap-x-4 h-full px-4"
                    href="#"
                  >
                    <CgSearch className="size-4" />
                    <span>What is API</span>
                    <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" />
                  </a>
                </li>
                <li className="h-11 mr-4 rounded-r-3xl ">
                  <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
                  <a
                    className="relative flex items-center gap-x-4 h-full px-4"
                    href="#"
                  >
                    <CgSearch className="size-4" />
                    <span>What is API</span>
                    <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" />
                  </a>
                </li>
                <li className="h-11 mr-4 rounded-r-3xl ">
                  <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
                  <a
                    className="relative flex items-center gap-x-4 h-full px-4"
                    href="#"
                  >
                    <CgSearch className="size-4" />
                    <span>What is API</span>
                    <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" />
                  </a>
                </li>
              </ul>
            </form>
          </div> */}

          <div
            className={`w-146 max-w-full relative shadow-search-bar rounded-3xl mb-2 overflow-hidden ${
              isSuggestListVisible ? "pb-2" : ""
            }`}
          >
            <form action="">
              <div className="w-full flex relative">
                <CgSearch className="absolute left-3.75 top-1/2 -translate-y-1/2 size-5" />
                <input
                  id="search"
                  placeholder="Search Google or type a url"
                  class="w-full pl-13.75 pr-30 h-12 outline-0"
                  onChange={(event) => setSearchValue(event.target.value)}
                  onFocus={() => setIsSuggestListVisible(true)}
                  onBlur={() => setIsSuggestListVisible(false)}
                  value={searchValue}
                  title="Search"
                  type="search"
                />
                <MdKeyboardVoice className="absolute right-24 top-1/2 -translate-y-1/2 size-5" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-x-0.75 items-center justify-center text-[#1f1f1f] bg-[#f3f5f6] rounded-full h-8 pl-2 py-2 pr-3 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="19px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#e3e3e3"
                    className="invert"
                  >
                    <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q26 0 49.5 5t45.5 15l-57 56q-9.32-2-18.64-3T384-744q-70 0-119 49t-49 119q0 70 49 119t119 49q58 0 102-33.5t59-86.5h74q-5 26-16 49.5T577-434l239 239-51 51Zm-69-336q0-90.33-62.84-153.16Q570.33-696 480-696q90.33 0 153.16-62.84Q696-821.67 696-912q0 90.33 62.84 153.16Q821.67-696 912-696q-90.33 0-153.16 62.84Q696-570.33 696-480Z" />
                  </svg>
                  AI Mode
                </button>
              </div>
            </form>
            <ul
              className={`overflow-y-auto w-full max-h-87.5 ${
                isSuggestListVisible ? "" : "hidden"
              }`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <li
                  className="h-11 mr-4 rounded-r-3xl hover:bg-[#20212419]"
                  key={i}
                >
                  <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
                  <a
                    className="relative flex items-center gap-x-4 h-full px-4"
                    href="#"
                  >
                    <MdHistory className="size-4" />
                    <span>What is API</span>
                    <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            class={`flex gap-x-3 justify-center mt-7.25 ${
              isSuggestListVisible ? "hidden" : ""
            } `}
          >
            <button class="h-9 px-4 text-sm bg-[#f8f9fa] rounded-lg border border-transparent hover:border-[#dadce0] hover:shadow-sm cursor-pointer">
              Google Search
            </button>
            <button class="h-9 px-4 text-sm bg-[#f8f9fa] rounded-lg border border-transparent hover:border-[#dadce0] hover:shadow-sm cursor-pointer">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
