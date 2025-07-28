import "./App.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonies from "./sections/Testimonies";
import Contact from "./sections/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden dark:bg-dark-purple-950 dark:text-white">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
