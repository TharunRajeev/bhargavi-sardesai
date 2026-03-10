import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-wrap justify-between items-center gap-y-2 text-white bg-[black]">
      <div className="flex gap-6 text-lg">
        <Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link>
        <Link href="/about"><span className="hover:underline cursor-pointer">About</span></Link>
        <Link href="/performer-reel"><span className="hover:underline cursor-pointer">Performances</span></Link>
        <Link href="/projects"><span className="hover:underline cursor-pointer">Choreographies</span></Link>
        <Link href="/teaching"><span className="hover:underline cursor-pointer">Teaching</span></Link>
        <Link href="/contact"><span className="hover:underline cursor-pointer">Contact</span></Link>
      </div>
      <div className="flex gap-4 items-center text-xl">
        <a href="https://www.linkedin.com/in/bhargavi-sardesai-39a570274/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        <a href="https://www.instagram.com/bhargavi.sardesai/#" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
        <a href="https://www.facebook.com/bhargavi.sardesai?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
      </div>
    </nav>
  );
}
