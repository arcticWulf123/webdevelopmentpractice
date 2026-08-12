import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div>
        <Hero />
      </div>
      <div className="cards">
        <div className="card-item">
          <img
            src="src\assets\202IcKWzEVF0l6AitZbkDkltWyiTY3tWIfmYe8ku.jpg"
            alt=""
          />
          <h1
            style={{
              color: "#00582f",
            }}
          >
            Summer's Best Bites
          </h1>
          <p
            style={{
              color: "#04914f",
            }}
          >
            Light, craveable, and made to pair with every summer sip
          </p>
          <Button
            color="#00582f"
            background="none"
            borderColor="#00582f"
            fontWeight="bold"
            text="Discover More"
          />
        </div>
        <div className="card-item">
          <img
            src="src\assets\VrLAsYNx1zQQICVTBtquL2iXNyUrvWqwc4IPFNyP.jpg"
            alt=""
          />
          <h1
            style={{
              color: "#00582f",
            }}
          >
            Your Summer, In a Cup
          </h1>
          <p
            style={{
              color: "#04914f",
            }}
          >
            Cool, refreshing favorites for every carefree moment
          </p>
          <Button
            color="#00582f"
            background="none"
            borderColor="#00582f"
            fontWeight="bold"
            text="Explore"
          />
        </div>
        <div className="card-item">
          <img
            src="src\assets\6DKSJeTaGzO7KNVhSyVuWYKkgPERWh5DELCtkY0h.jpg"
            alt=""
          />
          <h1
            style={{
              color: "#00582f",
            }}
          >
            Taste Like Summer
          </h1>
          <p
            style={{
              color: "#04914f",
            }}
          >
            Fun, fruity finds to carry you through the season
          </p>
          <Button
            color="#00582f"
            background="none"
            borderColor="#00582f"
            fontWeight="bold"
            text="See More"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
