import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Career Counseling</h3>
            <p className="text-gray-300">
              Your trusted partner in guiding your career journey with professional advice and resources.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2">
              <li>Email: 
                <a href="mailto:support@careercounseling.com" className="text-blue-400 hover:text-blue-600 ml-1">
                  support@carling.com
                </a>
              </li>
              <li>Phone: 
                <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-600 ml-1">
                  +123 456 7890
                </a>
              </li>
              <li>Address: 123 Career Ave, City, Country</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-600" aria-label="Facebook">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Career Counseling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
