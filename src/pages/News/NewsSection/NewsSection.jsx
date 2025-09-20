import React from "react";

export default function NewsSection({ title, children }) {
  return (
    <section className="p-4 shadow-md bg-white rounded">
      <h2 className="border-b-2 border-b-[#d71920] font-bold pb-0.75 mb-1">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
