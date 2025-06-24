'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  isVip?: boolean;
  isModerator?: boolean;
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mockMessages: ChatMessage[] = [
    { id: '1', username: 'BoxingFan92', message: 'This fight is incredible! 🔥', timestamp: '2:34', isVip: true },
    { id: '2', username: 'FightNight', message: 'SIROC always delivers the best fights', timestamp: '2:35' },
    { id: '3', username: 'KnockoutKing', message: 'That was a beautiful combination!', timestamp: '2:35' },
    { id: '4', username: 'ChatMod', message: 'Keep the chat respectful everyone! 🥊', timestamp: '2:36', isModerator: true },
    { id: '5', username: 'RingwormJoe', message: 'The quality is amazing, crystal clear 4K', timestamp: '2:36' },
    { id: '6', username: 'PunchDrunk', message: 'LETS GO CHAMP!!! 💪', timestamp: '2:37' },
    { id: '7', username: 'TitleHolder', message: 'Best streaming platform for boxing', timestamp: '2:37', isVip: true },
    { id: '8', username: 'SwingBlow', message: 'Round 3 is going to be epic', timestamp: '2:38' },
  ];

  useEffect(() => {
    setMessages(mockMessages);
    
    // Simulate new messages coming in
    const interval = setInterval(() => {
      const randomMessages = [
        'This is intense! 🥊',
        'SIROC Stream is the best!',
        'What a knockout! 💥',
        'Amazing quality stream',
        'That was a close round',
        'The atmosphere is electric!',
        'Best fight of the year!',
        'LETS GOOO! 🔥',
        'Incredible technique',
        'This fighter is on fire!'
      ];
      
      const usernames = ['FightFan', 'BoxingBeast', 'ChampWatcher', 'RingMaster', 'PunchTime', 'KOViewer'];
      
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        username: usernames[Math.floor(Math.random() * usernames.length)] + Math.floor(Math.random() * 999),
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVip: Math.random() > 0.8
      };
      
      setMessages(prev => [...prev.slice(-20), newMsg]); // Keep last 20 messages
    }, 3000 + Math.random() * 4000); // Random interval between 3-7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      username: 'You',
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
  };

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-700 h-full flex flex-col"
         style={{ contain: 'layout style' }}
         onScroll={(e) => e.stopPropagation()}>
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg uppercase tracking-wide">
            Live Chat
          </h3>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
            <span className="text-sm text-gray-400">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
        <div className="text-sm text-yellow-400 mt-1">
          {messages.length} viewers chatting
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0 scroll-smooth"
           style={{ scrollBehavior: 'smooth', contain: 'layout style' }}
           onScroll={(e) => e.stopPropagation()}>
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold ${
                msg.isModerator 
                  ? 'text-red-400' 
                  : msg.isVip 
                    ? 'text-yellow-400' 
                    : msg.username === 'You'
                      ? 'text-green-400'
                      : 'text-blue-400'
              }`}>
                {msg.isModerator && '🛡️ '}
                {msg.isVip && '👑 '}
                {msg.username}
              </span>
              <span className="text-xs text-gray-500">{msg.timestamp}</span>
            </div>
            <div className="text-white text-sm leading-relaxed pl-2 border-l-2 border-gray-700">
              {msg.message}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-700">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Join the conversation..."
            className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2
                     text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-yellow-400 focus:border-transparent text-sm"
            maxLength={200}
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 
                     disabled:cursor-not-allowed text-black px-4 py-2 rounded-lg 
                     font-bold transition-colors duration-200"
          >
            Send
          </button>
        </form>
        <div className="text-xs text-gray-500 mt-2">
          Press Enter to send • Be respectful in chat
        </div>
      </div>
    </div>
  );
};

export default LiveChat;