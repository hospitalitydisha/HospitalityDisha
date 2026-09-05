
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

        <div className="flex justify-between items-center h-20">

          {/* ================= LOGO + COMPANY NAME ================= */}
          <div className="flex items-center h-full">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 h-full"
            >
              {/* Logo */}
              <img
                src={logo}
                alt="Hospitality Disha Logo"
                className="h-14 w-14 object-contain"
              />

              {/* Company Name */}
              <span className="text-xl font-bold text-navy leading-none">
                Hospitality Disha
              </span>
            </Link>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-8">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-teal font-semibold'
                    : 'text-charcoal hover:text-teal'
                } transition-colors text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}

            {/* Get Free Counselling */}
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

          {/* ================= MOBILE BUTTON ================= */}
          <div className="flex items-center md:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy p-2"
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
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">

          <div className="px-4 pt-2 pb-6 space-y-1">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-teal bg-gray-50'
                    : 'text-charcoal hover:text-teal hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Counselling Button */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="
                block
                w-full
                text-center
                mt-4
                bg-[#DEB22F]
                hover:bg-[#c49b25]
                text-black
                px-4
                py-3
                rounded-md
                font-medium
                transition-all
              "
            >
              Get Free Counselling
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}
