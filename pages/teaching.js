import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function TeachingPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main className="pt-28 px-6 max-w-6xl mx-auto">
        <div className="relative w-full h-[260px] md:h-[340px] rounded-xl overflow-hidden border border-white/15 mb-8 shadow-xl bg-black/70">
          <Image
            src="/Teaching.png"
            alt="Teaching"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <h1 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 text-4xl md:text-5xl font-semibold tracking-wide">
            TEACHING
          </h1>
        </div>

        <section className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/15 bg-black/35 p-6 md:p-8 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Teaching Philosophy</h2>

              <div className="space-y-5 text-[#E6F3F2] text-base md:text-lg leading-relaxed">
                <p>
                  I believe dance should be accessible to everyone. While Kathak is a classical Indian dance form rooted in rhythm,
                  storytelling, and tradition, I approach teaching it in ways that welcome students from all backgrounds and levels of
                  experience.
                </p>

                <p>
                  My classes balance classical rigor with an open, supportive learning environment. Students build a strong foundation in
                  Kathak technique while also developing creativity, musicality, and confidence through guided exploration and practice.
                  I encourage curiosity, discussion, and personal interpretation so that students can connect with the form in meaningful
                  ways.
                </p>

                <p>
                  Having trained for over 16 years under Guru Pandita Shama Bhate in the traditional Gurukul system, I value discipline
                  and lineage-based learning. At the same time, my experience teaching in community and university settings in the United
                  States has shaped a student-centered approach that prioritizes inclusivity, cultural awareness, and collaborative
                  learning.
                </p>

                <p>
                  Through teaching, I aim to create a space where students not only learn dance, but also discover new ways of
                  expressing themselves, understanding culture, and engaging with the world through movement.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/35 p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-semibold">Enroll Now!</h3>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://wa.me/15628412322?text=Hi%20Bhargavi%2C%20I%20want%20to%20enroll%20in%20your%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>

                <a
                  href="tel:+15628412322"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/60 transition-colors duration-300"
                  aria-label="Call"
                >
                  <FaPhoneAlt size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-black/35 p-5 md:p-6 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Upcoming Classes</h2>

            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden border border-white/15">
                <div className="relative w-full h-[420px] bg-black/60">
                  <Image
                    src="/poster.jpg"
                    alt="Upcoming teaching flyer 1"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/15">
                <div className="relative w-full h-[420px] bg-black/60">
                  <Image
                    src="/SPANDAN Flyer.png"
                    alt="Upcoming teaching flyer 2"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
