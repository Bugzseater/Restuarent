
import { motion } from 'framer-motion';
import Details from '../components/Details';
import foodImage from '../assets/landing.jpg';

const Explore = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-500 to-yellow-400 text-transparent bg-clip-text">
          HOT ITEMS
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* First Item */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg p-6 shadow-lg"
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            src={foodImage}
            alt="Cheese Burger"
            className="w-full h-48 object-cover rounded-md mb-4 transition duration-300"
          />
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">Cheese Burger</h3>
            <h4 className="text-white font-bold">Rs 400.00</h4>
          </div>
        </motion.div>

        {/* Second Item */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg p-6 shadow-lg"
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            src={foodImage}
            alt="Pizza"
            className="w-full h-48 object-cover rounded-md mb-4 transition duration-300"
          />
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">Pizza Margherita</h3>
            <h4 className="text-white font-bold">Rs 450.00</h4>
          </div>
        </motion.div>

        {/* Third Item */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg p-6 shadow-lg"
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            src={foodImage}
            alt="Chicken Wings"
            className="w-full h-48 object-cover rounded-md mb-4 transition duration-300"
          />
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">Chicken Wings</h3>
            <h4 className="text-white font-bold">Rs 350.00</h4>
          </div>
        </motion.div>

        {/* Fourth Item */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-yellow-400 rounded-lg p-6 shadow-lg"
        >
          <motion.img
            whileHover={{ rotate: 5 }}
            src={foodImage}
            alt="Veggie Wrap"
            className="w-full h-48 object-cover rounded-md mb-4 transition duration-300"
          />
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">Veggie Wrap</h3>
            <h4 className="text-white font-bold">Rs 300.00</h4>
          </div>
        </motion.div>
      </div>
    </div>

    <Details/>
    
    </>
  );
};

export default Explore;
