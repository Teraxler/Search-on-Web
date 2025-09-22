import React from "react";
import { NavLink, useParams } from "react-router";
import jsonData from "../../../data/newsCategories.json";
import Header from "../../../components/Header/Header";

export default function HeaderNews() {
  const params = useParams();

  return (
    <>
      <Header />
      <div className="border-b border-gainsboro mt-25 px-4 xs:px-5 bg-white">
        <nav className="grid grid-cols-12 ">
          <ul className="col-start-1 lg:col-start-2 col-end-12 flex max-w-full overflow-x-auto text-[#70757a] font-medium text-sm">
            <li>
              <NavLink
                className={`flex items-end h-12 px-2.5 xs:px-3 ${
                  params.cat == null
                    ? "text-eerie-black"
                    : "hover:text-eerie-black"
                }`}
                to={`/khabar`}
              >
                <span
                  className={`pb-2 mb-0.75 border-b-3 ${
                    params.cat == null
                      ? "border-eerie-black"
                      : "border-transparent"
                  }`}
                >
                  برگزیده
                </span>
              </NavLink>
            </li>
            {jsonData.newsCategories &&
              jsonData.newsCategories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    key={category.id}
                    className={({ isActive }) =>
                      `flex items-end h-12 px-2.5 xs:px-3 ${
                        isActive ? "text-eerie-black" : "hover:text-eerie-black"
                      }`
                    }
                    to={`/khabar/${category.name}`}
                  >
                    <span
                      className={`pb-2 mb-0.75 border-b-3 ${
                        params.cat === category.name
                          ? "border-eerie-black"
                          : "border-transparent"
                      }`}
                    >
                      {category.title}
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
