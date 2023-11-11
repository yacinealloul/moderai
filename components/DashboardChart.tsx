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
    const [type,setType] = useState<string>('');
    const [overview,setOverview] = useState<any>({});
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('api/analytics/',{userId:uid['uid']['user']});
                setData(response.data);
                const responses = await axios.post('api/inference/',{userId:uid['uid']['user']})
                console.log(responses.data);
                setRemaining(responses.data.docGet.remainingRequests);
                setType(responses.data.docGet.tier);
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
    <div className="h-28">
        <Card className="max-w-lg mx-auto bg-white">
            <Flex alignItems="start" className="p-4">
                <div>
                    <Text className="font-semibold">Monthly Usage:</Text>
                    <Metric className="text-lg">{remaining}</Metric>
                </div>
     
            </Flex>
        </Card>
    </div>

    <div className="h-28">
        <Card className="max-w-lg mx-auto bg-white">
            <Flex alignItems="start" className="p-4">
                <div>
                    <Text className="font-semibold">Requests Today:</Text>
                    <Metric className="text-lg">{usageDaily}</Metric>
                </div>
            </Flex>
        </Card>
    </div>

    <div className="h-28">
        <Card className="max-w-lg mx-auto bg-white">
            <Flex alignItems="start" className="p-4">
                <div>
                    <Text className="font-semibold">Flagged Content:</Text>
                    <Metric className="text-lg">{flaggedDaily}</Metric>
                </div>
                <div className="mt-2">
                    <Text className="text-sm">{Number(flaggedDaily / usageDaily * 100).toFixed(2)}%</Text>
                </div>
            </Flex>
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
