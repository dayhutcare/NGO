import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-red" />
              <span className="font-bold text-xl">NGO Name</span>
            </div>
            <p className="text-gray">
              Making a difference in people's lives through dedicated service and compassion.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contact@ngoname.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Charity Street, City, Country</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray text-dark placeholder-dark/60"
              />
              <button className="btn btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} NGO Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;