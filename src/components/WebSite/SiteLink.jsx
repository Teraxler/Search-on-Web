import { IoChevronBackOutline } from "react-icons/io5";

export default function SiteLink(props) {
  return (
    <div className=" border-t border-gainsboro last:border-b py-2.5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg line-clamp-1">
          <a href={props.link} className="text-neon-blue hover:underline">
            {props.title}
          </a>
        </h3>
        <div>
          <a href={props.link} className="text-neon-blue hover:underline">
            <IoChevronBackOutline width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
