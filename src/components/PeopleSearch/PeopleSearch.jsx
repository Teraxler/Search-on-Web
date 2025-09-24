import { CgSearch } from "react-icons/cg";
import { Link } from "react-router";

export default function PeopleSearch(porps) {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex-grow w-full md:w-[calc(50%-16px)] mx-2 bg-[#f7f8f9] rounded-lg">
      <Link
        to={`/results/all/${porps.query}`}
        onClick={scrollTop}
        className="flex items-center justify-between gap-x-4.5 py-3 pe-2 ps-4 hover:underline"
      >
        <span className="text-[15px]/5 line-clamp-2 break-words">
          {porps.query}
        </span>
        <div className="flex items-center justify-center size-9">
          <CgSearch width={20} height={20} />
        </div>
      </Link>
    </div>
  );
}
