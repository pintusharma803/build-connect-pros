
import { MessageSquare, Phone, Calendar, User, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-brand-blue-600" />,
    title: 'Easy Communication',
    description: 'Chat directly with contractors and get quick responses to your inquiries.',
  },
  {
    icon: <Phone className="h-6 w-6 text-brand-blue-600" />,
    title: 'Call Integration',
    description: 'Call contractors directly through our platform with just one tap.',
  },
  {
    icon: <Calendar className="h-6 w-6 text-brand-blue-600" />,
    title: 'Simple Booking',
    description: 'Book services with a few clicks and manage your appointments effortlessly.',
  },
  {
    icon: <User className="h-6 w-6 text-brand-blue-600" />,
    title: 'Verified Professionals',
    description: 'All contractors are verified to ensure quality and reliability.',
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-blue-600" />,
    title: 'Secure Payments',
    description: 'Pay securely through our platform with various payment options.',
  },
  {
    icon: <Star className="h-6 w-6 text-brand-blue-600" />,
    title: 'Rating System',
    description: 'Read and leave reviews to help others find the best professionals.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-brand-blue-600">Servisso</span>
          </h2>
          <p className="text-gray-600">
            Our platform offers a comprehensive solution for all your construction service needs,
            making it easy to find, communicate, and book qualified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full bg-brand-blue-50 p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
