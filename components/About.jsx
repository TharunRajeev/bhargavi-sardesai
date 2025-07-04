export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen text-white flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="max-w-4xl">
        <h2 className="text-4xl font-semibold mb-6">A Glimpse Into</h2>
        <h2 className="text-4xl font-semibold mb-6">My Artistic Journey</h2>
        <hr className="border-white w-24 mx-auto my-4 opacity-30" />
        <p className="text-lg leading-relaxed">
          I am a Kathak performer, choreographer, and dance educator drawn to the storytelling potential of movement.
          My practice is shaped by tradition yet continuously evolving, rooted in rhythm, gesture, and the emotional
          resonance of lived experience. Whether performing, creating, or teaching, I find meaning in the exchange between
          artist and audience, body and memory, story and space.
        </p>

        {/* YouTube Video */}
        <div className="w-full mt-12 aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/g9HmU_78uuU"
            title="The Solitary Dancer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
