import React from 'react'

type LogType = {
  id: number;
  message: string;
}

const mockData = {
  dailyUsage: 57,
  totalUsage: 1200,
  endpoint: "https://api.moder.ai/",
  secretKey: "**********XYZ123",
  logs: [
    { id: 1, message: "Log 1" },
    { id: 2, message: "Log 2" },
    { id: 3, message: "Log 3" },
    // ...
  ]
}

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      
      <div className="flex justify-between mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2 space-y-4">
          <h2 className="text-xl">API Endpoint</h2>
          <p>{mockData.endpoint}</p>
          <h2 className="text-xl">Secret Key</h2>
          <p>{mockData.secretKey} <span className="text-sm text-red-500">[You are the only responsible for this key!]</span></p>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl">Daily Usage</h2>
            <p>{mockData.dailyUsage}</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl">Total Usage</h2>
            <p>{mockData.totalUsage}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Logs</h2>
        <ul>
          {mockData.logs.map((log: LogType) => (
            <li key={log.id} className="border-b border-gray-200 py-2">{log.message}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard;
