'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#AB9898] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-[#FF6B35]">About</h3>
            <p className="text-sm">
              This is a portfolio website showcasing my projects and skills. Feel free to explore and
              get in touch.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-[#FF6B35]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#FF6B35] transition duration-300">Home</Link></li>
              <li><Link href="/cv" className="hover:text-[#FF6B35] transition duration-300">CV</Link></li>
              <li><Link href="/projects" className="hover:text-[#FF6B35] transition duration-300">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF6B35] transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4 text-[#FF6B35]">Contact</h3>
            <p className="text-sm mb-2">Email: kimurakhamali@gmail.com</p>
            <p className="text-sm">Phone: +254113449867</p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-6 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} @Brenda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;