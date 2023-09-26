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
  // localStorage.setItem('email',String(user?.emailAddresses));
  // localStorage.setItem('name',String(user?.firstName));
  // localStorage.setItem('prenom',String(user?.lastName));

  return (
          <>
              <main className="p-10">
                <div className='extra-bold'>
                  <Metric>Hello {user?.firstName}✨</Metric>
                  </div>
                  <DashboardPanel />
              </main>

          </>
  )
}

export default Dashboard;