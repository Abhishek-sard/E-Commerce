import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import Visa from '../assets/visa.jpg';
import Mastercard from '../assets/mastercard.jpg';
import Paytm from '../assets/paytm.jpg';
import UPI from '../assets/upi.jpg';
import Appstore from '../assets/app.jpg';
import Playstore from '../assets/playstore.jpg'
const Footer = () => {
  return (
    <footer className="bg-red-500 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LICIOUS</h3>
            <p className="mb-4">India's freshest meat delivery service</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-300"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-red-300"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-red-300"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-red-300"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-red-300"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-300">About Us</a></li>
              <li><a href="#" className="hover:text-red-300">Our Products</a></li>
              <li><a href="#" className="hover:text-red-300">Recipes</a></li>
              <li><a href="#" className="hover:text-red-300">Blog</a></li>
              <li><a href="#" className="hover:text-red-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Help & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">HELP & INFORMATION</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-300">FAQ</a></li>
              <li><a href="#" className="hover:text-red-300">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-red-300">Return Policy</a></li>
              <li><a href="#" className="hover:text-red-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-300">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
            <div className="flex items-center mb-2">
              <IoMdMail className="mr-2" />
              <span>care@licious.com</span>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <span>1800-4190-786</span>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">DOWNLOAD OUR APP</h5>
              <div className="flex space-x-2">
                <img src={Appstore} alt="App Store" className="h-10" />
                <img src={Playstore} alt="Play Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-600 pt-6 text-center">
          <p>© {new Date().getFullYear()} Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
          <p className="text-sm mt-2">100% Secure Payment | SSL Certified</p>
          <div className="flex justify-center mt-4 space-x-4">
            <img src={Visa} alt="Visa" className="h-6" />
            <img src={Mastercard} alt="Mastercard" className="h-6" />
            <img src={Paytm} alt="Paytm" className="h-6" />
            <img src={UPI} alt="UPI" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;