'use client'
import React, { useState } from 'react';
import { Code, Palette, Database, Users, Wrench, X } from 'lucide-react';
import { StaticImageData } from 'next/image';

// Import images
import cv from '../../assets/Brenda Khamali Kimura Cv.png';
import calculator from '../../assets/Calculator Design.png';
import anuru from '../../assets/anuru.jpg';
import logo from '../../assets/logo design.png';
import design from '../../assets/design.jpeg';
import traditional from '../../assets/Traditional food (1).png';
import dashboard from '../../assets/dashboard.png';
import portfolio from '../../assets/portfolio.png';
import data from '../../assets/data cleaning.png';
import sql from '../../assets/postgres - Magezi_table.png';
import postdetails from '../../assets/postman.png';
import authentication from '../../assets/authentication.png';
import order from '../../assets/order.png';
import document from '../../assets/documentation.png';
import jira from '../../assets/jira.png';

// TypeScript interfaces
interface Project {
  title: string;
  image: StaticImageData;
  description?: string;
  details?: string;
  technologies?: string[];
}

interface CategoryData {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface CollageViewProps {
  category: CategoryData;
  onClose: () => void;
}

interface HexagonSkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  onClick: () => void;
}

// Project data organized by category
const projectsByCategory: Record<string, Project[]> = {
  "Programming": [
    { 
      title: "Welcome", 
      image: design,
      description: "Introductory programming project",
      details: "This project showcases my programming skills with clean code structure and optimization techniques.",
      technologies: ["Python", "JavaScript", "TypeScript"]
    },
  ],
  "Web Development": [
    { 
      title: "Traditional", 
      image: traditional, 
      description: "Traditional food sight",
      details: "A responsive website showcasing various traditional foods from around the world, with recipes and cultural context.",
      technologies: ["React", "CSS", "JavaScript"]
    },
    { 
      title: "Portfolio Website", 
      image: portfolio, 
      description: "Responsive personal portfolio",
      details: "My personal portfolio website built with modern web technologies, featuring responsive design and smooth animations.",
      technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    { 
      title: "Dashboard UI", 
      image: dashboard, 
      description: "Admin dashboard interface",
      details: "A comprehensive admin dashboard interface with data visualization, user management, and various admin controls.",
      technologies: ["React", "Chart.js", "Tailwind CSS"]
    }
  ],
  "Backend & Database": [
    { 
      title: "Database Design", 
      image: data, 
      description: "Complex SQL database schema",
      details: "Designed and implemented a normalized database schema for an e-commerce application with multiple relationships.",
      technologies: ["PostgreSQL", "SQL", "Database Design"]
    },
    { 
      title: "Database Design", 
      image: sql, 
      description: "Complex SQL database schema",
      details: "Advanced database architecture for a social media platform with efficient query optimization.",
      technologies: ["MySQL", "Database Design", "Query Optimization"]
    },
    { 
      title: "Authentication System", 
      image: postdetails, 
      description: "Secure user auth system",
      details: "Implemented a secure authentication system with JWT tokens, role-based access control, and password hashing.",
      technologies: ["Node.js", "Express", "JWT", "bcrypt"]
    }
  ],
  "Mobile Development": [
    { 
      title: "Authentication", 
      image: authentication, 
      description: "Suubi Authentication app",
      details: "Mobile authentication application with biometric verification and multi-factor authentication.",
      technologies: ["Kotlin", "Android SDK", "Firebase Auth"]
    },
    { 
      title: "Saving Up", 
      image: order, 
      description: "Saving app",
      details: "Personal finance application that helps users track expenses, set savings goals, and manage budgets.",
      technologies: ["Kotlin", "Room Database", "Material Design"]
    },
  ],
  "Design & Tools": [
    { 
      title: "CV design", 
      image: cv, 
      description: "my CV",
      details: "Clean and professional CV design created with strong typography and visual hierarchy.",
      technologies: ["Figma", "Typography", "Layout Design"]
    },
    { 
      title: "Calculator", 
      image: calculator, 
      description: "My own calculator",
      details: "Custom calculator design with intuitive UI and animations for better user experience.",
      technologies: ["Figma", "UI Design", "Interaction Design"]
    },
    { 
      title: "Mock Up", 
      image: anuru, 
      description: "Anuru trawberry design",
      details: "Product mockup design for a brand of strawberry-flavored beverage showing packaging concepts.",
      technologies: ["Adobe Illustrator", "Product Design", "Branding"]
    },
    { 
      title: "Logo Collection", 
      image: logo, 
      description: "Various client logos",
      details: "Collection of logos designed for various clients across different industries.",
      technologies: ["Illustrator", "Logo Design", "Branding"]
    }
  ],
  "Soft Skills & Methodologies": [
    { 
      title: "Documentation", 
      image: document, 
      description: "Technical documentation example",
      details: "Comprehensive technical documentation showing clear explanations, illustrations, and code examples.",
      technologies: ["Technical Writing", "Markdown", "Documentation"]
    },
    { 
      title: "Sprint Planning", 
      image: jira, 
      description: "Project management",
      details: "Sprint planning and task management using agile methodologies and project management tools.",
      technologies: ["Agile", "Scrum", "JIRA"]
    }
  ]
};

const CollageView: React.FC<CollageViewProps> = ({ category, onClose }) => {
  const projects = projectsByCategory[category.title] || [];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  // Handler for background click to close the image modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeProjectDetails();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
            <div className="p-2 bg-[#AB9898] rounded-full text-white">
              {category.icon}
            </div>
            {category.title} Projects
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full text-gray-800 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <li key={index} className="bg-[#AB9898] text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image.src} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-3 left-4 font-bold text-xl text-white">{project.title}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{project.description || "Project showcase"}</p>
                <div className="mt-4 flex justify-end">
                  <button 
                    className="bg-[#AB9898] text-white px-4 py-2 rounded hover:bg-[#9A8787] transition-colors text-sm md:text-base"
                    onClick={() => openProjectDetails(project)}
                    aria-label={`View full image of ${project.title}`}
                  >
                    View Full Image
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image View Modal - Optimized for all screen sizes */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-2 sm:p-4 z-50"
          onClick={handleBackgroundClick}
        >
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
            {/* Image container with optimized display settings */}
            <div className="relative w-full h-auto flex justify-center items-center">
              <img 
                src={selectedProject.image.src} 
                alt={selectedProject.title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
                style={{
                  imageRendering: 'crisp-edges',
                  objectFit: 'contain'
                }}
              />
              {/* Close button */}
              <button 
                onClick={closeProjectDetails}
                className="absolute top-2 right-2 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition-all duration-200 shadow-lg"
                aria-label="Close image view"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Image caption with responsive text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 sm:p-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{selectedProject.title}</h2>
              <p className="text-gray-200 text-sm sm:text-base">{selectedProject.description}</p>
              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-white bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Added instructions for mobile */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none md:hidden">
            <div className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
              Tap outside image to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HexagonSkillCard: React.FC<HexagonSkillCardProps> = ({ title, icon, skills, onClick }) => (
  <div 
    className="relative cursor-pointer group" 
    onClick={onClick}
  >
    {/* Hexagon shape using clip-path */}
    <div className="bg-[#AB9898] aspect-square transform transition-transform group-hover:-translate-y-2 duration-300 clip-hexagon p-6 shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-white">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        
        <ul className="space-y-2 text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="text-white flex items-start">
              <span className="text-white mr-2">•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);

  // Use media query to check if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to check screen size
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const skillCategories: CategoryData[] = [
    {
      title: "Programming",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "Proficient in Kotlin, Python, and JavaScript",
        "Strong understanding of data types and structures",
        "Experience with object-oriented programming"
      ]
    },
    {
      title: "Web Development",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        "HTML, CSS, and JavaScript fundamentals",
        "React and DOM manipulation",
        "Responsive design and UI/UX principles",
        "API integration and asynchronous programming"
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5" />,
      skills: [
        "Django Framework expertise",
        "SQL and database management",
        "RESTful API design and implementation"
      ]
    },
    {
      title: "Mobile Development",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "Android development concepts",
        "Activity views, binding, and intents",
        "Mobile UI/UX design principles"
      ]
    },
    {
      title: "Design & Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        "Figma, Adobe Illustrator, and Photoshop",
        "Logo design and mockup creation",
        "Version control with Git and GitHub"
      ]
    },
    {
      title: "Soft Skills & Methodologies",
      icon: <Users className="w-5 h-5" />,
      skills: [
        "Agile and Scrum methodologies",
        "Sprint planning and retrospectives",
        "Collaboration and code review processes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Decorative elements */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Triangle shape in the background */}
        <div className="absolute left-0 top-0 w-48 sm:w-72 h-48 sm:h-72 bg-rose-200 opacity-20 clip-triangle"></div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 relative z-10">My Skill Set</h2>
        
        {/* Hexagonal grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-16 relative z-10">
          {skillCategories.map((category, index) => (
            <HexagonSkillCard
              key={index}
              {...category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
        
        {/* Decorative circle */}
        <div className="absolute right-0 top-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-indigo-600 opacity-10"></div>
      </div>
      
      {selectedCategory && (
        <CollageView
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
      
      {/* Enhanced CSS for clip paths and mobile optimizations */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .clip-triangle {
          clip-path: polygon(0 0, 100% 0, 0 100%);
          -webkit-clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        
        @media (max-width: 640px) {
          .clip-hexagon {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;