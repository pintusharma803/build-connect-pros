
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check } from 'lucide-react';

const ClientPlans = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Basic access to find contractors for your projects',
      features: [
        'Browse service listings',
        'View contractor profiles',
        'Basic search functionality',
        'Limited direct messaging'
      ],
      buttonText: 'Get Started',
      buttonLink: '/register?type=client'
    },
    {
      name: 'Standard',
      price: '$9.99',
      period: 'per month',
      description: 'Enhanced access with priority support',
      features: [
        'All Free features',
        'Priority in search results',
        'Unlimited direct messaging',
        'Phone contact with contractors',
        'Save favorite contractors'
      ],
      featured: true,
      buttonText: 'Choose Plan',
      buttonLink: '/register?type=client&plan=standard'
    },
    {
      name: 'Premium',
      price: '$24.99',
      period: 'per month',
      description: 'Complete access with exclusive benefits',
      features: [
        'All Standard features',
        'Featured project requests',
        'Priority customer support',
        'Access to exclusive contractors',
        'Project management tools',
        'Invoice and payment processing'
      ],
      buttonText: 'Choose Plan',
      buttonLink: '/register?type=client&plan=premium'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Client Membership Plans</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to connect with qualified contractors for your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden border transition-all ${
                  plan.featured 
                    ? 'border-brand-blue-600 shadow-lg transform md:-translate-y-4' 
                    : 'border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="bg-brand-blue-600 text-white py-2 text-center text-sm font-medium">
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
                        plan.featured ? 'bg-brand-blue-600 hover:bg-brand-blue-700' : 'bg-gray-800 hover:bg-gray-900'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6">
              Contact our sales team for enterprise solutions and custom pricing
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientPlans;
