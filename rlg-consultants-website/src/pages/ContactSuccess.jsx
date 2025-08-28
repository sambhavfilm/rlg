import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ContactSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
        <CheckCircle className="mx-auto h-24 w-24 text-green-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Thank You!
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Your message has been successfully sent. I will get back to you shortly.
        </p>
        <div className="mt-6">
          <Link to="/" className="text-primary hover:underline">
            Go back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSuccess;
