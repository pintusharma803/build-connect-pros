
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-gray-800 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-5">
              <span className="text-2xl font-bold text-white">
                Servi<span className="text-brand-orange-500">sso</span>
              </span>
            </Link>
            <p className="text-brand-gray-300 mb-6">
              Your one-stop platform for all construction and labor services. Connect with professionals for your projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-5">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#painting" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Painting
                </Link>
              </li>
              <li>
                <Link to="/services#plumbing" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Plumbing
                </Link>
              </li>
              <li>
                <Link to="/services#electrical" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Electrical
                </Link>
              </li>
              <li>
                <Link to="/services#masonry" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Masonry
                </Link>
              </li>
              <li>
                <Link to="/services#carpentry" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  Carpentry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-brand-gray-300">
                  1234 Construction Avenue, Building Block, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-orange-500 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-orange-500 mr-2 flex-shrink-0" />
                <a href="mailto:contact@servisso.com" className="text-brand-gray-300 hover:text-brand-orange-500 transition-colors">
                  contact@servisso.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-brand-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-brand-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Servisso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
