import React, { useState } from 'react';
import { sendMessageToDialogflow } from '../services/DialogflowService';

const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      const result = await sendMessageToDialogflow(message);
      setResponse(result.fulfillmentText);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Sorry, something went wrong. Please try again.');
    } finally {
      setMessage('');
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Chat with AI</h2>
      <div className="flex gap-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded mb-4"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
      {response && (
        <div className="mt-4 bg-gray-700 p-4 rounded-lg">
          <p className="text-white">{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;