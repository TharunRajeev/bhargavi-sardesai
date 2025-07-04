import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center text-white bg-transparent">
      <div className="flex gap-6">
        <Link href="/"><span className="hover:underline cursor-pointer">Home</span></Link>
        <Link href="/about">
          <span className="hover:underline cursor-pointer">About</span>
        </Link>
        <Link href="#projects"><span className="hover:underline cursor-pointer">Projects</span></Link>
        <Link href="/contact"><span className="hover:underline cursor-pointer">Contact</span></Link>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" target="_blank"><FaLinkedin size={20} /></a>
        <a href="#" target="_blank"><FaInstagram size={20} /></a>
        <a href="#" target="_blank"><FaFacebook size={20} /></a>
      </div>
    </nav>
  );
}
