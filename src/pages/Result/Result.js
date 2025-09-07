import { NavLink, useParams } from "react-router";
import Header from "./Header";
import Footer from "../../components/Footer/Footer";
import AllResults from "./All/All";
import ImageResults from "./Images/Images";

export default function Result() {
  const params = useParams();

  return (
    <>
      <Header />
      <div className="border-b border-[#dadce0] mt-25 px-4 xs:px-5">
        <nav className="grid grid-cols-12 ">
          <ul className="col-start-1 lg:col-start-2 col-end-12 flex max-w-full overflow-x-auto text-[#70757a] font-medium text-sm">
            <li>
              <NavLink className="flex items-end h-12 px-2.5 xs:px-3 text-nowrap hover:text-[#1f1f1f]">
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  هوش مصنوعی
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `flex items-end h-12 px-2.5 xs:px-3 ${
                    isActive ? "text-[#1f1f1f]" : "hover:text-[#1f1f1f]"
                  }`
                }
                to={`/result/all/${params.q}`}
              >
                <span
                  className={`pb-2 mb-0.75 border-b-3 ${
                    params.type === "all"
                      ? "border-[#1f1f1f]"
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
                    isActive ? "text-[#1f1f1f]" : "hover:text-[#1f1f1f]"
                  }`
                }
                to={`/result/images/${params.q}`}
              >
                <span
                  className={`pb-2 mb-0.75 border-b-3 ${
                    params.type === "images"
                      ? "border-[#1f1f1f]"
                      : "border-transparent"
                  }`}
                >
                  تصاویر
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-end h-12 px-2.5 xs:px-3 hover:text-[#1f1f1f]">
                <span className="pb-2 mb-0.75 border-b-3 border-transparent">
                  ویدئو‌ها
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        {params.type === "images" ? <ImageResults /> : <AllResults />}
      </main>
      <Footer />
    </>
  );
}
