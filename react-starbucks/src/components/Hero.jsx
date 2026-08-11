import Button from "./Button";
function Hero() {

  /*
  1. Header should be sticky all the way to the bottom
  2. Button should be a bit bigger (both font and the button itself) embolben it also
  3. Add  appropriate hover effects to links in header
  4. Add starbucks vertical sign near the promotions tab
  5. Add social media links along with its hover effects
  6. Add hover effects to footer links
  7. Add more gaps to the footer links
  */
  return (
    <div className="hero">
      <img
        src="src\assets\QFcQDRQ4fLy46pU9BdI8B452MikLHiwf5nkYUmQm.jpeg"
        alt=""
        className="img"
      />
      <Button
        color="#00582f"
        background="none"
        borderColor="#00582f"
        fontWeight="bold"
        text="Discover the Flavors"
        className="hero-button"
      />
    </div>
  );
}

export default Hero;
