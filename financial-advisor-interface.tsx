import React, { useState } from 'react';
import { MessageCircle, Calendar, FileText, CheckSquare, PieChart, Settings } from 'lucide-react';

const FinancialAdvisorInterface = () => {
  const [messages, setMessages] = useState([
    {
      type: 'system',
      content: "Welcome! I'm your AI assistant. I can help with client meeting preparation, reports, and task management.",
      timestamp: new Date().toISOString()
    },
    {
      type: 'user',
      content: 'Can you prepare a summary for my meeting with John Smith tomorrow?',
      timestamp: new Date().toISOString()
    },
    {
      type: 'agent',
      content: "I'll analyze John Smith's portfolio and prepare a meeting summary. Here's what I found:",
      timestamp: new Date().toISOString(),
      data: {
        accountBalance: '$1,250,000',
        recentChanges: '+2.3% MTD',
        upcomingActions: '2 required signatures',
        lastReview: '3 months ago'
      }
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          type: 'user',
          content: inputValue,
          timestamp: new Date().toISOString()
        }
      ]);
      setInputValue('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div style={{ backgroundColor: 'rgb(54, 69, 119)' }} className="w-16 flex flex-col items-center py-4 space-y-6">
        <MessageCircle className="text-white w-6 h-6" />
        <Calendar className="text-gray-300 w-6 h-6" />
        <FileText className="text-gray-300 w-6 h-6" />
        <CheckSquare className="text-gray-300 w-6 h-6" />
        <PieChart className="text-gray-300 w-6 h-6" />
        <div className="flex-grow" />
        <Settings className="text-gray-300 w-6 h-6" />
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b py-4 px-6" style={{ borderColor: 'rgb(56, 101, 142)' }}>
          <h1 className="text-xl font-semibold" style={{ color: 'rgb(56, 101, 142)' }}>AI Assistant</h1>
          <p className="text-sm text-gray-500">Connected to CRM and Portfolio Systems</p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-3xl ${
                message.type === 'user' 
                  ? 'ml-auto text-white rounded-l-lg rounded-tr-lg' 
                  : 'bg-white rounded-r-lg rounded-tl-lg shadow'
              } p-4`}
              style={{ 
                backgroundColor: message.type === 'user' ? 'rgb(62, 149, 221)' : 'white'
              }}
            >
              <div className="text-sm mb-1">
                {message.type === 'user' ? 'You' : message.type === 'system' ? 'System' : 'AI Assistant'}
              </div>
              <div>{message.content}</div>
              {message.data && (
                <div className="mt-3 bg-gray-50 rounded p-3 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(message.data).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-500">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white border-t p-4" style={{ borderColor: 'rgb(56, 101, 142)' }}>
          <div className="max-w-3xl mx-auto flex gap-4">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 border rounded-lg p-3 h-20 resize-none focus:outline-none focus:ring-2"
              style={{ 
                '--tw-ring-color': 'rgb(61, 112, 155)'
              }}
              placeholder="Type your message here..."
            />
            <button 
              className="text-white px-6 py-2 rounded-lg transition-colors"
              style={{ 
                backgroundColor: 'rgb(62, 149, 221)',
                ':hover': {
                  backgroundColor: 'rgb(61, 112, 155)'
                }
              }}
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Context Panel */}
      <div className="w-64 bg-white border-l p-4" style={{ borderColor: 'rgb(56, 101, 142)' }}>
        <h2 className="font-semibold mb-4" style={{ color: 'rgb(56, 101, 142)' }}>Active Context</h2>
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium" style={{ color: 'rgb(56, 101, 142)' }}>Current Client</div>
            <div className="text-lg">John Smith</div>
            <div className="text-sm text-gray-500">Next Meeting: Tomorrow</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium" style={{ color: 'rgb(56, 101, 142)' }}>Quick Actions</div>
            <button 
              className="text-sm block mt-2 hover:text-blue-700"
              style={{ color: 'rgb(62, 149, 221)' }}
            >
              Generate Report
            </button>
            <button 
              className="text-sm block mt-2 hover:text-blue-700"
              style={{ color: 'rgb(62, 149, 221)' }}
            >
              Schedule Follow-up
            </button>
            <button 
              className="text-sm block mt-2 hover:text-blue-700"
              style={{ color: 'rgb(62, 149, 221)' }}
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisorInterface;
