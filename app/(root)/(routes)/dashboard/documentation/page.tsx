"use client";
import { useState } from 'react';

interface Endpoint {
  name: string;
  method: string;
  description: string;
  pythonExample: string;
}

const endpoints: Endpoint[] = [
  {
    name: "/check",
    method: "POST",
    description: "This endpoint checks the moderation status of a message.",
    pythonExample: `
    import requests, json

    api_url = "https://us-central1-moderai-c1f42.cloudfunctions.net/api/check"
    
    
    message = input("Message: ")
    response = requests.post(api_url, data=json.dumps({
            "input": message,
            "filters": ["*"]
    }), 
    headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer [APIKEY]"
        })
    print(response.text)
    `,

  // Add other endpoints here
}
];


const Documentation: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint | null>(endpoints[0]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex">

      {/* Endpoints List */}
      <div className="w-1/3 bg-white rounded-lg shadow-md p-6 mr-4">
        <h2 className="text-2xl mb-6">Endpoints</h2>
        <ul>
          {endpoints.map((endpoint, index) => (
            <li key={index} 
                className={`cursor-pointer py-2 px-4 rounded mb-2 ${selectedEndpoint === endpoint ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
                onClick={() => setSelectedEndpoint(endpoint)}>
              <span className="font-bold text-blue-600">{endpoint.method}</span> {endpoint.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Endpoint Details */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-6">
        {selectedEndpoint && (
          <>
            <h2 className="text-2xl mb-6">{selectedEndpoint.method} {selectedEndpoint.name}</h2>
            <p className="text-gray-600 mb-4">{selectedEndpoint.description}</p>
              
            
            <h3 className="text-xl mb-2">Python Example:</h3>
            <pre className="bg-gray-800 p-4 rounded text-white mb-4">
              {selectedEndpoint.pythonExample}
            </pre>


          </>
        )}
      </div>

    </div>
  )
}

export default Documentation;
