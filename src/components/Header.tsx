import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-yellow-200 to-red-400 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            BUGER <span className="text-white">QUEEN</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link to="/products" className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Menu
          </Link>
          <Link to="/contact" className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
       <div className="md:hidden bg-gradient-to-r from-yellow-200 to-red-400 rounded-lg shadow-lg font-bold">
       <div className="px-4 py-3 space-y-2">
         <Link 
           to="/" 
           onClick={toggleMenu} 
           className="block px-4 py-2 text-sm text-white rounded-md transition duration-150 ease-in-out hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:text-white"
         >
           Home
         </Link>
         <Link 
           to="/products" 
           onClick={toggleMenu} 
           className="block px-4 py-2 text-sm text-white rounded-md transition duration-150 ease-in-out hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:text-white"
         >
           Menu
         </Link>
         <Link 
           to="/contact" 
           onClick={toggleMenu} 
           className="block px-4 py-2 text-sm text-white rounded-md transition duration-150 ease-in-out hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:text-white"
         >
           Contact
         </Link>
       </div>
     </div>
      )}
    </header>
  );
}
