
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead">
              These Terms of Service ("Terms") govern your use of the Servisso platform, accessible at servisso.com and its mobile applications ("Service"). Please read these Terms carefully before using the Service.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            
            <h2>2. Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>
            
            <h2>3. User Types and Services</h2>
            <p>
              Servisso offers a platform for two types of users:
            </p>
            <ul>
              <li>
                <strong>Clients:</strong> Those seeking construction and labor services.
              </li>
              <li>
                <strong>Contractors:</strong> Those providing construction and labor services.
              </li>
            </ul>
            
            <h2>4. Service Usage</h2>
            <p>
              Users may not use the Service for any illegal purposes or to conduct activities that violate the rights of others or public order.
            </p>
            
            <h2>5. Payments and Subscriptions</h2>
            <p>
              Some aspects of the Service require payment of fees. You will be required to select a payment plan and provide accurate billing information.
            </p>
            <p>
              Subscriptions are automatically renewed unless canceled before the renewal date. You can cancel your subscription at any time through your account settings.
            </p>
            
            <h2>6. Contractor Obligations</h2>
            <p>
              Contractors are responsible for the accuracy of their profiles, service descriptions, and pricing information.
            </p>
            <p>
              Contractors must fulfill the services agreed upon with clients. Failure to do so may result in penalties, including account suspension.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              Servisso serves as a platform connecting clients with contractors. We are not responsible for the quality of services provided by contractors or the actions of users on the platform.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@servisso.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
