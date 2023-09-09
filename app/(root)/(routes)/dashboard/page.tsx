"use client";
import React from 'react';
import { BarChart } from '@mui/x-charts';

const mockData = {
  totalUsage: 1200,
  endpoint: "https://api.moder.ai/",
  secretKey: "**********XYZ123",
};

const Dashboard: React.FC = () => {
  return (
    <div className="p-10 bg-gray-200 min-h-screen font-sans text-gray-900">
      <h1 className="text-5xl mb-12 font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-3xl font-semibold tracking-tighter">API Information</h2>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">Endpoint</h3>
            <p className="text-gray-600 text-lg">{mockData.endpoint}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-medium">Secret Key</h3>
            <p className="text-gray-600 text-lg">{mockData.secretKey} <span className="text-sm text-red-500">[Handle with care]</span></p>
          </div>
        </div>
  
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold tracking-tighter mb-6">Usage</h2>
          <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['06/09', '07/09', '08/09'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: [200, 500, 300],
                },
              ]}
              width={300}
              height={300}
          />
        </div>
      </div>
      
      <div className="bg-white p-8 mt-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold tracking-tighter mb-6">Total Usage</h2>
        <p className="text-xl text-gray-600">{mockData.totalUsage} requests</p>
      </div>
    </div>
  )
}

export default Dashboard;
