// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Footer from "./components/Footer";

/*TODO: 
1. The button should be inside the hero image, bottom center*/
function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
      </div>
      <div className="cards">
        <div className="card-item">
          <img
            src="src\assets\202IcKWzEVF0l6AitZbkDkltWyiTY3tWIfmYe8ku.jpg"
            alt=""
          />
          <h1>Summer's Best Bites</h1>
          <p>Light, craveable, and made to pair with every summer sip</p>
          <Button
            color="green"
            background="none"
            borderColor="green"
            fontWeight="bold"
            text="Discover More"
          />
        </div>
        <div className="card-item">
          <img
            src="src\assets\VrLAsYNx1zQQICVTBtquL2iXNyUrvWqwc4IPFNyP.jpg"
            alt=""
          />
          <h1>Your Summer, In a Cup</h1>
          <p>Cool, refreshing favorites for every carefree moment</p>
          <Button
            color="green"
            background="none"
            borderColor="green"
            fontWeight="bold"
            text="Explore"
          />
        </div>
        <div className="card-item">
          <img
            src="src\assets\6DKSJeTaGzO7KNVhSyVuWYKkgPERWh5DELCtkY0h.jpg"
            alt=""
          />
          <h1>Taste Like Summer</h1>
          <p>Fun, fruity finds to carry you through the season</p>
          <Button
            color="green"
            background="none"
            borderColor="green"
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
