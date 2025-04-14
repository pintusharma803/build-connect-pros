
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  category: string;
  rating: number;
  imageUrl: string;
  price: string;
  location: string;
}

const ServiceCard = ({ id, title, category, rating, imageUrl, price, location }: ServiceCardProps) => {
  return (
    <div className="card group">
      <Link to={`/services/${id}`}>
        <div className="relative overflow-hidden h-48">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-brand-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
            <span className="text-brand-blue-600 font-semibold">{price}</span>
          </div>
          
          <h3 className="text-lg font-bold mb-2 group-hover:text-brand-blue-600 transition-colors">
            {title}
          </h3>
          
          <div className="text-sm text-gray-500">
            <p>{location}</p>
          </div>
        </div>
      </Link>
      
      <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between">
        <Link
          to={`/services/${id}`}
          className="text-sm text-brand-blue-600 font-medium hover:text-brand-blue-700 transition-colors"
        >
          View Details
        </Link>
        <Link
          to={`/contact-provider/${id}`}
          className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white text-sm font-medium px-4 py-1 rounded-full transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
