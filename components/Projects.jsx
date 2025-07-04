import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 text-white flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-4 text-center">Curations & Collaborations</h2>
      <hr className="border-white w-24 mb-12 opacity-30" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Project 1 */}
        <div className="text-center">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image src="/Shrouds.jpeg" alt="Project 1" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Embroidered Shrouds of Modesty (2025)</p>
        </div>

        {/* Project 2 */}
        <div className="text-center">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image src="/barbarik.jpg" alt="Project 2" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Barbarik (2021)</p>
        </div>

        {/* Project 3 */}
        <div className="text-center">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image src="/shiva.jpg" alt="Project 3" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Shiva! The omnipresent..The Omniscient (2021)</p>
        </div>

        {/* Project 4 */}
        <div className="text-center">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image src="/chotekhani.jpg" alt="Project 4" fill className="object-cover" />
          </div>
          <p className="mt-4 text-lg font-medium">Chotekhani Mehfil (2021)</p>
        </div>
      </div>
    </section>
  );
}
