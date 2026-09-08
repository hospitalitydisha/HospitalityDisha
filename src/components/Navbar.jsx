import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Colleges', path: '/colleges' },
    { name: 'Admission Process', path: '/admission-process' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Header */}
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Hospitality Disha Logo"
                className="h-28 w-28 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 text-sm font-medium transition-colors group ${
                  isActive(link.path)
                    ? 'text-[#DEB22F] font-semibold'
                    : 'text-gray-700 hover:text-[#DEB22F]'
                }`}
              >
                {link.name}

                {/* Active Underline */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] rounded-full bg-[#DEB22F] transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>

                {/* Active Circle */}
                {isActive(link.path) && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-2 h-2 bg-[#DEB22F] rounded-full border-2 border-white"></span>
                )}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="
                bg-[#DEB22F]
                hover:bg-[#c49b25]
                text-black
                px-6
                py-2.5
                rounded-full
                font-medium
                transition-all
                shadow-md
                hover:shadow-lg
              "
            >
              Get Free Counselling
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="flex flex-col py-3">

              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative mx-2 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive(link.path)
                      ? 'text-[#DEB22F] bg-[#DEB22F]/10 font-semibold'
                      : 'text-gray-700 hover:text-[#DEB22F] hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>

                    {/* Mobile Active Indicator */}
                    {isActive(link.path) && (
                      <span className="flex items-center gap-1">
                        <span className="w-8 h-[3px] bg-[#DEB22F] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#DEB22F] rounded-full"></span>
                      </span>
                    )}
                  </div>
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mx-4
                  mt-3
                  mb-3
                  text-center
                  bg-[#DEB22F]
                  hover:bg-[#c49b25]
                  text-black
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                  shadow-md
                "
              >
                Get Free Counselling
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}