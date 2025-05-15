'use client'
// pages/contact.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // You could add success notification here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact | My Portfolio</title>
        <meta name="description" content="Contact me for collaborations or questions" />
      </Head>
      
      <main className="max-w-full mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact</h1>
        
        <div className="flex flex-col md:flex-row gap-0 justify-center items-stretch max-w-6xl mx-auto">
          {/* Profile Image Section */}
          <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center md:justify-end items-center px-4 md:px-8">
            <div className="w-full max-w-sm">
              <Image 
                src="/prvimage.jpg" 
                alt="Profile Picture" 
                width={400}
                height={500}
                className="rounded-lg shadow-md w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 lg:w-7/12 flex justify-center md:justify-start items-center px-4 md:px-8">
            <div className="bg-[#AB9898] bg-opacity-30 rounded-lg p-6 shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-semibold text-center text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 bg-opacity-50 border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 bg-opacity-50 border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 bg-opacity-50 border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}