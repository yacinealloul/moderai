import React from 'react'
import { Bar } from '@/components/Chart';
import DashboardPanel from "@/components/DashboardPanel";
import { useState } from 'react';
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  BadgeDelta,  Flex, Metric, ProgressBar
} from "@tremor/react";

import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';



const Dashboard: React.FC = async () => {  

  const user = await currentUser();

  return (
          <>
              <main className="p-10">
                  <h2 className='bold'>Hello {user?.firstName}</h2>
                  <DashboardPanel />
              </main>

          </>
  )
}

export default Dashboard;