import React from 'react';
import { Target, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-light">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Learn about our mission, vision, and the passionate team behind our organization.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="h-8 w-8 text-red" />
                <h2 className="text-3xl font-bold text-dark">Our Mission</h2>
              </div>
              <p className="text-gray text-lg mb-6">
                To empower communities through sustainable development initiatives,
                focusing on education, healthcare, and environmental conservation.
                We strive to create lasting positive change in the lives of those we serve.
              </p>
              <Link to="/donate" className="btn btn-highlight pulse inline-block">
                Support Our Mission
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Heart className="h-8 w-8 text-red" />
                <h2 className="text-3xl font-bold text-dark">Our Vision</h2>
              </div>
              <p className="text-gray text-lg">
                A world where every individual has access to basic necessities,
                quality education, and opportunities for growth. We envision
                communities that are self-sufficient and thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Users className="h-8 w-8 text-red" />
              <h2 className="text-3xl font-bold text-dark">Our Team</h2>
            </div>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Meet the dedicated individuals who work tirelessly to make our vision a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Executive Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Leading our organization with passion and dedication for over 10 years."
              },
              {
                name: "Michael Chen",
                role: "Program Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Overseeing our programs with expertise in sustainable development."
              },
              {
                name: "Emily Rodriguez",
                role: "Community Outreach",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Building strong relationships with communities we serve."
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">{member.name}</h3>
                  <p className="text-red font-semibold mb-4">{member.role}</p>
                  <p className="text-gray">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;