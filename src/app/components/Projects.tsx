'use client'
import React from 'react';
import shawazi from '../../assets/shawazi.png';
import shawazi_product from '../../assets/shaproduct.png';
import Suubi from '../../assets/suubi.png';
// import Akili from '../../assets/akili.png';
import Akili from '../../assets/akili (1).png'
import Evogreen from '../../assets/evogreen.png';
import Portfolio from '../../assets/Brenda.png';
import Hero from '../../assets/Hero.png';
import Trevoh from '../../assets/trevoh.png';
// import starIcon from '../../assets/star.png';
// import flowerIcon from '../../assets/flower.png';

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
      screenshot: Hero,
      link: 'https://tech-lead-lr7t.vercel.app/',
      category: 'Web Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      {/* <img 
        src={flowerIcon} 
        alt="Decorative flower" 
        className="absolute top-16 left-16 w-32 h-32 opacity-70 z-0" 
      /> */}
      {/* <img 
        src={starIcon} 
        alt="Decorative star" 
        className="absolute bottom-16 right-16 w-24 h-24 opacity-70 z-0" 
      /> */}
      
      {/* Triangle shape in the background */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-rose-200 opacity-20 clip-triangle z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 duration-300 group"
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden">
                  {/* <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  /> */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.category}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative circle */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-indigo-600 opacity-10 z-0"></div>
      
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