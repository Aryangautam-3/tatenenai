import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Tatenen AI Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;