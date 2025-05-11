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
              <div className="absolute top-0 left-0 w-24 h-24">
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
            {/* Profile Image on Left */}
            <div className="md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0">
              <div className="w-56 h-auto relative">
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

            {/* Content on Right */}
            <div className="md:w-2/3 flex flex-col items-center md:items-start">
              <h1 className="text-4xl font-bold mb-2">Welcome to my Platform</h1>
              <p className="text-lg mb-1">Software Engineer</p>
              <p className="text-md mb-6">Full Stack Developer</p>

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
              <div className="absolute bottom-0 right-0 w-24 h-24 transform rotate-180">
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
              <div className="absolute bottom-0 left-0 w-24 h-24">
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



// // File: pages/index.js
// import Head from 'next/head';
// import Image from 'next/image';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Brenda Khamali - Software Engineer</title>
//         <meta name="description" content="Software Engineer Portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-8 relative">
//         {/* Top Navigation Icons */}
//         <div className="flex justify-end space-x-4 mb-8">
//           <a href="#" aria-label="Home">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//             </svg>
//           </a>
//           <a href="#" aria-label="Instagram">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
//             </svg>
//           </a>
//           <a href="#" aria-label="Twitter">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//           </a>
//         </div>

//         {/* Main Content */}
//         <div className="relative">
//           {/* "THIS IS BRENDA KHAMALI" Text */}
//           <div className="text-right mb-8">
//             <h2 className="text-lg font-bold">THIS IS BRENDA KHAMALI</h2>
//           </div>

//           {/* Left Top Triangle with Flower */}
//           <div className="absolute top-0 left-0 w-1/4">
//             <div className="relative">
//               <div className="absolute top-0 left-0 z-10 w-24 h-24">
//                 <Image
//                   src="/flower.png"
//                   alt="Floral decoration"
//                   width={96}
//                   height={96}
//                   layout="responsive"
//                 />
//               </div>
//               <div className="absolute top-0 left-0">
//                 <Image
//                   src="/star.png"
//                   alt="Triangle shape"
//                   width={150}
//                   height={150}
//                   layout="responsive"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Main Content with Profile Image on Right */}
//           <div className="flex flex-col md:flex-row items-center justify-between mt-16 mb-32">
//             {/* Left Side Content */}
//             <div className="md:w-3/5 mb-8 md:mb-0 flex flex-col items-center md:items-start">
//               <h1 className="text-4xl font-bold mb-2 text-center md:text-left">Welcome to my Platform</h1>
//               <p className="text-lg text-center md:text-left mb-1">Software Engineer</p>
//               <p className="text-md text-center md:text-left mb-8">Full Stack Developer</p>

//               {/* Bio Text */}
//               <div className="max-w-xl text-center md:text-left mb-8">
//                 <p>
//                   Hello everyone, I'm Brenda Khamali, a passionate Software Engineer
//                   specializing in full-stack development. I thrive on creating exceptional
//                   digital experiences using modern web technologies like React and Node.js.
//                   With a strong commitment to continuous learning and collaboration, I'm
//                   excited to be able to contribute to innovative projects that make a
//                   difference.
//                 </p>
//               </div>

//               {/* Social Icons */}
//               <div className="flex justify-center md:justify-start space-x-4 mb-8">
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaGithub size={24} />
//                 </a>
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaEnvelope size={24} />
//                 </a>
//               </div>

//               {/* CV Button */}
//               <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300">
//                 Download CV
//               </button>
//             </div>

//             {/* Right Side Profile Image */}
//             <div className="md:w-2/5 flex justify-center md:justify-end">
//               <div className="rounded-full overflow-hidden w-48 h-48 border-2 border-white shadow-lg">
//                 <Image
//                   src="/profile.png"
//                   alt="Brenda Khamali"
//                   width={192}
//                   height={192}
//                   layout="responsive"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Bottom Triangle with Flower */}
//           <div className="absolute bottom-0 right-0 w-1/4">
//             <div className="relative">
//               <div className="absolute bottom-0 right-0 z-10 w-24 h-24">
//                 <Image
//                   src="/flower.png"
//                   alt="Floral decoration"
//                   width={96}
//                   height={96}
//                   layout="responsive"
//                 />
//               </div>
//               <div className="absolute bottom-0 right-0 transform rotate-180">
//                 <Image
//                   src="/star.png"
//                   alt="Triangle shape"
//                   width={150}
//                   height={150}
//                   layout="responsive"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Left Bottom Triangle with Flower */}
//           <div className="absolute bottom-0 left-0 w-1/4">
//             <div className="relative">
//               <div className="absolute bottom-0 left-0 z-10 w-24 h-24">
//                 <Image
//                   src="/flower.png"
//                   alt="Floral decoration"
//                   width={96}
//                   height={96}
//                   layout="responsive"
//                 />
//               </div>
//               <div className="absolute bottom-0 left-0">
//                 <Image
//                   src="/star.png"
//                   alt="Triangle shape"
//                   width={150}
//                   height={150}
//                   layout="responsive"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// // File: pages/index.js
// import Head from 'next/head';
// import Image from 'next/image';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>Brenda Khamali - Software Engineer</title>
//         <meta name="description" content="Full Stack Developer Portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <section className="relative py-16">
//           <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-200 -z-10 transform -skew-x-12 origin-top-right" />
          
