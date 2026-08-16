import "./App.css";

let name = "Jade";
function App() {
  return (
    // <div>
    //   <Goodbye name="Jade" />
    //   <Goodbye name="Roland" />
    //   <NameAndAge name="Damian" age="17" />
    // </div>
    <div>
      <Header />
      <Goodbye name="Jade"/>
      <Main />
      <Footer />
    </div>
  );
}

function Goodbye(props) {
  return <h1 className="header">Goodbye {props.name}</h1>;2
}

export default App;

function NameAndAge({ name, age }) {
  return (
    <h1>
      Hello my name is {name}, and I am {age} years old
    </h1>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div>
      <input type="text" className="input" />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <nav className="footer">
        <span>Copywrite lol 2006</span>
      </nav>
    </footer>
  )
}
/* 
1. Components are reusable in React
2. Props act as the "argument" that a function can use
3. Destructuring is a common practice in React, see function in line 26
*/
