import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutPage from '/components/AboutPage';

export default function About() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
}
