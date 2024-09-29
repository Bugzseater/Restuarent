import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          {/* Contact Info Section */}
          <motion.div 
            className="lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-red-500 w-6 h-6 mr-3" />
                  <span className="text-gray-600">123 Food Street, Food City</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-red-500 w-6 h-6 mr-3" />
                  <span className="text-gray-600">+1 (234) 567-890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-red-500 w-6 h-6 mr-3" />
                  <span className="text-gray-600">info@example.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form className="bg-gradient-to-br from-orange-200 to-yellow-300 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200" 
                  placeholder="Your Message" 
                  required 
                  style={{ minHeight: '120px' }} // Adjust height as needed
                />
              </div>
              <div className="mt-8">
                <button 
                  type="submit" 
                  className="w-full bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
