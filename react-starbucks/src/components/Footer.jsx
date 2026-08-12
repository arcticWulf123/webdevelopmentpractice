import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

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
          <a href="" className="footer-link">
            Our Company
          </a>
          <a href="" className="footer-link">
            Stories and News
          </a>
          <a href="" className="footer-link">
            Customer Service
          </a>
          <a href="" className="footer-link">
            Careers
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1>Order Online</h1>
          <a href="" className="footer-link">
            Order on the App
          </a>
          <a href="" className="footer-link">
            Delivery
          </a>
          <a href="" className="footer-link">
            Send eGifts
          </a>
          <a href="" className="footer-link">
            Grab Partnership
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h1>Rewards</h1>
          <a href="" className="footer-link">
            My Account
          </a>
          <a href="" className="footer-link">
            View Transactions
          </a>
          <a href="" className="footer-link">
            Reload
          </a>
          <a href="" className="footer-link">
            FAQs
          </a>
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
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "0 30px",
          marginTop: "20px",
        }}
      >
        <a href="#" className="social-icon" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" className="social-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" className="social-icon" aria-label="X">
          <FaXTwitter />
        </a>
        <a href="#" className="social-icon" aria-label="YouTube">
          <FaYoutube />
        </a>
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
          <a href="" className="second-footer-links">
            Web Accessibility
          </a>
          <a href="" className="second-footer-links">
            Privacy Policy
          </a>
          <a href="" className="second-footer-links">
            Terms of Use
          </a>
          <a href="" className="second-footer-links">
            Site Map
          </a>
          <a href="" className="second-footer-links">
            Cookie Preferences
          </a>
        </div>
        <div style={{}}>
          <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
