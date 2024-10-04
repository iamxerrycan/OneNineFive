import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 mt-8 text-white text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
