// components/Chatbot.tsx

import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userInput, setUserInput] = useState<string>('');

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userInput.trim() !== '') {
      // Handle user message and generate a bot response
      const botResponse = `Bot: You said "${userInput}"`;

      // Update the messages array with the user input and bot response
      setMessages([...messages, `User: ${userInput}`, botResponse]);

      // Clear the user input field
      setUserInput('');
    }
  };

  return (
    <div 
        className="chatbot chatbot flex flex-col align-center items-center"
        style={{marginTop: '64vh'}}
    >
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
