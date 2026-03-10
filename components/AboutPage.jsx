export default function AboutPage() {
  return (
    <div className="relative flex-1 bg-[black] text-white overflow-y-auto">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about2.jpg"
          alt="Background"
          className="w-full h-full object-cover object-[10px_-60px] scale-100 opacity-100"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 40%, black 60%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 40%, black 60%, black 100%)'
          }}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-black/0" />

      {/* Content layer */}
      <div className="relative z-20 px-6 md:px-12 pt-16 pb-4">
        <section>
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 tracking-wide">ABOUT</h1>

          <div className="max-w-2xl space-y-3 text-sm md:text-base leading-5 md:leading-6 text-[#E6F3F2]">
              <p>
                Bhargavi Sardesai is a Kathak artist, choreographer, and educator whose work is rooted in tradition while exploring its possibilities within contemporary contexts. Trained for over 16 years under the esteemed guidance of Guru Pandita Shama Bhate, she carries forward the precision, discipline, and storytelling lineage of Kathak while continually questioning how the form can evolve through new artistic dialogues.
              </p>

              <p>
                Kathak forms the rhythmic and structural foundation of Bhargavi’s practice. Its intricate footwork, expressive nuance, and narrative depth shape her artistic voice, while her choreographic work explores the space between classical form and contemporary movement. Through this interplay, she investigates how tradition can engage with new perspectives, interdisciplinary collaboration, and evolving cultural contexts.
              </p>

              <p>
                Bhargavi holds a Master of Arts in Kathak with distinction from Lalit Kala Kendra, Savitribai Phule Pune University, and an MFA from California State University, Long Beach. Her performances have taken her across India and internationally, including appearances at the Beethoven Festival in Bonn alongside Pt. Rakesh Chaurasia and Bernhard Schimpelsberger, and at the World Conference hosted by Deutsche Welle in Bonn. She continues to perform and develop work in the United States, presenting Kathak to diverse audiences and exploring its resonance in diasporic spaces.
              </p>

              <p>
                She has been awarded the CCRT Senior Scholarship by the Government of India and the Distinguished Achievement in Creative Activity Award in recognition of her artistic contributions. Through performance, choreography, and movement pedagogy, Bhargavi seeks to share Indian stories and traditions in ways that foster connection, curiosity, and deeper engagement with Kathak.
              </p>
          </div>

          <div className="mt-4 max-w-2xl">
            <a
              href="/Sardesai_Bhargavi_CV.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg border border-white/20 bg-black/40 text-white hover:bg-black/60 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}