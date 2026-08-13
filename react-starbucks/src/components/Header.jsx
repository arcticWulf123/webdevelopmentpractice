import Link from "./Links";
import Button from "./Button";
import Logo from "./Logo";
function Header() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: "30px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid lightgrey"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginLeft: "120px",
        }}
      >
        <Logo />
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <Link text="menu" className="header-link"></Link>
          <Link text="merchandise" className="header-link"></Link>
          <Link text="rewards" className="header-link"></Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginRight: "120px",
        }}
      >
        <Button
          background="white"
          borderColor="white"
          fontWeight="bold"
          text="Find a Store"
          className="link"
        />
        <Button
          className="signin-button"
          color="black"
          borderColor="black"
          fontWeight="bold"
          text="Sign In"
        />
        <Button
          className="join-button"
          color="white"
          borderColor="white"
          fontWeight="bold"
          text="Join Now"
        />
      </div>
    </nav>
  );
}
export default Header;
