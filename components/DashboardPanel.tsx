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
    <div className='bg-transparent'>
                     <TabGroup className="mt-6">
                    <TabList className='gap-x-10'>
                      <Tab>Overview </Tab>
                      <Tab>Details</Tab>
                      <Tab>Billing</Tab>
                      <Tab className='right-3'>Settings</Tab>
                    </TabList>
                    <TabPanels className='bg-transparent'>
                      <TabPanel>
<DashboardChart uid={user} />
                      </TabPanel>
           

                      <TabPanel>
                        <DashboardDetails uid={user}/>
                      </TabPanel>
                      <TabPanel>
                        <Billing />
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