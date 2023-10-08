import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
interface DashboardChartProps {
    uid: string; // or number, depending on what `user?.userId` is
  }
const Settings = (uid:any) => {
    const [apiKey, setApiKey] = useState('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'); // Example longer API key

    const regenerateApiKey = () => {
        // Logic to regenerate API key. This is a placeholder.
        setApiKey(uid['uid']['user']);
    };

    return (
        <div className="p-6">
            {/* API Key Management */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">API key management</h2>
                <p>Your current API key: <span className="font-mono">sk-{apiKey}</span></p>
                <button onClick={regenerateApiKey} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
                    Show my API key
                </button>
            </div>

            {/* Billing Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Billing information</h2>
                <p><strong>Plan:</strong> Premium</p>
                <p><strong>Next billing date:</strong> October 20, 2023</p>
            </div>

        </div>
    )
}

export default Settings;
