"use client";
import React from "react";
import { showToast } from 'react-next-toast';
import axios from "axios";
import { redirect } from 'next/navigation';

const PricingPanel = (logged:any) => {
    const onClick = async (type:String) => {
        if (logged){
            const responses = await axios.get('/api/stripe'+type);
            window.location.href = responses.data.url; 
            return undefined           


        }
        return showToast.error('To get started you must sign in') 
    }
    return (
<div className="p-8 max-w-4xl mx-auto text-gray-800">
    <div className="text-center text-3xl font-semibold mb-8">Pricing</div>

    <div className="grid grid-cols-3 gap-12">
        {/* Free Plan */}
        <div className="flex flex-col border rounded-lg p-6 space-y-4 h-full">
            <div className="text-center text-2xl font-bold">Free  $0.00/month</div>
            <div className="text-center text-lg">100 requests per month</div>
            <ul className="list-disc pl-6 space-y-2 flex-grow">
                <li>Basic API Access</li>
                <li>Email Support</li>
                <li className="line-through text-gray-400">Priority Email Support</li>
                <li className="line-through text-gray-400">Access to SDKs and Tools</li>
            </ul>
            <button className="mx-auto px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full transition">Get Started</button>
        </div>

        <div className="flex flex-col border rounded-lg p-6 space-y-4 bg-gray-50 h-full">
            <div className="text-center text-2xl font-bold">Developer  $19.99/month</div>
            <div className="text-center text-lg">20,000 requests per month</div>
            <ul className="list-disc pl-6 space-y-2 flex-grow">
                <li>Enhanced API Access</li>
                <li>Priority Email Support</li>
                <li>Access to SDKs and Tools</li>
                <li className="line-through text-gray-400">Dedicated Resources</li>
            </ul>
            <button onClick={() => onClick('1')} className="mx-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition">Get started</button>
        </div>

        <div className="flex flex-col border rounded-lg p-6 space-y-4 bg-gray-100 h-full">
            <div className="text-center text-2xl font-bold">Professional  $179.99/month</div>
            <div className="text-center text-lg">200,000 requests per month</div>
            <ul className="list-disc pl-6 space-y-2 flex-grow">
                <li>Premium API Access</li>
                <li>24/7 Support</li>
                <li>Dedicated Resources</li>
            </ul>
            <button onClick={() => onClick('2')}className="mx-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">Get started</button>
        </div>
    </div>
</div>

    );
}

export default PricingPanel;
