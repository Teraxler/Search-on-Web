import Header from "./Header";

import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

export default function Main() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <Logo className="my-9.5 w-50 xs:w-60 sm:w-auto" />

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
      <Footer className="fixed bottom-0 left-0 right-0" />
    </>
  );
}
