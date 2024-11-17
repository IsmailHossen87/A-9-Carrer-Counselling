import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">Career Counseling</h3>
            <p>Your trusted partner in guiding your career journey with professional advice and resources.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <ul>
              <li>Email: support@careercounseling.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Career Ave, City, Country</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-600">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:text-blue-600">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Career Counseling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
