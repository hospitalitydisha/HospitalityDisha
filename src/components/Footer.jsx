import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">

              {/* Logo */}
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="Hospitality Disha Logo"
                  className="h-30 w-30 object-contain"
                />
              </div>

              {/* Brand Name */}
              <span className="text-2xl font-bold tracking-tight text-white">
                Hospitality Disha
              </span>

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your Complete Career Guide to the Hospitality Industry.
              Trusted Guidance for Your Professional Education Journey.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@hospitalitydisha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hospitality Disha on YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-[#DEB22F] hover:border-[#DEB22F] transition-all duration-300"
              >
                <FaYoutube className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hospitalitydisha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hospitality Disha on Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:text-white hover:bg-[#DEB22F] hover:border-[#DEB22F] transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/admission-process"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  Admission Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Programs
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  B.Sc Hotel Management
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  Culinary Arts
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  Travel & Tourism
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="hover:text-[#DEB22F] transition-colors"
                >
                  Event Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">

              <li className="flex items-start gap-3 group cursor-pointer">
                <Phone className="h-5 w-5 text-[#DEB22F] shrink-0 group-hover:scale-110 transition-transform" />

                <span className="group-hover:text-white transition-colors">
                  +91 6281570955
                </span>
              </li>

              <li className="flex items-start gap-3 group cursor-pointer">
                <Mail className="h-5 w-5 text-[#DEB22F] shrink-0 group-hover:scale-110 transition-transform" />

                <span className="group-hover:text-white transition-colors">
                  hospitalitydisha.com@gmail.com
                </span>
              </li>

              <li className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="h-5 w-5 text-[#DEB22F] shrink-0 group-hover:scale-110 transition-transform" />

                <span className="group-hover:text-white transition-colors">
                  Hyderabad, Telangana, India
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

          <p>
            &copy; {new Date().getFullYear()} Hospitality Disha. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              to="#"
              className="hover:text-[#DEB22F] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="#"
              className="hover:text-[#DEB22F] transition-colors"
            >
              Terms & Conditions
            </Link>

            <Link
              to="#"
              className="hover:text-[#DEB22F] transition-colors"
            >
              Disclaimer
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
