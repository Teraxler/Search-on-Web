// import { IoIosClose } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router";

export default function SuggestionItem(props) {
  return (
    <li className="h-11 me-4 rounded-r-3xl hover:bg-[#20212419]">
      <div className="w-auto border-l-7 border-[#1a73e8] rounded-r-sm"></div>
      <Link
        onClick={() => props.onClick(props.value)}
        to={`/result/${props.value}`}
        className="relative flex items-center gap-x-4 h-full px-4"
      >
        <CgSearch className="size-4" />
        <span>{props.value}</span>
        {/* <IoIosClose className="size-5 absolute top-1/2 -translate-1/2 right-1" /> */}
      </Link>
    </li>
  );
}
