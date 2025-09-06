import logo from "../../assets/logo/lgoo.png";

export default function Logo(props) {
  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
