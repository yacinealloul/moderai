import React, { useState } from 'react';
import { UserButton } from '@clerk/nextjs';

const Settings = (uid:any) => {
    const [apiKey, setApiKey] = useState('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'); // Example longer API key
    
    const show = () => {
        // Logic to regenerate API key. This is a placeholder.
        setApiKey(uid['uid']['user'])
    };

    return (
        <div className="p-6">
            {/* API Key Management */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6">API Key Management</h2>
                <p className="mb-4">Your current API key: 
                    <span className="font-mono bg-gray-100 p-2 rounded-lg inline-block ml-2">sk-{apiKey}</span>
                </p>
                <button onClick={show} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-300 ease-in-out shadow-lg">
                    Regenerate API Key
                </button>
            </div>


        </div>
    );
};

export default Settings;
