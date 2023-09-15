"use client";
import React from 'react'
import {Bar} from '@/components/Chart';
import DashboardDetails from '@/components/DashboardDetails';
import Billing from '@/components/Billing';
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

const DashboardPanel = () => {
  return (
    <div className='bg-transparent'>
                     <TabGroup className="mt-6">
                    <TabList className='gap-x-10'>
                      <Tab>Overview </Tab>
                      <Tab>Detail</Tab>
                      <Tab>Billing</Tab>
                      <Tab>Settings</Tab>
                    </TabList>
                    <TabPanels className='bg-transparent'>
                      <TabPanel>
                        <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                            {/* Placeholder to set height */}
                            <div className="h-28 border-3">
                            <Card className="max-w-lg mx-auto" color="white">
                            <Flex alignItems="start">
                              <div>
                                <Text>Monthly usage</Text>
                                <Metric>120 699</Metric>
                              </div>
                              <BadgeDelta deltaType="moderateDecrease">13.2%</BadgeDelta>
                            </Flex>
                            <Flex className="mt-4">
                              <Text className="truncate">68% ($ 149,940)</Text>
                              <Text>$ 220,500</Text>
                            </Flex>
                            <ProgressBar value={15.9} className="mt-2" />
                            </Card>
                            </div>
                
                            <div className="h-28 border-3">
                            <Card className="max-w-lg mx-auto" color="white">
                            <Flex alignItems="start">
                              <div>
                                <Text>Number of request today</Text>
                                <Metric>12 699</Metric>
                              </div>
                              <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
                            </Flex>
                            <Flex className="mt-4">
                              <Text className="truncate">68% ($ 149,940)</Text>
                              <Text>$ 220,500</Text>
                            </Flex>
                            <ProgressBar value={15.9} className="mt-2" />
                            </Card>
                            </div>
                         
                            <div className="h-28 border-3">
                            <Card className="max-w-lg mx-auto" color="white">
                            <Flex alignItems="start">
                              <div>
                                <Text>Flagged content</Text>
                                <Metric> 129</Metric>
                              </div>
                              <BadgeDelta deltaType="moderateIncrease">3.2%</BadgeDelta>
                            </Flex>
                            <Flex className="mt-4">
                              <Text className="truncate">68% ($ 149,940)</Text>
                              <Text>220,500</Text>
                            </Flex>
                            <ProgressBar value={15.9} className="mt-2" />
                            </Card>
                            </div>
                        </Grid>
                        <br />
                        <div className="mt-6">
                          <Card>
                            <div className="h-80"> 
                            <Bar />
                            </div>
                          </Card>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <DashboardDetails />
                      </TabPanel>

                      <TabPanel>
                        <Billing />
                      </TabPanel>

                      <TabPanel>
                        <h1>Tab 3</h1>
                      </TabPanel>

                    </TabPanels>
                    
                  </TabGroup>
    </div>
  )
}

export default DashboardPanel;