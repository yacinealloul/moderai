import React from 'react'
import { useState } from 'react'

const Playground = () => {
        const [response,setResponse] = useState('');
        const [input,setInput] = useState('');
    
        return (
            <>
            <section className="py-20">
                <div className="container mx-auto px-4 flex">
                <div className="w-1/2 pr-8">
                    <h2 className="text-5xl font-extrabold mb-6">Playground</h2>
                    <textarea className="w-full p-4 rounded-lg bg-white shadow-lg transition-all duration-500 hover:shadow-xl resize-none" rows={9} value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className="mt-4 p-3 rounded-lg text-white bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-500 w-full">
                    Test
                    </button>
                </div>
                <div className="w-1/2 pl-8">
                    <h2 className="text-5xl font-extrabold mb-6">Response</h2>
                    <div className="p-4 rounded-lg bg-blue-50 text-gray-900 h-full border-l-4 border-blue-900">
                    <code>
                        {response || `{
            "response": "Your JSON will appear here."
            }`}
                    </code>
                    </div>
                </div>
                </div>
            </section>
            </>

            );
}

export default Playground