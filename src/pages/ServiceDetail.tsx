
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Clock, MapPin, Star, Briefcase, 
  CheckCircle, ChevronLeft, MessageSquare, Phone 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { servicesData } from '@/data/services';

// Service type definition
interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  priceType: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  availability: string[];
  features: string[];
  contractor: {
    name: string;
    image: string;
    rating: number;
    verified: boolean;
    projectsCompleted: number;
    responseRate: string;
    responseTime: string;
  };
}

const ServiceDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch service details
    const fetchService = () => {
      setLoading(true);
      
      // Find the service with the matching ID from our mock data
      const foundService = servicesData.find(s => s.id === id);
      
      setTimeout(() => {
        if (foundService) {
          setService(foundService);
        }
        setLoading(false);
      }, 500);
    };

    fetchService();
  }, [id]);

  const handleBookService = () => {
    toast({
      title: "Booking Request Sent!",
      description: "The contractor will respond to your request soon.",
    });
  };

  const handleContactClick = () => {
    toast({
      title: "Contact Request Sent",
      description: "The contractor will get back to you soon.",
    });
  };

  const handleCallRequest = () => {
    toast({
      title: "Call Request Sent",
      description: "The contractor will call you shortly.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="bg-gray-200 h-8 w-64 mb-4 rounded"></div>
            <div className="bg-gray-200 h-4 w-48 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
            <p className="mb-6 text-gray-600">The service you're looking for doesn't exist or has been removed.</p>
            <Link to="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/services" className="flex items-center text-brand-blue-600 hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
          </div>

          {/* Service Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              
              <div className="flex items-center flex-wrap gap-4 mb-4">
                <span className="flex items-center bg-brand-blue-50 text-brand-blue-700 px-3 py-1 rounded-full text-sm">
                  <Briefcase className="h-4 w-4 mr-1" /> {service.category}
                </span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-gray-500 ml-1">({service.reviews} reviews)</span>
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  {service.location}
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title} 
                  className="w-full h-64 object-cover object-center"
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-brand-blue-600">{service.price}</div>
                  <div className="text-gray-500">{service.priceType}</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-brand-blue-600 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium">Availability</div>
                      <div className="text-sm text-gray-600">{service.availability.join(", ")}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-blue-600 mt-0.5 mr-3" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-sm text-gray-600">{service.contractor.responseTime}</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button onClick={handleBookService} className="w-full btn-primary">
                    Book Now
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      onClick={handleContactClick}
                      className="flex items-center justify-center"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleCallRequest}
                      className="flex items-center justify-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Service Description</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-bold mb-3">Features & Benefits</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-blue-600 mt-0.5 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-bold mb-4">Contractor</h2>
                
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                      <img 
                        src={service.contractor.image || "/placeholder.svg"} 
                        alt={service.contractor.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg flex items-center">
                      {service.contractor.name}
                      {service.contractor.verified && (
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </h3>
                    
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{service.contractor.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Projects Completed</span>
                    <span className="font-medium">{service.contractor.projectsCompleted}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Response Rate</span>
                    <span className="font-medium">{service.contractor.responseRate}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to={`/contractors/${service.contractor.name.replace(/\s+/g, '-').toLowerCase()}`}>
                    <Button variant="outline" className="w-full">View Profile</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
