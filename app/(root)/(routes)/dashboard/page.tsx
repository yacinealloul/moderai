"use client";
import React from 'react'
import { Bar } from '@/components/bar';
import { useState } from 'react';


type LogType = {
  id: number;
  message: string;
}

const chartdata = [
  {
    year: 1970,
    "Export Growth Rate": 2.04,
    "Import Growth Rate": 1.53,
  },
  {
    year: 1971,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.58,
  },
  {
    year: 1972,
    "Export Growth Rate": 1.96,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1973,
    "Export Growth Rate": 1.93,
    "Import Growth Rate": 1.61,
  },
  {
    year: 1974,
    "Export Growth Rate": 1.88,
    "Import Growth Rate": 1.67,
  },
  //...
];

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}%`;


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
  const [showSecretKey, setShowSecretKey] = useState(false);
  const toggleSecretKey = () => setShowSecretKey(!showSecretKey);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl mb-8 font-semibold">Dashboard</h1>

      <div className="grid grid-cols-12 gap-8 mb-8">
        {/* API & Secret Key Information */}
        <div className="col-span-8 bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-medium">API Endpoint</h2>
            <p className="text-sm text-gray-700">{mockData.endpoint}</p>
          </div>
          <div className="space-y-3 mt-4">
            <h2 className="text-xl font-medium">Secret Key</h2>
            <p className="text-sm text-gray-700 cursor-pointer" onClick={toggleSecretKey}>
              {showSecretKey ? mockData.secretKey : mockData.secretKey.substring(0, 8) + "********"}
            </p>
            <span className="text-xs text-red-500">Click to reveal/hide. Keep this key confidential.</span>
          </div>
        </div>

        {/* Usage Information */}
        <div className="col-span-4 space-y-6">
          {/* Daily Usage */}
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium">Daily Usage</h2>
            <p className="text-lg">{mockData.dailyUsage}</p>
          </div>
          {/* Total Monthly Usage */}
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium">Total of the Month</h2>
            <p className="text-lg">{mockData.totalUsage}</p>
          </div>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Bar />
      </div>
    </div>
  )
}

export default Dashboard;