"use client";
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
  } from "@tremor/react";


{/*  const data = [
    {
      name: "Pas mal les bzez",
      timestamp: "1:53PM 14/09/2023",
      flagged: "active",
    },
    {
        name: "Nique ta mere",
        timestamp: "2:33PM 14/09/2023",
        flagged: "active",
      },
      {
        name: "Bled bled bled",
        timestamp: "2:30PM 14/09/2023",
        flagged: "no active",
      },
      {
        name: "Pas mal les bzez",
        timestamp: "2:22PM 14/09/2023",
        flagged: "active",
      },

  ];

*/}
const DashboardDetails = (user:any) => {
  const [data,setData] = useState([{}])

  const secondToDate = (number:any) => {
    console.log(number);
    const a = new Date((number?.day?._seconds*1000 + number?.day?._nanoseconds * 1000) || 0)
    return a.toUTCString();
  }

  useEffect(() => {
    const fetchData = async () => {
        try {

            const responses = await axios.post('api/inference/',{userId:user['uid']['user']})
            console.log(responses.data);
            setData(responses.data.sortedData);
        } catch (error) {
            console.error('Failed to fetch analytics data', error);
        }
    };

    fetchData();
}, []);
  return (
    <div>
    <Card>
    <Title>Details of your requests</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Day</TableHeaderCell>
          <TableHeaderCell>Number of requests</TableHeaderCell>
          <TableHeaderCell>Number of flags</TableHeaderCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item:any) => (
          
          <TableRow key={item?.id}>
            <TableCell>{secondToDate(item)} </TableCell>
            <TableCell>
              <Text>{item?.requests}</Text>
            </TableCell>
            <TableCell>
              <Text>{0}</Text>
            </TableCell>
            <TableCell>
    
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
    </div>
  )
}

export default DashboardDetails