"use client";
import React from 'react'
import {Bar} from '@/components/Chart';
import DashboardChart from './DashboardChart';
import DashboardDetails from './DashboardDetails';
import Billing from './Billing';
import Settings from './Settings';
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


const DashboardPanel = (user:any) => {
  return (
    <div >
                     <TabGroup className="mt-7">
                     <TabList className='flex justify-center text-lg space-x-2 md:space-x-5'>
  <Tab className='px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-xl'>Overview</Tab>
  <Tab className='px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-lg'>Details</Tab>
  <Tab className='px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-lg'>Settings</Tab>
</TabList>

<br /> 

                    <TabPanels className='bg-transparent'>
                      <TabPanel>
<DashboardChart uid={user} />
                      </TabPanel>
           

                      <TabPanel>
                        <DashboardDetails uid={user}/>
                      </TabPanel>
                   

                      <TabPanel>
                        <Settings uid={user} />
                      </TabPanel>

                    </TabPanels>
                    
                  </TabGroup>
    </div>
  )
}

export default DashboardPanel;