import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-black">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
