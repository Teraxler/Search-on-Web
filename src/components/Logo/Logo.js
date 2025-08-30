import logo from "../../assets/logo/google_logo.svg";

export default function Logo(props) {
  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
