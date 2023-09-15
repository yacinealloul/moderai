"use client";
import React from 'react'
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


  const data = [
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

const DashboardDetails = () => {
  return (
    <div>
    <Card>
    <Title>Detailled request for today</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Prompt</TableHeaderCell>
          <TableHeaderCell>Time</TableHeaderCell>
          <TableHeaderCell>Flagged</TableHeaderCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.timestamp}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.flagged}</Text>
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