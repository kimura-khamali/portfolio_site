'use client'
import React from 'react';
import Image from 'next/image';
import shawazi from '../../assets/shawazi.png';
import shawazi_product from '../../assets/shaproduct.png';
import Suubi from '../../assets/suubi.png';
import Akili from '../../assets/akili (1).png';
import Evogreen from '../../assets/evogreen.png';
import Portfolio from '../../assets/Brenda.png';
// import Hero from '../../assets/Hero.png';
import Tech_Lead from '../../assets/Tech-lead.png';
import Trevoh from '../../assets/trevoh.png';

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'My Portfolio',
      screenshot: Portfolio,
      link: 'https://brendaonportfolio.vercel.app/',
      category: 'Web Development'
    },
    {
      title: 'Evogreen',
      screenshot: Evogreen,
      link: 'https://akili-plants.vercel.app/',
      category: 'Web Development'
    },
    {
      title: 'Suubi',
      screenshot: Suubi,
      link: 'https://my-suubi-webpage.vercel.app/',
      category: 'Mobile Development'
    },
    {
      title: 'Akili',
      screenshot: Akili,
      link: 'https://akili-quiz.vercel.app/',
      category: 'Web Development'
    },
    {
      title: 'Magezi Informational',
      screenshot: shawazi,
      link: 'https://magezi-informational-c594.vercel.app/',
      category: 'Web Development'
    },
    {
      title: 'Shawazi',
      screenshot: shawazi_product,
      link: 'https://shawazi-magezi.vercel.app/',
      category: 'Design & Tools'
    },
    {
      title: 'Mentorship',
      screenshot: Trevoh,
      link: 'https://mentorship-website-lovat.vercel.app/',
      category: 'Web Development'
    },
    {
      title: 'Tech Lead',
      screenshot: Tech_Lead,
      link: 'https://tech-lead-lr7t.vercel.app/',
      category: 'Web Development'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Triangle shape in the background */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-rose-200 opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#AB9898] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 duration-300 group"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    className="transition-transform duration-300 group-hover:scale-110"
                    width={400}
                    height={225}
                    style={{ 
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-100 text-sm">
                    {project.category}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative circle */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-indigo-600 opacity-10"></div>
      
      {/* CSS for clip paths */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;