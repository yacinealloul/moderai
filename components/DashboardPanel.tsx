"use client";
import React from 'react'
import {Bar} from '@/components/Chart';
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
                            <Card className="max-w-lg mx-auto">
                            <Flex alignItems="start">
                              <div>
                                <Text>Sales</Text>
                                <Metric>$ 12,699</Metric>
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
                
                            {/* Placeholder to set height */}
                            <div className="h-28 border-3">
                            <Card className="max-w-lg mx-auto">
                            <Flex alignItems="start">
                              <div>
                                <Text>Sales</Text>
                                <Metric>$ 12,699</Metric>
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
                         
                            {/* Placeholder to set height */}
                            <div className="h-28 border-3">
                            <Card className="max-w-lg mx-auto" >
                            <Flex alignItems="start">
                              <div>
                                <Text>Sales</Text>
                                <Metric>$ 12,699</Metric>
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
                        <h1>Tab 1</h1>
                      </TabPanel>

                      <TabPanel>
                        <h1>Tab 2</h1>
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