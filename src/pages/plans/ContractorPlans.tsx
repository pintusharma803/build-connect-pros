
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check } from 'lucide-react';

const ContractorPlans = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Basic access to showcase your services',
      features: [
        'Create service listings',
        'Basic profile',
        'Receive client inquiries',
        'Limited visibility in search'
      ],
      buttonText: 'Get Started',
      buttonLink: '/register?type=contractor'
    },
    {
      name: 'Professional',
      price: '$19.99',
      period: 'per month',
      description: 'Enhanced visibility and client connections',
      features: [
        'All Free features',
        'Priority in search results',
        'Unlimited direct messaging',
        'Phone contact with clients',
        'Verified badge',
        'Customer reviews'
      ],
      featured: true,
      buttonText: 'Choose Plan',
      buttonLink: '/register?type=contractor&plan=professional'
    },
    {
      name: 'Business',
      price: '$49.99',
      period: 'per month',
      description: 'Complete access for growing businesses',
      features: [
        'All Professional features',
        'Featured in top search results',
        'Premium badge',
        'Advanced analytics',
        'Team management',
        'Client relationship tools',
        'Invoice and payment processing'
      ],
      buttonText: 'Choose Plan',
      buttonLink: '/register?type=contractor&plan=business'
    }
  ];
  
  const yearlyDiscount = '20% discount on annual billing';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contractor Membership Plans</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Grow your business with the right plan to showcase your services and connect with potential clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden border transition-all ${
                  plan.featured 
                    ? 'border-brand-orange-500 shadow-lg transform md:-translate-y-4' 
                    : 'border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="bg-brand-orange-500 text-white py-2 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={plan.buttonLink}>
                    <Button 
                      className={`w-full ${
                        plan.featured ? 'bg-brand-orange-500 hover:bg-brand-orange-600' : 'bg-gray-800 hover:bg-gray-900'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                  
                  {plan.name !== 'Free' && (
                    <p className="text-sm text-center text-gray-500 mt-3">
                      {yearlyDiscount}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Additional Services</h3>
            <p className="text-gray-600 mb-6">
              Enhance your profile with these add-on services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Featured Listing</h4>
                <p className="text-gray-600 text-sm mb-2">Get extra visibility with featured listings</p>
                <p className="font-semibold">$9.99/month</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Portfolio Gallery</h4>
                <p className="text-gray-600 text-sm mb-2">Showcase up to 50 project photos</p>
                <p className="font-semibold">$5.99/month</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold mb-2">Priority Support</h4>
                <p className="text-gray-600 text-sm mb-2">Get faster responses to your questions</p>
                <p className="font-semibold">$7.99/month</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales for Add-ons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContractorPlans;
