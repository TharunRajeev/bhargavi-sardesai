import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        const data = await response.json();
        setStatus(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex-1 bg-black text-white flex flex-col overflow-hidden">
      <div className="text-center pt-20 pb-4">
        <h1 className="text-4xl md:text-5xl font-semibold">LET'S CONNECT</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch w-full max-w-7xl mx-auto flex-1 overflow-hidden">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-full lg:h-auto">
          <Image
            src= "/contact1.jpg"
            alt="Bhargavi Dance Pose"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-8 bg-black overflow-y-auto">
          <p className="text-base mb-4">
            <strong>Email:</strong><br />
            grooves.bhargavi@gmail.com
            <br />
            <br />
            <strong>Contact Number:</strong><br />
            +1(562)841-2322
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 bg-transparent border-b border-white py-2 px-4 focus:outline-none" 
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 bg-transparent border-b border-white py-2 px-4 focus:outline-none" 
              />
            </div>

            <input 
              type="email" 
              name="email"
              placeholder="Email *" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white py-2 px-4 focus:outline-none" 
            />

            <textarea 
              name="message"
              placeholder="Message" 
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white py-2 px-4 focus:outline-none h-24 resize-none" 
            />

            <button 
              type="submit" 
              disabled={loading}
              className="bg-[#FFA77B] text-black px-6 py-2 mt-3 hover:bg-[#ff9862] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

            {status && (
              <p className={`text-sm mt-3 ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
