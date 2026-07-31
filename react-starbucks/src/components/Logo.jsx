import logo from "../assets/starbucks-icon.svg";

function Logo() {
  return (
    <a href="#" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Starbucks" style={{ height: 50, width: "auto" }} />
    </a>
  );
}

export default Logo;
