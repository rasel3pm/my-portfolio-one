import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./page/home/Home";
import Service from "./page/Services/Service";
import VideoPlayer from "./page/video-player/VideoPlayer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/player" element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>

      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Service />
      <Contact />
    </>
  );
}

export default App;
