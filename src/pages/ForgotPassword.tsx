
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, ArrowLeft, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate password reset email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: 'Reset link sent!',
        description: 'Check your email for instructions to reset your password.',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
        <div className="container-custom max-w-md">
          <div className="bg-white rounded-2xl shadow-card p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold">Reset Password</h1>
                  <p className="text-gray-600 mt-1">
                    Enter your email and we'll send you a link to reset your password
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input-field pl-10"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...
                        </>
                      ) : (
                        'Send Reset Link'
                      )}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="bg-green-100 text-green-800 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold mb-2">Check Your Email</h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to: <br />
                  <span className="font-medium">{email}</span>
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full"
                >
                  Back to Reset Password
                </Button>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link to="/login" className="text-brand-blue-600 hover:text-brand-blue-700 inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Login
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
