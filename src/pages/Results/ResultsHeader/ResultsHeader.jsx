import Header from "../../../components/Header/Header";
import { NavLink, useParams } from "react-router";

export default function ResultsHeader() {
  const params = useParams();

  return (
    <>
      <Header />
      <div className="border-b border-gainsboro mt-25 px-4 xs:px-5">
        <nav className="grid grid-cols-12 ">
          <ul className="col-start-1 lg:col-start-2 col-end-12 flex max-w-full pb-0.75 overflow-x-auto text-[#70757a] font-medium text-sm">
            <li>
              <NavLink className="flex items-end h-12 px-2.5 xs:px-3 text-nowrap hover:text-eerie-black">
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  هوش مصنوعی
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-end h-12 px-2.5 xs:px-3 ${
                    isActive ? "text-eerie-black" : "hover:text-eerie-black"
                  }`
                }
                to={`/results/all/${params.q}`}
              >
                <span
                  className={`pb-2 mb-0.75 border-b-3 ${
                    params.type === "all"
                      ? "border-eerie-black"
                      : "border-transparent"
                  }`}
                >
                  همه
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-end h-12 px-2.5 xs:px-3 ${
                    isActive ? "text-eerie-black" : "hover:text-eerie-black"
                  }`
                }
                to={`/results/images/${params.q}`}
              >
                <span
                  className={`pb-2 mb-0.75 border-b-3 ${
                    params.type === "images"
                      ? "border-eerie-black"
                      : "border-transparent"
                  }`}
                >
                  تصاویر
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-end h-12 px-2.5 xs:px-3 hover:text-eerie-black">
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  ویدئو‌ها
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
