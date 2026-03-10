import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="flex-1 px-6 pt-20 pb-8 text-white flex flex-col items-center overflow-y-auto">
      <h2 className="text-4xl font-semibold mb-3 text-center">CHOREOGRAPHIES</h2>
      <hr className="border-white w-24 mb-8 opacity-30" />

      <div className="relative max-w-7xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Project 1 */}
        <Link href="/Projects/Shrouds" className="group flex flex-col rounded-2xl border border-white/15 bg-black/35 p-4 shadow-xl">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
            <Image src= "/Shrouds.jpeg" alt="Shrouds Project" fill className="object-cover" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Embroidered Shrouds of Modesty (2025)</h3>
          <p className="mt-1 text-base leading-relaxed text-[#E6F3F2]">A contemporary exploration of cultural identity, modesty, and the female form through the lens of traditional embroidery and movement.</p>
          <span className="mt-4 inline-block text-sm font-semibold tracking-wide underline underline-offset-4">Know more</span>
        </Link>

        {/* Project 2 */}
        <Link href="/Projects/SolitaryDancer" className="group flex flex-col rounded-2xl border border-white/15 bg-black/35 p-4 shadow-xl">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
            <Image src= "/Solitary01.png" alt="Solitary Dancer Project" fill className="object-cover" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Solitary Dancer (2023)</h3>
          <p className="mt-1 text-base leading-relaxed text-[#E6F3F2]">An intimate solo work examining isolation, introspection, and the relationship between the dancer and empty space.</p>
          <span className="mt-4 inline-block text-sm font-semibold tracking-wide underline underline-offset-4">Know more</span>
        </Link>

        {/* Project 3 */}
        <Link href="/Projects/Shiva" className="group flex flex-col rounded-2xl border border-white/15 bg-black/35 p-4 shadow-xl">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
            <Image src= "/shiva1.jpg" alt="Shiva Project" fill className="object-cover" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Shiva! The omnipresent..The Omniscient (2021)</h3>
          <p className="mt-1 text-base leading-relaxed text-[#E6F3F2]">A dance work celebrating the cosmic dance of Shiva, weaving together rhythm, mythology, and spiritual devotion.</p>
          <span className="mt-4 inline-block text-sm font-semibold tracking-wide underline underline-offset-4">Know more</span>
        </Link>

        {/* Project 4 */}
        <Link href="/Projects/Barbarik" className="group flex flex-col rounded-2xl border border-white/15 bg-black/35 p-4 shadow-xl">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
            <Image src= "/barbs.jpg" alt="Barbarik Project" fill className="object-cover" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Barbarik (2021)</h3>
          <p className="mt-1 text-base leading-relaxed text-[#E6F3F2]">A choreographic interpretation of the mythological character Barbarik, exploring themes of sacrifice, choice, and destiny through Kathak.</p>
          <span className="mt-4 inline-block text-sm font-semibold tracking-wide underline underline-offset-4">Know more</span>
        </Link>

        </div>
      </div>
    </section>
  );
}
