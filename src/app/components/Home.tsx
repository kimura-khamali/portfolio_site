// File: pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Brenda Khamali - Software Engineer</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 relative">
        {/* Top Navigation Icons */}
        <div className="flex justify-end space-x-4 mb-4">
          <a href="#" aria-label="Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* "THIS IS BRENDA KHAMALI" Text */}
        <div className="text-right mb-2">
          <h2 className="text-lg font-bold">THIS IS BRENDA KHAMALI</h2>
        </div>

        {/* Main Content Section with Decorations */}
        <div className="relative py-8">
          {/* Left Top Triangle with Flower */}
          <div className="absolute top-0 left-0 w-1/4">
            <div className="relative">
              <div className="absolute top-0 left-0 z-10 w-24 h-24">
                <Image
                  src="/flower.png"
                  alt="Floral decoration"
                  width={96}
                  height={96}
                  layout="responsive"
                />
              </div>
              <div className="absolute top-0 left-0 w-55 h-50">
                <Image
                  src="/star.png"
                  alt="Triangle shape"
                  width={96}
                  height={96}
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          {/* Main Content with Left-aligned Profile */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
               <div className="md:w-1/3 flex justify-center md:justify-evenly mb-8 md:mb-0">
               <div className="w-56 h-auto  relative">
                <Image
                  src="/profile.png"
                  alt="Brenda Khamali"
                  width={224}
                  height={320}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>

           
         
<div>
<h1 className="text-5xl font-bold mb-2 text-center mt-10 mr-60">Welcome to my Platform</h1>
  <div className="flex justify-center mb-6 mr-46">
    <p className="text-lg">Software Engineer</p>
  </div>
  <div className="flex justify-end mb-6 mr-60">
    <p className="text-md">Full Stack Developer</p>
  </div>

  {/* Bio Text */}
  <div className="mb-8 max-w-xl">
    <p>
      Hello everyone, I'm Brenda Khamali, a passionate Software Engineer
      specializing in full-stack development. I thrive on creating exceptional
      digital experiences using modern web technologies like React and Node.js.
      With a strong commitment to continuous learning and collaboration, I'm
      excited to be able to contribute to innovative projects that make a
      difference.
    </p>
  </div>

  {/* Social Icons */}
  <div className="flex space-x-4 mb-8">
    <a href="#" className="text-black hover:text-gray-700">
      <FaGithub size={24} />
    </a>
    <a href="#" className="text-black hover:text-gray-700">
      <FaLinkedin size={24} />
    </a>
    <a href="#" className="text-black hover:text-gray-700">
      <FaEnvelope size={24} />
    </a>
  </div>

  {/* CV Button */}
  <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300">
    Download CV
  </button>
{/* </div> */}
            </div>
          </div>

          {/* Right Bottom Triangle with Flower */}
          <div className="absolute bottom-0 right-0 w-1/4">
            <div className="relative">
              <div className="absolute bottom-0 right-0 z-10 w-24 h-24">
                <Image
                  src="/flower.png"
                  alt="Floral decoration"
                  width={96}
                  height={96}
                  layout="responsive"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-55 h-24 transform rotate-180">
                <Image
                  src="/star.png"
                  alt="Triangle shape"
                  width={96}
                  height={96}
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          {/* Left Bottom Triangle with Flower */}
          <div className="absolute bottom-0 left-0 w-1/4">
            <div className="relative">
              <div className="absolute bottom-0 left-0 z-10 w-24 h-24">
                <Image
                  src="/flower.png"
                  alt="Floral decoration"
                  width={96}
                  height={96}
                  layout="responsive"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-55 h-24">
                <Image
                  src="/star.png"
                  alt="Triangle shape"
                  width={96}
                  height={96}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

