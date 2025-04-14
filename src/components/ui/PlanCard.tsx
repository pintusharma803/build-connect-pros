
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  userType: 'client' | 'contractor';
}

const PlanCard = ({ name, price, period, description, features, popular, userType }: PlanCardProps) => {
  return (
    <div className={`card relative ${popular ? 'border-2 border-brand-blue-600' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-blue-600 text-white py-1 px-4 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`mr-2 rounded-full p-1 ${feature.included ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                <Check className="h-4 w-4" />
              </div>
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                {feature.name}
              </span>
            </div>
          ))}
        </div>
        
        <Link to={`/register?plan=${name.toLowerCase()}&type=${userType}`}>
          <Button 
            className={`w-full ${
              popular
                ? 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white'
                : 'bg-white border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50'
            }`}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
