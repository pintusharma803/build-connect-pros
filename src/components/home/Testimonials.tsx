
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'I found an amazing painter through Servisso. The platform was so easy to use, and I could view his previous work and ratings. The job was completed perfectly and on time!',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Contractor',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'As an electrician, Servisso has helped me connect with new clients and grow my business. The subscription gives me great visibility and the chat feature makes communication simple.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Property Manager',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    rating: 4,
    text: 'Managing multiple properties requires reliable contractors. Servisso helps me find qualified professionals quickly for all maintenance needs across our properties.',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 5,
    text: 'The plumber I hired through Servisso was prompt, professional, and fixed my issue for a fair price. I\'ll definitely use this platform again for future home repairs.',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <section className="section-padding bg-brand-blue-50">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-brand-blue-600">Clients Say</span>
          </h2>
          <p className="text-gray-600">
            Read testimonials from clients and contractors who have used our platform
            to connect and collaborate on projects.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mx-1 h-3 w-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-brand-blue-600 w-6' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
