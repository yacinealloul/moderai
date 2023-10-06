import React from 'react';

const PricingPanel: React.FC = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto text-gray-700">
            {/* Title */}
            <div className="text-center text-3xl font-semibold mb-8">Choose Your Plan</div>

            {/* Plans */}
            <div className="grid grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className="flex flex-col border rounded-lg p-6 space-y-4 h-full">
                    <div className="text-center text-2xl font-bold">Free</div>
                    <div className="text-center text-lg">100 requests per month</div>
                    <ul className="list-disc pl-6 space-y-2 flex-grow">
                        <li>Basic API Access</li>
                        <li>Email Support</li>
                        <li className="line-through text-gray-400">Priority Email Support</li>
                        <li className="line-through text-gray-400">Access to SDKs and Tools</li>
                    </ul>
                    <button className="mx-auto px-6 py-2 bg-gray-100 hover:bg-gray-200 text-black rounded-full transition">Get Started</button>
                </div>

                {/* Developer Plan */}
                <div className="flex flex-col border rounded-lg p-6 space-y-4 bg-gray-50 h-full">
                    <div className="text-center text-2xl font-bold">Developer</div>
                    <div className="text-center text-lg">20,000 requests per month</div>
                    <ul className="list-disc pl-6 space-y-2 flex-grow">
                        <li>Enhanced API Access</li>
                        <li>Priority Email Support</li>
                        <li>Access to SDKs and Tools</li>
                        <li className="line-through text-gray-400">Dedicated Resources</li>
                    </ul>
                    <button className="mx-auto px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full transition">Buy Now</button>
                </div>

                {/* Professional Plan */}
                <div className="flex flex-col border rounded-lg p-6 space-y-4 bg-gray-100 h-full">
                    <div className="text-center text-2xl font-bold">Professional</div>
                    <div className="text-center text-lg">200,000 requests per month</div>
                    <ul className="list-disc pl-6 space-y-2 flex-grow">
                        <li>Premium API Access</li>
                        <li>24/7 Support</li>
                        <li>Dedicated Resources</li>
                    </ul>
                    <button className="mx-auto px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full transition">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default PricingPanel;
