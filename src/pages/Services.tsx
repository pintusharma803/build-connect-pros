
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ui/ServiceCard';
import { Search, MapPin, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  {
    id: '7',
    title: 'HVAC Installation & Repair',
    category: 'HVAC',
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHZhY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 'From $50/hr',
    location: 'New York, NY',
  },
  {
    id: '8',
    title: 'Floor Installation Services',
    category: 'Flooring',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvb3JpbmclMjB3b29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 'From $32/hr',
    location: 'Brooklyn, NY',
  },
  {
    id: '9',
    title: 'Landscape Design & Installation',
    category: 'Landscaping',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 'From $38/hr',
    location: 'Queens, NY',
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
  'HVAC',
  'Flooring',
  'Landscaping',
];

// Work types
const workTypes = ['All Types', 'Contract-based', 'Individual Jobs'];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeWorkType, setActiveWorkType] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter services based on selected category, work type, and search term
  const filteredServices = services.filter(service => {
    // Category filter
    if (activeCategory !== 'All' && service.category !== activeCategory) {
      return false;
    }

    // Search term filter (title, category, or location)
    if (searchTerm && !service.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !service.category.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Location filter
    if (location && !service.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find the Perfect <span className="text-brand-blue-600">Service</span>
            </h1>
            <p className="text-gray-600">
              Browse through our comprehensive list of services or use filters to find exactly what you need.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-2xl shadow-sm mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search service..."
                  className="input-field pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="input-field pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button
                className="lg:w-auto flex items-center gap-2"
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-5 w-5" />
                Filters
              </Button>
            </div>

            {/* Expanded Filters */}
            {isFilterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Categories */}
                  <div>
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-3 py-1 rounded-full text-sm transition-all ${
                            activeCategory === category
                              ? 'bg-brand-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Work Type */}
                  <div>
                    <h3 className="font-medium mb-2">Work Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {workTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setActiveWorkType(type)}
                          className={`px-3 py-1 rounded-full text-sm transition-all ${
                            activeWorkType === type
                              ? 'bg-brand-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      defaultValue="50"
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600">$10 - $100/hr</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredServices.length} services found
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Service Cards */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          ) : (
            <div className="text-center py-16">
              <p className="text-xl mb-2">No services found</p>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveWorkType('All Types');
                  setSearchTerm('');
                  setLocation('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
