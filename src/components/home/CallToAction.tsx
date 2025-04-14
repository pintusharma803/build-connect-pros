
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Ready to Find the Perfect Professional for Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Join thousands of satisfied clients who have found reliable contractors through our platform. 
            Sign up today and get started in minutes!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/register?type=client">
              <Button className="bg-white text-brand-blue-600 hover:bg-brand-blue-50 btn-primary w-full sm:w-auto">
                Hire a Professional
              </Button>
            </Link>
            <Link to="/register?type=contractor">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-outline w-full sm:w-auto">
                Join as a Contractor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
