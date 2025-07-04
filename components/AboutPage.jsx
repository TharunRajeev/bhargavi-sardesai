import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


export default function AboutPage() {
  const { basePath } = useRouter();
  return (
    <div className="bg-[#0A2C2E] text-white px-6 md:px-20 py-16 space-y-24">
      {/* My Story */}
      <section>
        <h1 className="text-5xl font-semibold mb-10">MY STORY</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-6 text-lg leading-8">
            <p>
              I am a dancer shaped by both discipline and discovery. My foundation lies in Kathak, nurtured through years of intensive training under Guru Pandita Shama Bhate in Pune, Maharashtra, India. That early mentorship grounded me in the intricacies of rhythm, expression, and classical form.
            </p>
            <p>
              I went on to complete an MA in Kathak, immersing myself further in the historical, technical, and philosophical layers of the tradition. Curiosity led me to pursue an MFA in Dance at California State University, Long Beach, where I encountered new choreographic tools, pedagogical frameworks, and interdisciplinary ways of thinking about movement.
            </p>
            <p>
                The intersection of these two worlds, classical Indian dance and contemporary dance education, has expanded how I create, teach, and perform. As an artist, I am drawn to ideas that live beneath the surface: untold narratives, quiet resistance, generational memory.
            </p>
            <p>
                My choreography often emerges from research, intuition, and the body’s capacity to carry story. I approach performance as a conversation, sometimes personal, sometimes political, always evolving. This space reflects the many strands of my practice: movement, inquiry, tradition, and experimentation.
            </p>
            <p>
                Thank you for taking the time to explore it.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={`${basePath}/about.jpg`} // ✅ updated path
              alt="Bhargavi performing"
              width={600}
              height={800}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#264445] p-10 rounded-lg">
        <h2 className="text-3xl font-semibold mb-2">Let’s Work Together</h2>
        <p className="mb-6">Get in touch so we can start working together.</p>

        <div className="flex gap-4 mb-6">
          <a href="#" target="_blank"><FaLinkedin size={24} /></a>
          <a href="#" target="_blank"><FaInstagram size={24} /></a>
          <a href="#" target="_blank"><FaFacebook size={24} /></a>
        </div>

        <form className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1">First Name</label>
            <input type="text" className="w-full p-2 bg-[#0A2C2E] border-b border-white outline-none" />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input type="text" className="w-full p-2 bg-[#0A2C2E] border-b border-white outline-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">Email *</label>
            <input type="email" className="w-full p-2 bg-[#0A2C2E] border-b border-white outline-none" required />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1">Message</label>
            <textarea className="w-full p-2 bg-[#0A2C2E] border-b border-white outline-none" rows={5}></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-[#f59e7b] text-black px-6 py-2 rounded hover:bg-[#ec7e50]">Send</button>
          </div>
        </form>
      </section>
    </div>
  );
}
