
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/services/ServiceCard';
import { servicesData } from '@/data/services';
import { 
  Search, Filter, MapPin, ArrowDownAZ, 
  Star, Briefcase, Clock, X, ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Available service categories
  const categories = ['All', 'Painting', 'Plumbing', 'Electrical', 'Masonry', 'HVAC', 'Carpentry', 'Roofing', 'Flooring'];
  
  // Filter services by search term and category
  const filteredServices = servicesData.filter(service => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === '' || 
      selectedCategory === 'All' || 
      service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-brand-blue-50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find the Perfect <span className="text-brand-blue-600">Service</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Browse through our wide range of professional construction and labor services
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for a service..."
                  className="input-field pl-12 pr-4 py-3 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                  className="absolute right-2 top-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Filters Section */}
        <section className="py-8 border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-brand-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  >
                    {category}
                  </button>
                ))}
                
                <div className="relative inline-block">
                  <button
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
                    onClick={() => setFiltersOpen(!filtersOpen)}
                  >
                    More <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {filtersOpen && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {categories.slice(5).map((category) => (
                          <button
                            key={category}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setSelectedCategory(category);
                              setFiltersOpen(false);
                            }}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <ArrowDownAZ className="h-4 w-4" /> Sort
                </Button>
              </div>
            </div>
            
            {selectedCategory && (
              <div className="mt-4 flex items-center">
                <span className="mr-2 text-sm text-gray-500">Filters:</span>
                <span className="bg-brand-blue-50 text-brand-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                  {selectedCategory}
                  <button 
                    onClick={() => setSelectedCategory('')}
                    className="ml-1 text-brand-blue-700 hover:text-brand-blue-900"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              </div>
            )}
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-12">
          <div className="container-custom">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    category={service.category}
                    description={service.description}
                    price={service.price}
                    priceType={service.priceType}
                    location={service.location}
                    rating={service.rating}
                    reviews={service.reviews}
                    image={service.image}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Search className="h-12 w-12 text-gray-300 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Services Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any services matching your criteria.
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
