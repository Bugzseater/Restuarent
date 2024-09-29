
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-100 to-yellow-200 text-black font-bold py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Restaurant Description */}
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <p className="text-sm">
            Your culinary experience awaits!
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <div className="mb-1">
            <span className="text-xs">123 Food Street, Food City</span>
          </div>
          <div className="mb-1">
            <span className="text-xs">+1 (234) 567-890</span>
          </div>
          <div>
            <span className="text-xs">info@example.com</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-2 mt-2 md:mt-0">
          <a href="#" className="text-black hover:text-red-500 text-xs">Facebook</a>
          <a href="#" className="text-black hover:text-red-500 text-xs">Twitter</a>
          <a href="#" className="text-black hover:text-red-500 text-xs">Instagram</a>
          <a href="#" className="text-black hover:text-red-500 text-xs">LinkedIn</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-2">
        <p className="text-xs">© 2024 Your Restaurant Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
