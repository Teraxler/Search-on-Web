import { CgMenuGridO } from "react-icons/cg";
import SearchBar from "../../components/SearchBar/SearchBar";

import { Link, useParams } from "react-router";
import Logo from "../../components/Logo/Logo";

export default function Header() {
  const params = useParams();

  return (
    <header className="flex items-center justify-around lg:justify-between h-15.5 p-2.5 text-[13px] absolute top-5 left-0 right-0">
      <Link to={"/"}>
        <Logo className="hidden lg:block mt-1 ms-6 me-11 w-23 h-7.5" />
      </Link>
      <SearchBar searchValue={params.q} />
      <nav>
        <ul className="hidden sm:flex items-center">
          <li>
            <button
              className="cursor-pointer flex justify-center items-center size-10 rounded-full hover:bg-gray-100 transition"
              target="_blank"
              title="Google apps"
              href="https://www.google.co.uk/intl/en/options/"
            >
              <CgMenuGridO size={24} width={40} hanging={40} />
            </button>
          </li>
          <li>
            <a
              target="_blank"
              href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.co.uk/%3Fgws_rd%3Dssl"
              className=""
            >
              <button
                className="text-white bg-[#0b57d0] rounded-[100px] text-sm font-medium hover:shadow-btn transition-shadow duration-100 ease-out w-21.25 h-10 cursor-pointer ms-1"
                role="button"
              >
                Sign in
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
