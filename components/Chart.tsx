import { Card, Title, BarChart } from "@tremor/react";
import React from "react";

const chartdata3 = [
  {
    date: "May 23",
    "2022": 55,
    "2023": 58,
  },
  {
    date: "Jun 23",
    "2022": 67,
    "2023": 62,
  },
  {
    date: "Jul 23",
    "2022": 60,
    "2023": 54,
  },
  {
    date: "Aug 23",
    "2022": 72,
    "2023": 49,
  },
  {
    date: "Sep 23",
    "2022": 65,
    "2023": 52,
  },
  {
    date: "Oct 23",
    "2022": 68,
    "2023": null,
  },
  {
    date: "Nov 23",
    "2022": 74,
    "2023": null,
  },
  {
    date: "Dec 23",
    "2022": 71,
    "2023": null,
  },
];


const secondsToDate = (seconds:any) => {
  return new Date(seconds * 1000);  // JavaScript Date constructor expects milliseconds
};

// Convert date to a readable string (e.g., "May 23")
const formatDate = (date:any) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[date.getMonth()]} ${date.getDate()}`;
};


export const Bar = ({overview}:any) => {
  
  const safeOverview = Array.isArray(overview) ? overview : [];

  const readableOverview = [...safeOverview].reverse().map((item: any) => {
    const dateObj = secondsToDate(item.day._seconds);
    return {
      ...item,
      readableDate: formatDate(dateObj)
    };
  });
  
  //console.log(readableOverview);
  return (
    <>
        <Title>Overview Requests</Title>
        <BarChart
          className="mt-6"
          data={readableOverview}
          index="readableDate"
          categories={["requests"]}
          colors={["blue"]}
          yAxisWidth={30}
        />
    </>
  );
};