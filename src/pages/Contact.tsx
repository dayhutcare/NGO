import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        
        <div className="relative section text-light">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with us to learn more about our work or how you can help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-red text-light p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray">contact@ngoname.org</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-red text-light p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-red text-light p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray">123 Charity Street, City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded border border-gray focus:border-red focus:ring-1 focus:ring-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded border border-gray focus:border-red focus:ring-1 focus:ring-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded border border-gray focus:border-red focus:ring-1 focus:ring-red"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded border border-gray focus:border-red focus:ring-1 focus:ring-red"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full inline-flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;