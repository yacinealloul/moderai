"use client";
import React, { useState } from 'react';


const Playground: React.FC = () => {
    const [content, setContent] = useState('');
    const [moderationContext, setModerationContext] = useState('');
    const [response, setResponse] = useState('');
  

    const handleModerate = () => {
        console.log('Content to moderate:', content, 'with context:', moderationContext);
        setResponse(`{
  "status": "Moderated",
  "message": "This is a safe content!"
}`);
    };

    return (
<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    {/* Header */}
    <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2 text-gray-700">Playground</h2>
        <p className="text-lg text-gray-600">Try our service in real-time</p>
    </div>

    <div className="w-full max-w-4xl p-8 space-y-8 bg-white shadow-md rounded-lg">
        {/* Context Box */}
        <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="moderationContext">Context:</label>
            <input
                id="moderationContext"
                type="text"
                value={moderationContext}
                onChange={(e) => setModerationContext(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none transition duration-150"
                placeholder="Enter moderation context..."
            />
        </div>

        {/* Content Box */}
        <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="contentArea">Content:</label>
            <textarea
                id="contentArea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-2 bg-gray-200 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none transition duration-150 resize-none"
                style={{ minHeight: '200px' }}
                placeholder="Paste the content here..."
            ></textarea>
        </div>

        {/* Moderate Button */}
        <div className="text-center">
            <button
                onClick={handleModerate}
                className="py-2 px-6 bg-blue-600 hover:bg-blue-700 transition duration-150 rounded-md text-white font-medium shadow-md"
            >
                Moderate
            </button>
        </div>

        {/* Output Box */}
        <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="outputArea">Output:</label>
            <pre id="outputArea" className="w-full px-4 py-2 bg-gray-200 rounded-md border border-gray-300 font-mono">
                {response || 'Results will be displayed here.'}
            </pre>
        </div>
    </div>
</div>


    );
};

export default Playground;
