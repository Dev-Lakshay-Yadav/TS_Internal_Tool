const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">ToothSketch</h2>
          <p className="text-sm text-gray-400 mt-1">
            Designing Smiles, Digitally.
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-sm text-gray-400 text-center">
          Precision | Innovation | Aesthetics
        </div>

        {/* Right Section - Minimal Decorative Icons */}
        <div className="flex gap-4 text-gray-400 text-lg">
          <span className="hover:text-white transition cursor-default">🌐</span>
          <span className="hover:text-white transition cursor-default">💬</span>
          <span className="hover:text-white transition cursor-default">📸</span>
          <span className="hover:text-white transition cursor-default">💼</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ToothSketch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
