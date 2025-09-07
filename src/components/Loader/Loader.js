import "./Loader.css";

export default function Loader({ className, id }) {
  return <span className={`loader ${className}`} id={id}></span>;
}
