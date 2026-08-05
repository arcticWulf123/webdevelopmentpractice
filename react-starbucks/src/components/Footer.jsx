function Footer() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "30px",
          marginTop: "20px",
          border: "1px solid grey"
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
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div>
          <h1>Promotions</h1>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div> 
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
