
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';

// Mock data for services
const services = [
  {
    id: '1',
    title: 'Expert House Painting',
    category: 'Painting',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmclMjB3YWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 'From $25/hr',
    location: 'New York, NY',
  },
  {
    id: '2',
    title: 'Plumbing Repair & Installation',
    category: 'Plumbing',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 'From $35/hr',
    location: 'Brooklyn, NY',
  },
  {
    id: '3',
    title: 'Electrical Wiring Services',
    category: 'Electrical',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 'From $40/hr',
    location: 'Queens, NY',
  },
  {
    id: '4',
    title: 'Brick & Masonry Work',
    category: 'Masonry',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1584221428599-04d05b2741ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzb25yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 'From $30/hr',
    location: 'Bronx, NY',
  },
  {
    id: '5',
    title: 'Custom Carpentry Solutions',
    category: 'Carpentry',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1567501384799-9df1272425e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FycGVudHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 'From $28/hr',
    location: 'Staten Island, NY',
  },
  {
    id: '6',
    title: 'Roof Repair & Installation',
    category: 'Roofing',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vZmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 'From $45/hr',
    location: 'Manhattan, NY',
  },
];

// Categories
const categories = [
  'All',
  'Painting',
  'Plumbing',
  'Electrical',
  'Masonry',
  'Carpentry',
  'Roofing',
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-brand-blue-600">Services</span>
          </h2>
          <p className="text-gray-600">
            Find expert professionals for all your construction and home improvement needs.
            Browse through our categories or search for specific services.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-brand-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              category={service.category}
              rating={service.rating}
              imageUrl={service.imageUrl}
              price={service.price}
              location={service.location}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-brand-blue-600 font-medium hover:text-brand-blue-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
