
import logo from "../../assets/logo/google_logo.svg";
import Header from "./Header";
import Footer from "./Footer";

import SearchBar from "../../components/SearchBar/SearchBar";

export default function Main() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <img className="logo my-9.5" src={logo} />
        <div className="flex flex-col items-center w-full px-5">
          <SearchBar />
          <div className="flex gap-x-3 justify-center mt-7.25">
            <button className="h-9 px-4 text-sm bg-[#f8f9fa] rounded-lg border border-transparent hover:border-[#dadce0] hover:shadow-sm cursor-pointer">
              Google Search
            </button>
            <button className="h-9 px-4 text-sm bg-[#f8f9fa] rounded-lg border border-transparent hover:border-[#dadce0] hover:shadow-sm cursor-pointer">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
