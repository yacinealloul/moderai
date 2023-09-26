import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

const Settings = () => {
    const [apiKey, setApiKey] = useState('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'); // Example longer API key

    const regenerateApiKey = () => {
        // Logic to regenerate API key. This is a placeholder.
        setApiKey(`${Math.random().toString(36).substring(2, 18)}${Math.random().toString(36).substring(2, 18)}${Math.random().toString(36).substring(2, 18)}`);
    };

    return (
        <div className="p-6">
            {/* API Key Management */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">API Key Management</h2>
                <p>Your current API key: <span className="font-mono">sk-{apiKey}</span></p>
                <button onClick={regenerateApiKey} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                    Regenerate API Key
                </button>
            </div>

            {/* Billing Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
                <p><strong>Subscription Plan:</strong> Premium</p>
                <p><strong>Next Billing Date:</strong> October 20, 2023</p>
            </div>

        </div>
    )
}

export default Settings;
