import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="h-12 w-12 relative overflow-hidden rounded-full bg-zinc-900">
              <img 
                src="/assets/tobi_logo.jpg" 
                alt="Tobi Sanni Logo" 
                className="w-full h-full object-cover"
                loading="eager"
                width={48}
                height={48}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="ml-3">
              <span className="font-bold text-2xl">TOBI SANNI</span>
              <p className="text-sm text-gold">Lifestyle Transformation Coach</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#services" className="hover:text-gold transition-colors">Services</a>
              <a href="#results" className="hover:text-gold transition-colors">Results</a>
              <a href="#booking" className="hover:text-gold transition-colors">Book Now</a>
              <a 
                href="https://instagram.com/tobi_sanni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:text-gold transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 hover:text-gold transition-colors">About</a>
            <a href="#services" className="block px-3 py-2 hover:text-gold transition-colors">Services</a>
            <a href="#results" className="block px-3 py-2 hover:text-gold transition-colors">Results</a>
            <a href="#booking" className="block px-3 py-2 hover:text-gold transition-colors">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;