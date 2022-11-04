import "./App.css";
import About from "./components/about/About";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skill/Skill";
// import SocialLink from "./components/social-link/SocialLink";
import Home from "./page/home/Home";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Portfolio />
    </div>
  );
}

export default App;
