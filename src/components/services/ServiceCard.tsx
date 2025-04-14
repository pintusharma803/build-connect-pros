
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  category,
  description,
  price,
  priceType,
  location,
  rating,
  reviews,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-4">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 text-sm ml-1">({reviews})</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="block text-brand-blue-600 font-bold">{price}</span>
            <span className="block text-gray-500 text-sm">{priceType}</span>
          </div>
          
          <Link to={`/services/${id}`}>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Details <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
