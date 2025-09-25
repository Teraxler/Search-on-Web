import { FiChevronLeft } from "react-icons/fi";
import PaginationItem from "./PaginationItem";

export default function Pagination({ count = 2, page = 1, onChange }) {
  function navItems() {
    let template = [];

    let start = page - 2;
    while (start < 1) start++;

    for (let i = start; i < page; i++) {
      template.push(
        <PaginationItem
          key={i}
          isActive={page === i}
          onClick={() => onChange(i)}
        >
          {i}
        </PaginationItem>
      );
    }

    let end = page + 2;
    while (end > count) end--;

    for (let i = page; i <= end; i++) {
      template.push(
        <PaginationItem
          key={i}
          isActive={page === i}
          onClick={() => onChange(i)}
        >
          {i}
        </PaginationItem>
      );
    }

    return template;
  }

  return (
    <nav>
      <ul className="flex gap-3 text-[13px] font-semibold text-[#333333]">
        <PaginationItem
          key={"prev"}
          onClick={() => onChange(page - 1)}
          isDisable={page === 1}
        >
          <FiChevronLeft className="text-base rotate-180 font-semibold" />
        </PaginationItem>

        {navItems()}

        <PaginationItem
          key={"next"}
          onClick={() => onChange(page + 1)}
          isDisable={page === count}
        >
          <FiChevronLeft className="text-base" />
        </PaginationItem>
      </ul>
    </nav>
  );
}
