
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-blue-600">
            Servi<span className="text-brand-orange-500">sso</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-brand-blue-600 ${
              location.pathname === '/' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`font-medium transition-colors hover:text-brand-blue-600 ${
              location.pathname === '/services' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            Services
          </Link>
          <div className="relative group">
            <button className="flex items-center font-medium text-gray-700 hover:text-brand-blue-600 transition-colors">
              Plans <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-48">
                <Link to="/plans/client" className="block px-4 py-3 hover:bg-gray-50">Client Plans</Link>
                <Link to="/plans/contractor" className="block px-4 py-3 hover:bg-gray-50">Contractor Plans</Link>
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className={`font-medium transition-colors hover:text-brand-blue-600 ${
              location.pathname === '/about' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition-colors hover:text-brand-blue-600 ${
              location.pathname === '/contact' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-brand-blue-600 text-white font-medium hover:bg-brand-blue-700">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-brand-blue-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-20`}
      >
        <div className="container-custom flex flex-col gap-5">
          <Link
            to="/"
            onClick={closeMenu}
            className={`py-3 border-b border-gray-100 font-medium ${
              location.pathname === '/' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className={`py-3 border-b border-gray-100 font-medium ${
              location.pathname === '/services' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            Services
          </Link>
          <div className="py-3 border-b border-gray-100">
            <span className="font-medium mb-2 block">Plans</span>
            <div className="pl-4 flex flex-col gap-2 mt-2">
              <Link to="/plans/client" onClick={closeMenu} className="text-gray-600">
                Client Plans
              </Link>
              <Link to="/plans/contractor" onClick={closeMenu} className="text-gray-600">
                Contractor Plans
              </Link>
            </div>
          </div>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`py-3 border-b border-gray-100 font-medium ${
              location.pathname === '/about' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`py-3 border-b border-gray-100 font-medium ${
              location.pathname === '/contact' ? 'text-brand-blue-600' : 'text-gray-700'
            }`}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-3 mt-5">
            <Link to="/login" onClick={closeMenu}>
              <Button variant="outline" className="w-full font-medium">
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={closeMenu}>
              <Button className="w-full bg-brand-blue-600 hover:bg-brand-blue-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
