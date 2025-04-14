
import { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [animatedElements, setAnimatedElements] = useState<string[]>([]);
  
  const tools = [
    'Paint Roller', 'Wrench', 'Hammer', 'Screwdriver', 'Drill', 'Trowel'
  ];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomTool = tools[Math.floor(Math.random() * tools.length)];
      setAnimatedElements(prev => [...prev, randomTool]);
      
      setTimeout(() => {
        setAnimatedElements(prev => {
          const newArray = [...prev];
          newArray.shift();
          return newArray;
        });
      }, 3000);
    }, 600);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-brand-blue-50 to-white relative overflow-hidden">
      {/* Animated Elements */}
      {animatedElements.map((tool, index) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 0.5;
        
        return (
          <div
            key={`${tool}-${index}`}
            className="absolute text-brand-blue-300 opacity-30 animate-float"
            style={{
              left: `${randomX}%`,
              top: '-50px',
              animation: `float 3s ease-in-out ${randomDelay}s forwards`,
              fontSize: '1.5rem',
            }}
          >
            {tool === 'Paint Roller' && '🖌️'}
            {tool === 'Wrench' && '🔧'}
            {tool === 'Hammer' && '🔨'}
            {tool === 'Screwdriver' && '🪛'}
            {tool === 'Drill' && '🔌'}
            {tool === 'Trowel' && '🧱'}
          </div>
        );
      })}
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-slide-down">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find The Perfect <span className="text-brand-blue-600">Construction Professional</span> For Your Project
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Connect with skilled contractors and laborers for all your construction needs. 
            From painting to plumbing, we've got you covered.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl mb-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What service do you need?"
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
              <Link to="/services" className="block">
                <Button className="btn-primary w-full md:w-auto">Search</Button>
              </Link>
            </div>
          </div>
          
          {/* User Type Selection */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register?type=client">
              <Button className="btn-secondary w-full sm:w-auto">Hire a Professional</Button>
            </Link>
            <Link to="/register?type=contractor">
              <Button variant="outline" className="btn-outline w-full sm:w-auto">Join as a Contractor</Button>
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto mt-16">
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-brand-blue-600 mb-1">5,000+</div>
            <div className="text-sm text-gray-600">Contractors</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-brand-blue-600 mb-1">10K+</div>
            <div className="text-sm text-gray-600">Completed Projects</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-brand-blue-600 mb-1">4.8/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-brand-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
