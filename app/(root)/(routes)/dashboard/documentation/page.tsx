"use client";
import { useState } from 'react';

interface Endpoint {
  name: string;
  method: string;
  description: string;
  curlExample: string;
  pythonExample: string;
  nodeExample: string;
}

const endpoints: Endpoint[] = [
  {
    name: "/check",
    method: "POST",
    description: "This endpoint checks the moderation status of a message.",
    curlExample: "curl -X POST https://us-central1-moderai-c1f42.cloudfunctions.net/api/check -H 'Authorization: Bearer YOUR_KEY' -d '{\"message\":\"test\"}'",
    pythonExample: `
import requests

url = 'https://us-central1-moderai-c1f42.cloudfunctions.net/api/check'
headers = {
    'Authorization': 'Bearer YOUR_KEY'
}
data = {
    'message': 'test'
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
    `,
    nodeExample: `
const axios = require('axios');

const url = 'https://us-central1-moderai-c1f42.cloudfunctions.net/api/check';
const headers = {
    'Authorization': 'Bearer YOUR_KEY'
};
const data = {
    message: 'test'
};

axios.post(url, data, { headers: headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    `
  },
  // Ajoutez d'autres endpoints ici
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
            
            <h3 className="text-xl mb-2">cURL Example:</h3>
            <pre className="bg-gray-800 p-4 rounded text-white mb-4">
              {selectedEndpoint.curlExample}
            </pre>
            
            <h3 className="text-xl mb-2">Python Example:</h3>
            <pre className="bg-gray-800 p-4 rounded text-white mb-4">
              {selectedEndpoint.pythonExample}
            </pre>

            <h3 className="text-xl mb-2">Node.js Example:</h3>
            <pre className="bg-gray-800 p-4 rounded text-white">
              {selectedEndpoint.nodeExample}
            </pre>
          </>
        )}
      </div>

    </div>
  )
}

export default Documentation;
