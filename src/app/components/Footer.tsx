'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="SIROC Boxing Promotions" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold">
                <span className="text-yellow-400">SIROC</span>
                <span className="text-white ml-1">STREAM</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The premier destination for live boxing and combat sports streaming. 
              Professional fights, exclusive content, ultra HD quality.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 SIROC Boxing Promotions. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Live Fights
                </Link>
              </li>
              <li>
                <Link href="/browse" className="hover:text-yellow-400 transition-colors">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-yellow-400 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/highlights" className="hover:text-yellow-400 transition-colors">
                  Highlights
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/help" className="hover:text-yellow-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-yellow-400 transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;