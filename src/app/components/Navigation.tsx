'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  onSearch?: (query: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const navItems = [
    { label: 'LIVE FIGHTS', href: '/' },
    { label: 'BROWSE', href: '/browse' },
    { label: 'SCHEDULE', href: '/schedule' },
    { label: 'HIGHLIGHTS', href: '/highlights' },
  ];

  return (
    <nav className="bg-dark border-b border-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Area */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img 
                src="/images/logo.jpg" 
                alt="SIR ROC Boxing Promotions" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold">
                <span className="text-primary">SIR ROC</span>
                <span className="text-light ml-2">STREAM</span>
              </h1>
              <p className="text-xs text-light/60 uppercase tracking-widest">
                Boxing Promotions
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide
                            transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-primary/20 text-primary border-b-2 border-primary'
                      : 'text-light/70 hover:text-primary hover:bg-dark/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Search & User Area */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fights..."
                className="bg-dark/80 border border-secondary rounded-full py-2 px-4 pr-10
                         text-light placeholder-light/50 focus:outline-none focus:ring-2 
                         focus:ring-primary focus:border-transparent
                         w-48 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2
                         text-light/60 hover:text-primary"
              >
                🔍
              </button>
            </form>

            {/* Notifications */}
            <button className="relative p-2 text-light/60 hover:text-primary 
                             transition-colors duration-200">
              <span className="text-lg">🔔</span>
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-dark 
                              rounded-full flex items-center justify-center">
                <span className="text-light text-sm font-bold">U</span>
              </div>
              <button className="text-light/70 hover:text-primary transition-colors
                               text-sm font-medium">
                Profile
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md
                       text-light/60 hover:text-primary hover:bg-dark/50
                       transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 bg-current transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 bg-current transition-transform duration-200 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-dark/90 border-t border-secondary`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-3 px-3 py-2 mb-4">
            <img 
              src="/images/logo.jpg" 
              alt="SIR ROC Boxing Promotions" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold">
                <span className="text-primary">SIR ROC</span>
                <span className="text-light ml-1">STREAM</span>
              </h1>
            </div>
          </div>

          {/* Mobile Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-bold
                        uppercase tracking-wide transition-colors duration-200 ${
                pathname === item.href
                  ? 'bg-primary/20 text-primary'
                  : 'text-light/70 hover:text-primary hover:bg-dark/50'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Search */}
          <div className="px-3 py-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fights..."
                className="w-full bg-dark/80 border border-secondary rounded-lg py-2 px-3
                         text-light placeholder-light/50 focus:outline-none focus:ring-2 
                         focus:ring-primary focus:border-transparent"
              />
            </form>
          </div>

          {/* Mobile User Area */}
          <div className="px-3 py-2 border-t border-secondary mt-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-dark 
                              rounded-full flex items-center justify-center">
                <span className="text-light text-sm font-bold">U</span>
              </div>
              <span className="text-light/70 font-medium">Profile</span>
              <div className="ml-auto">
                <span className="text-lg">🔔</span>
                <span className="absolute w-2 h-2 bg-red-500 rounded-full -mt-2 -mr-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;