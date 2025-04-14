
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Briefcase, Award, Target, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-brand-blue-50 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-slide-down">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-brand-blue-600">Servisso</span>
              </h1>
              <p className="text-xl text-gray-600">
                Connecting homeowners with skilled contractors for all construction and labor needs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Servisso was founded in 2023 with a simple mission: to make finding quality construction and labor services easy, transparent, and reliable.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, a homeowner frustrated with the challenge of finding reliable contractors, decided to create a platform that would connect service providers with clients in a seamless and trustworthy manner.
                </p>
                <p className="text-gray-600">
                  Today, Servisso is the leading marketplace for construction services, helping thousands of clients find the perfect professional for their projects while enabling contractors to grow their businesses.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl animate-slide-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Servisso Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 bg-brand-blue-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-card animate-slide-up">
                <div className="rounded-full bg-brand-blue-100 p-3 inline-flex mb-6">
                  <Target className="h-8 w-8 text-brand-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To simplify the process of connecting skilled professionals with clients who need construction and labor services, while ensuring reliability, quality, and transparency at every step.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-full bg-brand-orange-100 p-3 inline-flex mb-6">
                  <Award className="h-8 w-8 text-brand-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted platform for construction and labor services worldwide, revolutionizing how people connect with service professionals and transforming the industry standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600">
                These principles guide everything we do at Servisso.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <CheckCircle className="h-10 w-10 text-brand-blue-600" />,
                  title: 'Quality',
                  description: 'We are committed to maintaining the highest standards in service quality.',
                },
                {
                  icon: <Users className="h-10 w-10 text-brand-blue-600" />,
                  title: 'Trust',
                  description: 'Building trust through transparency and reliability in all interactions.',
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-brand-blue-600" />,
                  title: 'Professionalism',
                  description: 'Upholding the highest level of professionalism in everything we do.',
                },
                {
                  icon: <Award className="h-10 w-10 text-brand-blue-600" />,
                  title: 'Excellence',
                  description: 'Striving for excellence and continuous improvement in our platform.',
                },
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-card text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="rounded-full bg-brand-blue-50 p-4 inline-flex mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto animate-slide-up">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Experience the Servisso Difference?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join our community of clients and contractors today and see why thousands trust Servisso for their construction and labor needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/register?type=client"
                  className="btn-primary bg-white text-brand-blue-600 hover:bg-brand-blue-50"
                >
                  Sign Up as a Client
                </a>
                <a
                  href="/register?type=contractor"
                  className="btn-outline border-white text-white hover:bg-white/10"
                >
                  Join as a Contractor
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
