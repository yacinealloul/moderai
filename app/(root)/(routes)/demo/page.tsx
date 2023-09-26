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
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <div className="text-center p-6 bg-white shadow-md mb-6">
                <div className="text-4xl font-extrabold mb-3">Playground</div>
                <div className="text-lg text-gray-600">Test your moderation API in real-time.</div>
            </div>

            <div className="flex p-6 space-x-6">

                {/* Context Box */}
                <div className="flex-1">
                    <label className="font-semibold mb-2 block">Context:</label>
                    <input
                        type="text"
                        value={moderationContext}
                        onChange={(e) => setModerationContext(e.target.value)}
                        className="w-full bg-gray-200 p-2 rounded-md shadow-inner"
                        placeholder="Enter moderation context..."
                    />
                </div>

                {/* Content Box */}
                <div className="flex-1">
                    <label className="font-semibold mb-2 block">Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-gray-300 p-4 rounded-md shadow-inner resize-none"
                        style={{ minHeight: '200px', fontFamily: 'monospace' }}
                        placeholder="Paste the content here..."
                    ></textarea>
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleModerate}
                            className="py-2 px-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition duration-300 rounded-md text-white font-medium shadow-md"
                        >
                            Moderate
                        </button>
                    </div>
                </div>

                {/* Output Box */}
                <div className="flex-1">
                    <label className="font-semibold mb-2 block">Output:</label>
                    <pre className="w-full bg-gray-300 text-black p-4 rounded-md shadow-inner" style={{ minHeight: '200px', fontFamily: 'monospace' }}>
                        {response || 'Results will be displayed here.'}
                    </pre>
                </div>

            </div>
        </div>
    );
};

export default Playground;
