'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSearch = (query: string) => {
    console.log('Search for:', query);
    // Add global search functionality here
  };

  return (
    <html lang="en">
      <head>
        <title>SIROC Stream - Premium Fight Broadcasting</title>
        <meta name="description" content="Watch exclusive SIROC boxing events and world-class combat sports in ultra-high definition. Live fights, instant replays, multi-angle coverage." />
        <meta name="keywords" content="boxing, MMA, live streaming, SIROC, combat sports, fights" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        {/* Navigation - appears on all pages */}
        <Navigation onSearch={handleSearch} />
        
        {/* Page content */}
        <main className="min-h-screen bg-black">
          {children}
        </main>
        
        {/* Footer - appears on all pages */}
        <Footer />
      </body>
    </html>
  );
}