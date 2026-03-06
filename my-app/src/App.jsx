import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedWork from './components/FeaturedWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-pastel-cream dark:bg-dark-bg min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <FeaturedWork />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
