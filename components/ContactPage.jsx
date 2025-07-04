import Image from 'next/image';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#2E4C4C] text-white">
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl font-semibold">CONTACT ME</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch w-full max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-[600px]">
          <Image
            src="/contact.jpg"
            alt="Bhargavi Dance Pose"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-10 bg-[#3C5656]">
          <p className="text-lg mb-6">
            <strong>Email:</strong><br />
            bhargavi.sardesai14@gmail.com
          </p>

          <form className="space-y-6">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 bg-transparent border-b border-white py-2 px-4 focus:outline-none" />
              <input type="text" placeholder="Last Name" className="w-1/2 bg-transparent border-b border-white py-2 px-4 focus:outline-none" />
            </div>

            <input type="email" placeholder="Email *" className="w-full bg-transparent border-b border-white py-2 px-4 focus:outline-none" />

            <textarea placeholder="Message" className="w-full bg-transparent border-b border-white py-2 px-4 focus:outline-none h-32 resize-none" />

            <button type="submit" className="bg-[#FFA77B] text-black px-6 py-2 mt-4 hover:bg-[#ff9862]">Send</button>
          </form>

          <div className="mt-8 flex gap-10 text-white underline text-lg">
            <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
