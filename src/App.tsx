import React from 'react';
import { 
  Headphones, 
  Clock, 
  MessageSquare, 
  Users, 
  BarChart, 
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-2">
              <Headphones className="w-8 h-8" />
              <span className="text-2xl font-bold">SupportPro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-200 transition">Services</a>
              <a href="#features" className="hover:text-blue-200 transition">Features</a>
              <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Exceptional Customer Support for Growing Businesses
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              24/7 dedicated support teams that help scale your customer service operations
              with empathy, efficiency, and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
      </header>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">24/7</p>
            <p className="text-gray-600">Support Coverage</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">15min</p>
            <p className="text-gray-600">Average Response Time</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Clock className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock support ensuring your customers are never left waiting.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Multichannel Support</h3>
              <p className="text-gray-600">Seamless support across email, chat, phone, and social media platforms.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Dedicated Teams</h3>
              <p className="text-gray-600">Experienced professionals who understand your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-gray-600">"Their support team has been instrumental in our growth. Response times are incredible, and the quality of support is consistently excellent."</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100" 
                  alt="Mark Thompson" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Mark Thompson</p>
                  <p className="text-gray-600 text-sm">Director, GlobalRetail</p>
                </div>
              </div>
              <p className="text-gray-600">"Switching to SupportPro was one of the best decisions we made. Our customer satisfaction scores have improved significantly."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">contact@supportpro.com</p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-600">123 Support Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Headphones className="w-8 h-8" />
              <span className="text-2xl font-bold">SupportPro</span>
            </div>
            <div className="flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SupportPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;