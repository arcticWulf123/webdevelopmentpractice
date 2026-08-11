function Footer() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
          marginTop: "20px",
          border: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1>About Us</h1>
          <a href="">Our Company</a>
          <a href="">Stories and News</a>
          <a href="">Customer Service</a>
          <a href="">Careers</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1>Order Online</h1>
          <a href="">Order on the App</a>
          <a href="">Delivery</a>
          <a href="">Send eGifts</a>
          <a href="">Grab Partnership</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1>Rewards</h1>
          <a href="">My Account</a>
          <a href="">View Transactions</a>
          <a href="">Reload</a>
          <a href="">FAQs</a>
        </div>
        <div>
          <h1>Social Impact</h1>
        </div>
        <div>
          <h1>Promotions</h1>
        </div>
        <div
          style={{
            writingMode: "vertical-rl",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "black",
            letterSpacing: "2px",
            transform: "rotate(180deg)",
          }}
        >
          STARBUCKS®
        </div>
      </div>
      <footer
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <a href="">Web Accesibility</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Site Map</a>
          <a href="">Cookie Preferences</a>
        </div>
        <div style={{}}>
          <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
