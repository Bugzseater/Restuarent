import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import landingImage from '../assets/landing.jpg'; // Adjust path as necessary

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date("2024-10-02T12:00:00") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Add an empty dependency array to run once

  const timerComponents = Object.keys(timeLeft).map(interval => {
    const value = timeLeft[interval as keyof TimeLeft];
    if (value === undefined) {
      return null;
    }

    return (
      <motion.div
        key={interval}
        className="flex flex-col items-center p-2 bg-white bg-opacity-20 rounded-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-sm uppercase">{interval}</span>
      </motion.div>
    );
  });

  return (
    <motion.div
      className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-xl shadow-2xl w-[80%] mx-auto sm:w-[90%] "
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-white mb-6 md:mb-0 md:mr-6 flex-1">
          <motion.h2 
            className="text-3xl font-bold mb-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Best Selling OFFER
          </motion.h2>
          <motion.p 
            className="text-xl mb-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Offer ends in:
          </motion.p>
          <motion.div 
            className="flex space-x-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">Time's up!</span>}
          </motion.div>
        </div>
        <motion.div 
          className="w-full md:w-1/3 aspect-square relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={landingImage}
            alt="Delicious Burger"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
