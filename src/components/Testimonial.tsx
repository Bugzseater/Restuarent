import { motion } from 'framer-motion';
import userImage from '../assets/bg.jpg';

const testimonials = [
  {
    name: "John Doe",
    text: "The food was absolutely amazing! I've never tasted anything like it.",
    role: "Food Enthusiast",
    image: userImage, // Corrected: Removed curly braces
  },
  {
    name: "Jane Smith",
    text: "Great service and delicious meals! Highly recommend to everyone.",
    role: "Restaurant Critic",
    image: userImage, // Corrected: Removed curly braces
  },
  {
    name: "Emily Johnson",
    text: "A wonderful dining experience. The ambiance and food are top-notch!",
    role: "Regular Customer",
    image: userImage, // Corrected: Removed curly braces
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-400 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-orange-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
