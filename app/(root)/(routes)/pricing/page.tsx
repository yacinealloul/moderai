// pages/pricing.tsx
import React from 'react';

interface PricingPlanProps {
    title: string;
    price: string;
    requests: string;
    custom?: boolean;
}



const Pricing: React.FC = () => {
    return (
            <div className="min-h-screen bg-gray-100 text-gray-900 antialiased py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl font-extrabold leading-tight mb-10 text-center">Our Pricing</h1>
        
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <h2 className="text-4xl font-extrabold text-center mb-6">Project Plan</h2>
                            <p className="text-center text-xl mb-6 opacity-80">$20/mois</p>
                            <p className="text-center text-gray-600 mb-8">20,000 requests/month</p>
                            <a href="/signup" className="block w-full text-center py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">Choose Plan</a>
                        </div>
        
                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <h2 className="text-4xl font-extrabold text-center mb-6">Business Plan</h2>
                            <p className="text-center text-xl mb-6 opacity-80">$180/mois</p>
                            <p className="text-center text-gray-600 mb-8">200,000 requests/month</p>
                            <a href="/signup" className="block w-full text-center py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">Choose Plan</a>
                        </div>
        
                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <h2 className="text-4xl font-extrabold text-center mb-6">Custom Plan</h2>
                            <p className="text-center text-xl mb-6 opacity-80">Let's Talk</p>
                            <p className="text-center text-gray-600 mb-8">Custom requests volume</p>
                            <a href="/contact" className="block w-full text-center py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">Contact Us</a>
                        </div>
                    </div>
        
                    <p className="text-center mt-12 text-gray-600">All plans come with 24/7 support, and a 30-day money back guarantee.</p>
                </div>
            </div>
        
        
    );
}

export default Pricing;
