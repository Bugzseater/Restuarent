
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/home');
  };

  return (
    <div className="relative bg-[url('./assets/bg.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-2 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 stroke-text">BURGER</span>
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 sm:mb-12">
            <span className="text-yellow-400">QUEEN</span>
          </h1>
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={handleExploreClick}
          className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-md text-white font-bold text-lg sm:text-xl rounded-full shadow-lg hover:bg-opacity-20 transition duration-300 border border-white border-opacity-30"
        >
          Explore Menu
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 left-4 text-white text-sm sm:text-base"
      >
        © 2024 Burger Queen
      </motion.div>
    </div>
  );
};

export default Landing;