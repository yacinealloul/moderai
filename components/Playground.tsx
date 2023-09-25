import React, { useState } from 'react';

const Playground: React.FC = () => {
    const [content, setContent] = useState('');
    const [response, setResponse] = useState('');

    const handleModerate = () => {
        // Handle moderation of the content here
        console.log('Content to moderate:', content);
        // Mock response after moderation (You'd likely use an API here)
        setResponse(`{
  "status": "Moderated",
  "message": "This is a safe content!"
}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-20 px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-5xl font-extrabold mb-3">Playground</div>
                    <div className="text-xl text-gray-600">Test and see results of your moderation API in real-time.</div>
                </div>
                
                {/* Content Input and Controls */}
                <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row gap-8 mb-12">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="flex-grow bg-gray-900 text-white p-4 rounded-md shadow-inner resize-none"
                        style={{ minHeight: '300px', fontFamily: 'monospace' }}
                        placeholder="Paste the content you want to moderate here..."
                    ></textarea>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleModerate}
                            className="py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition duration-300 rounded-md text-white font-semibold shadow-md"
                        >
                            Moderate Content
                        </button>

                        <div className="text-gray-600 text-sm">
                            Content will be checked for any violations as per the moderation guidelines.
                        </div>
                    </div>
                </div>

                {/* Moderation Output */}
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                    <div className="font-semibold mb-4">Moderation Output:</div>
                    <pre className="bg-gray-900 text-white p-4 rounded-md shadow-inner" style={{ fontFamily: 'monospace', minHeight: '200px' }}>
                        {response || 'Moderation results will be displayed here.'}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Playground;
