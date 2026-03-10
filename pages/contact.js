import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactPage from '/components/ContactPage'; // the actual about section content

export default function contact() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
}
