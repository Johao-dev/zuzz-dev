import "./App.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonies from "./sections/Testimonies";
import Contact from "./sections/Contact";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonies />
      <Contact />
    </>
  );
}

export default App;
