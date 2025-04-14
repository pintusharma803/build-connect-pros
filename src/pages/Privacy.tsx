
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="lead">
              At Servisso, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register on the platform</li>
              <li>Fill out a form</li>
              <li>Participate in activities on the platform</li>
              <li>Contact customer support</li>
            </ul>
            <p>
              The personal information we collect may include:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Profile information (for contractors)</li>
              <li>Payment information</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for various purposes, including:
            </p>
            <ul>
              <li>Providing and maintaining our Service</li>
              <li>Notifying you about changes to our Service</li>
              <li>Allowing you to participate in interactive features</li>
              <li>Providing customer support</li>
              <li>Gathering analysis to improve our Service</li>
              <li>Monitoring the usage of the Service</li>
              <li>Detecting, preventing, and addressing technical issues</li>
              <li>Processing payments</li>
            </ul>
            
            <h2>3. Disclosure of Data</h2>
            <p>
              We may disclose your personal information in the following situations:
            </p>
            <ul>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>To prevent or investigate possible wrongdoing</li>
              <li>To protect the personal safety of users or the public</li>
              <li>To protect against legal liability</li>
              <li>With your consent or direction to do so</li>
            </ul>
            
            <h2>4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2>5. Your Data Protection Rights</h2>
            <p>
              You have certain data protection rights. If you wish to be informed of what personal information we hold about you and if you want it to be removed from our systems, please contact us.
            </p>
            
            <h2>6. Analytics</h2>
            <p>
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            
            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@servisso.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
