// import React, { useState } from 'react';
// import { Code, Palette, Database, Users, Wrench } from 'lucide-react';

// // Assuming you have these images in your assets folder
// // You'll need to replace these imports with the actual paths to your images
// import starIcon from '../../assets/star.png';
// import flowerIcon from '../../assets/flower.png';

// // Keep existing imports
// // import cv from '../../assets/Brenda Khamali Kimura Cv.png';
// // import calculator from '../../assets/Calculator Design.png';
// // import anuru from '../../assets/anuru.jpg';
// // import logo from '../../assets/logo design.png';
// // import design from '../../assets/design.jpeg';
// // import traditional from '../../assets/Traditional food (1).png';
// // import dashboard from '../../assets/dashboard.png';
// // import portfolio from '../../assets/portfolio.png';
// // import data from '../../assets/data cleaning.png';
// // import sql from '../../assets/postgres - Magezi_table.png';
// // import postdetails from '../../assets/postman.png';
// // import authentication from '../../assets/authentication.png';
// // import order from '../../assets/order.png';
// // import document from '../../assets/documentation.png';
// // import jira from '../../assets/jira.png';

// const CollageView = ({ category, onClose }) => {
//     const projectsByCategory = {
//         "Programming": [
//             { title: "Welcome", image: design },
//         ],
//         "Web Development": [
//             { title: "Traditional", image: traditional, description: "Traditional food sight" },
//             { title: "Portfolio Website", image: portfolio, description: "Responsive personal portfolio" },
//             { title: "Dashboard UI", image: dashboard, description: "Admin dashboard interface" }
//         ],
//         "Backend & Database": [
//             { title: "Database Design", image: data, description: "Complex SQL database schema" },
//             { title: "Database Design", image: sql, description: "Complex SQL database schema" },
//             { title: "Authentication System", image: postdetails, description: "Secure user auth system" }
//         ],
//         "Mobile Development": [
//             { title: "Authentication", image: authentication, description: "Suubi Authentication app" },
//             { title: "Saving Up", image: order, description: "Saving app" },
//         ],
//         "Design & Tools": [
//             { title: "CV design", image: cv, description: "my CV" },
//             { title: "Calculator", image: calculator, description: "My own calculator" },
//             { title: "Mock Up", image: anuru, description: "Anuru trawberry design" },
//             { title: "Logo Collection", image: logo, description: "Various client logos" }
//         ],
//         "Soft Skills & Methodologies": [
//             { title: "Documentation", image: document, description: "Technical documentation example" },
//             { title: "Sprint Planning", image: jira, description: "Project management" }
//         ]
//     };

//     const projects = projectsByCategory[category.title] || [];

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
//             <div className="bg-gray-800 rounded-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-y-auto text-white">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
//                         {category.icon}
//                         {category.title}
//                     </h2>
//                     <button 
//                         onClick={onClose}
//                         className="p-2 hover:bg-gray-700 rounded-full text-white"
//                     >
//                         ×
//                     </button>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {projects.map((project, index) => (
//                         <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//                             <img 
//                                 src={project.image} 
//                                 alt={project.title}
//                                 className="w-full h-48 object-cover cursor-pointer"
//                             />
//                             <div className="p-4">
//                                 <h3 className="font-semibold text-lg mb-2 text-white">{project.title}</h3>
//                                 <p className="text-gray-400">{project.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const HexagonSkillCard = ({ title, icon, skills, onClick }) => (
//     <div 
//         className="relative cursor-pointer group" 
//         onClick={onClick}
//     >
//         {/* Hexagon shape using clip-path */}
//         <div className="bg-gray-800 aspect-square transform transition-transform group-hover:-translate-y-2 duration-300 clip-hexagon p-6 shadow-lg">
//             <div className="flex flex-col h-full">
//                 <div className="flex items-center gap-3 mb-4">
//                     <div className="text-indigo-400">
//                         {icon}
//                     </div>
//                     <h3 className="text-lg font-bold text-white">{title}</h3>
//                 </div>
                
//                 <ul className="space-y-2 text-sm">
//                     {skills.map((skill, index) => (
//                         <li key={index} className="text-gray-400 flex items-start">
//                             <span className="text-indigo-400 mr-2">•</span>
//                             <span>{skill}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     </div>
// );

// const Skills = () => {
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const skillCategories = [
//         {
//             title: "Programming",
//             icon: <Code className="w-5 h-5" />,
//             skills: [
//                 "Proficient in Kotlin, Python, and JavaScript",
//                 "Strong understanding of data types and structures",
//                 "Experience with object-oriented programming"
//             ]
//         },
//         {
//             title: "Web Development",
//             icon: <Palette className="w-5 h-5" />,
//             skills: [
//                 "HTML, CSS, and JavaScript fundamentals",
//                 "React and DOM manipulation",
//                 "Responsive design and UI/UX principles",
//                 "API integration and asynchronous programming"
//             ]
//         },
//         {
//             title: "Backend & Database",
//             icon: <Database className="w-5 h-5" />,
//             skills: [
//                 "Django Framework expertise",
//                 "SQL and database management",
//                 "RESTful API design and implementation"
//             ]
//         },
//         {
//             title: "Mobile Development",
//             icon: <Code className="w-5 h-5" />,
//             skills: [
//                 "Android development concepts",
//                 "Activity views, binding, and intents",
//                 "Mobile UI/UX design principles"
//             ]
//         },
//         {
//             title: "Design & Tools",
//             icon: <Wrench className="w-5 h-5" />,
//             skills: [
//                 "Figma, Adobe Illustrator, and Photoshop",
//                 "Logo design and mockup creation",
//                 "Version control with Git and GitHub"
//             ]
//         },
//         {
//             title: "Soft Skills & Methodologies",
//             icon: <Users className="w-5 h-5" />,
//             skills: [
//                 "Agile and Scrum methodologies",
//                 "Sprint planning and retrospectives",
//                 "Collaboration and code review processes"
//             ]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gray-900 text-white">
//             {/* Decorative elements */}
//             <img src={flowerIcon} alt="Decorative flower" className="absolute top-16 left-16 w-32 h-32 opacity-70" />
//             <img src={starIcon} alt="Decorative star" className="absolute bottom-16 right-16 w-24 h-24 opacity-70" />
//             <img src={flowerIcon} alt="Decorative flower" className="absolute bottom-32 left-1/4 w-20 h-20 opacity-50" />
            
//             <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
//                 {/* Triangle shape in the background */}
//                 <div className="absolute left-0 top-0 w-72 h-72 bg-rose-200 opacity-20 clip-triangle"></div>
                
//                 <h2 className="text-4xl font-bold text-center mb-16">My Skill Set</h2>
                
//                 {/* Hexagonal grid layout */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
//                     {skillCategories.map((category, index) => (
//                         <HexagonSkillCard
//                             key={index}
//                             {...category}
//                             onClick={() => setSelectedCategory(category)}
//                         />
//                     ))}
//                 </div>
                
//                 {/* Decorative circle */}
//                 <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-indigo-600 opacity-10"></div>
//             </div>
            
//             {selectedCategory && (
//                 <CollageView
//                     category={selectedCategory}
//                     onClose={() => setSelectedCategory(null)}
//                 />
//             )}
            
//             {/* CSS for clip paths */}
//             <style jsx>{`
//                 .clip-hexagon {
//                     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//                 }
                
//                 .clip-triangle {
//                     clip-path: polygon(0 0, 100% 0, 0 100%);
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default Skills;