
import { CgMenuGridO } from "react-icons/cg";

export default function Header() {
  return (
    <header className="flex items-center justify-end h-15.5 p-2.5 text-[13px] font-arial">
      <nav>
        <ul className="flex items-center">
          <li className="mr-3.75">
            <a href="https://mail.google.com/" className="hover:underline transition">Gmail</a>
          </li>
          <li className="mr-3.75">
            <a href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl"
              className="hover:underline transition">
              Images
            </a>
          </li>
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
              <button className="text-white bg-[#0b57d0] rounded-[100px] text-sm font-medium hover:shadow-btn transition-shadow duration-100 ease-out w-21.25 h-10 cursor-pointer ml-1" role="button">
                Sign in
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
