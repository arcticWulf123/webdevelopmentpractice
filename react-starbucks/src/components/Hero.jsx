import Button from "./Button";
function Hero() {
  return (
    <div className="hero">
      <img
        src="src\assets\QFcQDRQ4fLy46pU9BdI8B452MikLHiwf5nkYUmQm.jpeg"
        alt=""
        className="img"
      />
      <Button
        color="green"
        background="none"
        borderColor="green"
        fontWeight="bold"
        text="Discover the Flavors"
      />
    </div>
  );
}

export default Hero;