//           <div className="relative z-10 flex flex-col lg:flex-row items-center">
//             <div className="lg:w-1/2 mb-8 lg:mb-0">
//               <div className="relative">
//                 <div className="absolute -top-10 -left-10">
//                   <div className="w-24 h-24 relative">
//                     <Image 
//                       src="/floral-decoration.png" 
//                       alt="Floral decoration" 
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-lg">
//                   <Image 
//                     src="/profile.jpg" 
//                     alt="Brenda Khamali" 
//                     width={400}
//                     height={400}
//                     // objectFit="cover"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             <div className="lg:w-1/2 text-center lg:text-left">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to my Platform</h1>
//               <h2 className="text-md text-gray-600 mb-1">Software Engineer</h2>
//               <h3 className="text-sm text-gray-500 mb-4">Full Stack Developer</h3>
              
//               <p className="text-gray-700 mb-6">
//                 Hello everyone, I'm Brenda Khamali, a passionate Software Engineer 
//                 specializing in full-stack development. I thrive on creating exceptional 
//                 digital experiences using modern web technologies like React and Node.js. 
//                 With a strong foundation in both front-end and back-end development, I'm 
//                 excited to be able to contribute to innovative projects that make a 
//                 difference.
//               </p>
              
//               <div className="flex justify-center lg:justify-start space-x-4 mb-6">
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   <FaGithub size={24} />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">
//                   <FaTwitter size={24} />
//                 </a>
//               </div>
              
//               <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-300">
//                 Download CV
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section className="py-16 relative">
//           <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gray-200 -z-10 transform skew-y-12" />
//           <div className="absolute top-10 left-10">
//             <div className="w-20 h-20 relative">
//               <Image 
//                 src="/floral-decoration.png" 
//                 alt="Floral decoration" 
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//           <div className="absolute bottom-10 right-10">
//             <div className="w-20 h-20 relative">
//               <Image 
//                 src="/floral-decoration.png" 
//                 alt="Floral decoration" 
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </div>
          
//           <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">My Skill Set</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-center">Programming</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>JavaScript / TypeScript</li>
//                 <li>Python</li>
//                 <li>Java</li>
//                 <li>C++</li>
//               </ul>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-center">Web Development</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>React / Next.js</li>
//                 <li>HTML5 / CSS3</li>
//                 <li>Node.js / Express</li>
//                 <li>RESTful APIs</li>
//               </ul>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-center">Design & Tools</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>Figma / Adobe XD</li>
//                 <li>UI/UX Design</li>
//                 <li>Git / GitHub</li>
//                 <li>Responsive Design</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-center">Mobile Development</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>React Native</li>
//                 <li>Flutter</li>
//                 <li>iOS / Android</li>
//                 <li>Progressive Web Apps</li>
//               </ul>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-center">Backend & Database</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>MongoDB</li>
//                 <li>PostgreSQL</li>
//                 <li>Firebase</li>
//                 <li>AWS / Google Cloud</li>
//               </ul>
//             </div>
            
//             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-semibold mb-4 text-center">Soft Skills & Methodologies</h3>
//               <ul className="text-gray-700 space-y-2">
//                 <li>Agile / Scrum</li>
//                 <li>Problem Solving</li>
//                 <li>Team Collaboration</li>
//                 <li>Project Management</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </main>
      
//       <footer className="bg-gray-800 text-white py-6">
//         <div className="container mx-auto px-4 text-center">
//           <p>© {new Date().getFullYear()} Brenda Khamali. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }