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
        zIndex: 100
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Logo />
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <Link text="menu"></Link>
          <Link text="merchandise"></Link>
          <Link text="rewards"></Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Button
          color="black"
          background="white"
          borderColor="white"
          fontWeight="bold"
          text="Find a Store"
        />
        <Button
          color="black"
          background="white"
          borderColor="black"
          fontWeight="bold"
          text="Sign In"
        />
        <Button
          color="white"
          background="black"
          borderColor="white"
          fontWeight="bold"
          text="Join Now"
        />
      </div>
    </nav>
  );
}
export default Header;
