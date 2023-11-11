import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    BadgeDelta,
    Flex,
    Metric,
    ProgressBar
} from "@tremor/react";
import { Bar } from '@/components/Chart';
import { useAuth } from '@clerk/nextjs';
interface DashboardChartProps {
    uid: string; // or number, depending on what `user?.userId` is
  }
const DashboardChart: React.FC<DashboardChartProps> = (uid:any) => {
    const [data, setData] = useState<any>(null);
    const [remaining,setRemaining] = useState<number>(0);
    const [usageDaily , setUsageDaily] = useState<any>(0);
    const [flaggedDaily , setFlaggedDaily] = useState<any>(0);
    const [overview,setOverview] = useState<any>({});
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('api/analytics/',{userId:uid['uid']['user']});
                setData(response.data);
                const responses = await axios.post('api/inference/',{userId:uid['uid']['user']})
                console.log(responses.data);
                setRemaining(responses.data.docGet.remainingRequests);
                
                setUsageDaily(responses.data.sortedData[0].requests);
                console.log(usageDaily);
                setFlaggedDaily(responses.data.sortedData[0].flagged || 0);
                setOverview(responses.data.sortedData);
            } catch (error) {
                console.error('Failed to fetch analytics data', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading... {/*uid['uid']['user']*/}</div>;
    }

    return (
        <div>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <div className="h-28 border-3">
                    <Card className="max-w-lg mx-auto" color="white">
                        <Flex alignItems="start">
                            <div>
                                <Text>Monthly usage</Text>
                                <Metric>{100-remaining}</Metric>
                            </div>
                            {/*<BadgeDelta deltaType="moderateDecrease">13.2%</BadgeDelta> */}
                        </Flex>
                        <Flex className="mt-4">
                            <Text className="truncate">{(Number(1-Number((remaining)/100))*100).toFixed(2)}%</Text>
                            <Text>{100}</Text>
                        </Flex>
                        <ProgressBar value={100-remaining} className="mt-2" />
                    </Card>
                </div>

                <div className="h-28 border-3">
                    <Card className="contmax-w-lg mx-auto" color="white">
                        <Flex alignItems="start">
                            <div>
                                <Text>Number of request today</Text>
                                <Metric>{usageDaily}</Metric>
                            </div>
                            {/*<BadgeDelta deltaType="moderateDecrease">13.2%</BadgeDelta> */}
                            </Flex>
                        <Flex className="mt-4">
                            <Text className="truncate invisible">3</Text>
                            <Text className='invisible'>S</Text>
                            
                        </Flex>
                        <ProgressBar value={0} className="mt-2 invisible" /> 
                        </Card>
                </div>

                {/* Flagged Content Card */}
                <div className="h-28 border-3">
                    <Card className="max-w-lg mx-auto" color="white">
                        <Flex alignItems="start">
                            <div>
                                <Text>Flagged content</Text>
                                <Metric>{flaggedDaily}</Metric>
                            </div>
                            {/*<BadgeDelta deltaType="moderateDecrease">13.2%</BadgeDelta> */}
                            </Flex>
                        <Flex className="mt-4">
                            <Text className="truncate">{Number(flaggedDaily/(100-remaining)*100).toFixed(2)}%</Text>
                        </Flex>
                        <ProgressBar value={Number(flaggedDaily/(100-remaining)*100)} className="mt-2" color='red' /> 
                        </Card>
                </div>
            </Grid>
            <br />
            <div className="mt-6">
                <Card>
                    <div className="h-80">
                        <Bar overview={overview}/>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default DashboardChart;
