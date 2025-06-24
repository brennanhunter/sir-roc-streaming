'use client';

import React, { useState } from 'react';

export default function PitchPage() {
  const [showCostModal, setShowCostModal] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/images/logo.jpg" 
              alt="Sir Roc Boxing Promotions" 
              className="w-16 h-16 object-contain mr-4"
            />
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-yellow-400">SIR ROC</span>
              <span className="text-white ml-4">STREAM</span>
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Turn Every Fight Into
            <span className="text-yellow-400 block">$3,000+ Revenue</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional streaming platform that makes your boxing matches look like championship productions. 
            Ready to launch in 2 weeks.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-400/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">200</div>
              <div className="text-gray-300">Viewers Needed</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-400/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$15</div>
              <div className="text-gray-300">Per Pay-Per-View</div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-yellow-400/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$2,835</div>
              <div className="text-gray-300">Profit Per Event</div>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Fights Deserve <span className="text-yellow-400">Better</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You&apos;re putting on incredible boxing matches, but streaming them on social media 
              or basic platforms makes them look amateur. You&apos;re leaving money on the table.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Current Problems:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">❌</span>
                  Free platforms = No revenue control
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">❌</span>
                  Amateur-looking streaming setup
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">❌</span>
                  No way to monetize past boxing matches
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">❌</span>
                  Limited audience growth
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">❌</span>
                  No professional branding
                </li>
              </ul>
            </div>
            
            <div className="bg-black p-8 rounded-xl border border-gray-700">
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">The Reality</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                "Every boxing match you stream for free is potential revenue lost. Your audience 
                would gladly pay $15 to watch premium Sir Roc content, but they have no way to do it."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-400">Sir Roc Stream</span> Changes Everything
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A premium streaming platform built specifically for your brand. 
              Makes every fight look like a million-dollar production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Professional Streaming</h3>
              <p className="text-gray-300">
                4K video quality, professional player controls, and live chat. 
                Looks like championship boxing broadcasts.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Instant Revenue</h3>
              <p className="text-gray-300">
                Pay-per-view events and monthly subscriptions. 
                Start making money from your first stream.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Sir Roc Branded</h3>
              <p className="text-gray-300">
                Your logo, your colors, your brand. 
                Builds Sir Roc as a premium boxing promotion.
              </p>
            </div>
          </div>
          
          {/* Demo Preview */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-yellow-400/50">
            <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">See It In Action</h3>
            <div className="aspect-video bg-black rounded-xl border-2 border-gray-700 overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                src="/videos/StockFightBoxing.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
            <p className="text-center text-gray-400 mt-4">
              Real boxing footage with professional streaming quality
            </p>
          </div>
        </div>
      </div>

      {/* The Numbers */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-yellow-400">Numbers</span> Don&apos;t Lie
            </h2>
            <p className="text-xl text-gray-400">
              Simple math that shows massive profit potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Revenue Calculation */}
            <div className="bg-black p-8 rounded-xl border border-yellow-400/50">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Revenue Per Event</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="text-gray-300">200 viewers × $15</span>
                  <span className="text-white font-bold">$3,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Platform costs</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">-$165</span>
                    <button
                      onClick={() => setShowCostModal(true)}
                      className="text-blue-400 hover:text-blue-300 text-sm underline"
                    >
                      (see breakdown)
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                  <span className="text-gray-300">Net Profit</span>
                  <span className="text-yellow-400">$2,835</span>
                </div>
              </div>
            </div>
            
            {/* Annual Projection */}
            <div className="bg-black p-8 rounded-xl border border-yellow-400/50">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Annual Revenue</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="text-gray-300">6 events per year</span>
                  <span className="text-white font-bold">$17,010</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly subscribers (50 × $3)</span>
                  <span className="text-white font-bold">$1,800</span>
                </div>
                <div className="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                  <span className="text-gray-300">Total Annual</span>
                  <span className="text-yellow-400">$18,810</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-xl p-6">
              <p className="text-2xl font-bold text-yellow-400">
                Break-even at just 18 viewers per event. Everything above is pure profit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Tiers */}
      <div className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-yellow-400">Partnership</span>
            </h2>
            <p className="text-xl text-gray-400">
              Flexible options to get SIROC Stream launched
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">STARTER</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">25%</div>
                <div className="text-gray-400">Revenue Share</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  No upfront costs
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Full platform development
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Launch in 2 weeks
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Ongoing maintenance
                </li>
              </ul>
              
              <div className="text-center">
                <a 
                  href="mailto:contact@example.com?subject=Starter Partnership Interest"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-bold transition-colors inline-block"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Professional Tier */}
            <div className="bg-gray-900 p-8 rounded-xl border-2 border-yellow-400 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">PROFESSIONAL</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$3,000</div>
                <div className="text-gray-400">+ 15% Revenue Share</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Priority development
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Custom features
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Lower revenue share
                </li>
              </ul>
              
              <div className="text-center">
                <a 
                  href="mailto:contact@example.com?subject=Professional Partnership Interest"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold transition-colors inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Enterprise Tier */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-600 hover:border-yellow-400/50 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-white">ENTERPRISE</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$5,000</div>
                <div className="text-gray-400">+ 10% Revenue Share</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Everything in Professional
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Mobile app development
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Lowest revenue share
                </li>
              </ul>
              
              <div className="text-center">
                <a 
                  href="mailto:contact@example.com?subject=Enterprise Partnership Interest"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-bold transition-colors inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-yellow-400">Launch</span> Timeline
            </h2>
            <p className="text-xl text-gray-400">
              From handshake to first event revenue
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Week 1</h3>
              <p className="text-gray-300">Partnership signed, development begins</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Week 2</h3>
              <p className="text-gray-300">Platform completed, testing begins</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Week 3</h3>
              <p className="text-gray-300">Platform goes live, first event promoted</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Week 4</h3>
              <p className="text-gray-300">First event streams, revenue generated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-yellow-400">Monetize</span> Your Fights?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop leaving money on the table. Launch Sir Roc Stream and turn every boxing match 
            into a revenue-generating event.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:contact@example.com" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-4 px-8 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Schedule a Call
            </a>
            <a 
              href="/" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-4 px-8 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              See Live Demo
            </a>
          </div>
          
          {/* Xtremery Credibility */}
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Built by Professional Developers</h3>
            <p className="text-gray-300 mb-6">
              This platform is developed by <strong className="text-yellow-400">Xtremery</strong>, 
              a professional web development company specializing in high-performance streaming 
              and e-commerce platforms.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="text-gray-400">Learn more about our development team:</span>
              <a 
                href="https://xtremery.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
              >
                🚀 Visit Xtremery.com
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-8 border border-yellow-400/30">
            <p className="text-lg text-gray-300">
              <span className="text-yellow-400 font-bold">Limited Time:</span> 
              Lock in these partnership rates before we launch with other promotions. 
              This offer expires in 30 days.
            </p>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Modal - FIXED VERSION */}
      {showCostModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl border border-yellow-400 w-full max-w-2xl max-h-[90vh] flex flex-col">
            {/* Fixed Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">Monthly Platform Costs</h3>
              <button
                onClick={() => setShowCostModal(false)}
                className="text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Video Streaming Infrastructure</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Cloudflare Stream (1000 viewers)</span>
                      <span className="text-white">$30/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">CDN Bandwidth</span>
                      <span className="text-white">$20/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Video Storage & Processing</span>
                      <span className="text-white">$15/month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Platform Hosting</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Vercel Pro (hosting)</span>
                      <span className="text-white">$20/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Database (PostgreSQL)</span>
                      <span className="text-white">$25/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Backend API</span>
                      <span className="text-white">$15/month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-xl p-6 border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Essential Services</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Payment Processing (Stripe)</span>
                      <span className="text-white">$10/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Email Service</span>
                      <span className="text-white">$15/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Authentication & Security</span>
                      <span className="text-white">$10/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monitoring & Analytics</span>
                      <span className="text-white">$5/month</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-gray-300">Total Monthly Costs:</span>
                    <span className="text-yellow-400">$165/month</span>
                  </div>
                  <div className="flex justify-between text-lg mt-2">
                    <span className="text-gray-400">Per event (6 events/year):</span>
                    <span className="text-white">~$28/event</span>
                  </div>
                </div>

                {/* Xtremery Management Offer */}
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-cyan-400/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">X</span>
                    </div>
                    <h4 className="text-xl font-bold text-cyan-400">Xtremery Management</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Don&apos;t want to manage all these technical details? Xtremery can handle 
                    everything for you.
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 border border-cyan-400/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">Xtremery Full Management:</span>
                      <span className="text-cyan-400 font-bold text-xl">$200/month</span>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>✓ All infrastructure costs included</li>
                      <li>✓ 24/7 monitoring & support</li>
                      <li>✓ Technical maintenance</li>
                      <li>✓ Feature updates & improvements</li>
                      <li>✓ Direct support line</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    Focus on boxing while we handle the technology
                  </p>
                </div>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="p-6 border-t border-gray-700 text-center">
              <button
                onClick={() => setShowCostModal(false)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-8 rounded-lg font-bold transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}