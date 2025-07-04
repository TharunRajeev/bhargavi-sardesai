// pages/index.js
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url('/hero.jpg')` }}
    >
      <div className="bg-black/20 min-h-screen w-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
