import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p>© {new Date().getFullYear()} Hengki Kurniawan. All rights reserved.</p>
          <a href="#home" className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;