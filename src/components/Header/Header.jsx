import { Link, useParams } from "react-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import Logo from "../../components/Logo/Logo";

export default function Header() {
  const params = useParams();

  return (
    <header className="flex items-center md:justify-between h-15.5 p-2.5 text-[13px] absolute top-5 left-0 right-0">
      <Link to={"/"}>
        <Logo className="hidden md:block mt-1 ms-6 me-11 w-23 h-7.5" />
      </Link>
      <div className="w-full">
        <SearchBar searchValue={params.q} />
      </div>
    </header>
  );
}
