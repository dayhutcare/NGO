import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </div>
        
        <div className="relative section text-light">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Making the World a Better Place
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Join us in our mission to create positive change and improve lives through sustainable community development.
          </p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Get Involved <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "1000+",
              description: "Lives Impacted",
            },
            {
              title: "50+",
              description: "Active Projects",
            },
            {
              title: "25+",
              description: "Communities Served",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-light rounded-lg shadow-lg hover-effect"
            >
              <h3 className="text-4xl font-bold text-red mb-2">{stat.title}</h3>
              <p className="text-dark">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-light">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Education Initiative",
              image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              description: "Providing quality education to underprivileged children.",
            },
            {
              title: "Clean Water Project",
              image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              description: "Ensuring access to clean water in rural communities.",
            },
            {
              title: "Healthcare Program",
              image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              description: "Delivering essential healthcare services to those in need.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover-effect"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray mb-4">{project.description}</p>
                <Link
                  to="/about"
                  className="text-red hover:text-dark-red inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;