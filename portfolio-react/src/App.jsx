import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RetroOSPortfolio from "./components/Retro";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* <Header />
      <main className="flex-grow container mx-auto px-6 py-12">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer /> */}
      <RetroOSPortfolio />
    </div>
  );
}

export default App;
