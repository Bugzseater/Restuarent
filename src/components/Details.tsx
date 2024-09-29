
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import landingImage from '../assets/landing.jpg';

function Details() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center p-8 md:p-20 gap-10">
      
      {/* Image Section */}
      <motion.div
        className="flex justify-center md:w-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img 
          src={landingImage} 
          alt="Restaurant" 
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">ABOUT US</h1>
        <p className="text-gray-600 text-lg mb-6">
          Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where 
          to dine, which means the first impression happens long before they set foot on-premises. 
          It happens online. And when it does, the restaurant description plays a pivotal role.
        </p>

        <Link to={'/'}>
          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
            MORE FOODS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Details;
