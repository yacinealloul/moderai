"use client";
import React, { useState } from 'react';

const Playground: React.FC = () => {
    const [content, setContent] = useState('');
    const [response, setResponse] = useState('');

    const handleModerate = () => {
        console.log('Content to moderate:', content);
        setResponse(`{
  "status": "Moderated",
  "message": "This is a safe content!"
}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full ">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-5xl font-extrabold mb-3">Playground</div>
                    <div className="text-xl text-gray-600">Test and see results of your moderation API in real-time.</div>
                </div>
                
                {/* Content Input */}
                <div className="mb-8">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-gray-900 text-white p-4 rounded-md shadow-inner resize-none"
                        style={{ minHeight: '200px', fontFamily: 'monospace' }}
                        placeholder="Paste the content you want to moderate here..."
                    ></textarea>
                </div>

                {/* Moderation Control */}
                <div className="mb-8 text-center">
                    <button
                        onClick={handleModerate}
                        className="py-2 px-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition duration-300 rounded-md text-white font-semibold shadow-md"
                    >
                        Moderate Content
                    </button>
                    <div className="mt-2 text-gray-600 text-sm">
                        Content will be checked for any violations as per the moderation guidelines.
                    </div>
                </div>

                {/* Moderation Output */}
                <div>
                    <div className="font-semibold mb-4">Moderation Output:</div>
                    <pre className="bg-gray-900 text-white p-4 rounded-md shadow-inner" style={{ fontFamily: 'monospace', minHeight: '150px' }}>
                        {response || 'Moderation results will be displayed here.'}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Playground;
