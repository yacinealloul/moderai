"use client";
import { Title, Table, TableRow, TableCell, TableHead, TableHeaderCell, TableBody } from "@tremor/react";
import { useState, useEffect } from "react";
// TO DO

type Transaction = {
  date: string;
  plan: string;
  amount: number;
  totalRequest: number;
  success: boolean;
};



const mockTransactions: Transaction[] = [
  { date: "2023-01-01", plan: "Basic", amount: 9.99 ,totalRequest:13000,success : true},
  { date: "2023-02-01", plan: "Pro", amount: 19.99,totalRequest:1300000,success:true },
  //... Add more transactions as needed
];

export default function Billing() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // In a real-world scenario, you'd fetch transactions related to the user from an API
    setTransactions(mockTransactions);
  }, []);

  return (
    <div>


      <div className="mb-6">
        <Title>Transaction History</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Plan</TableHeaderCell>
              <TableHeaderCell>Total request</TableHeaderCell>

              <TableHeaderCell className="text-right">Amount ($)</TableHeaderCell>
              <TableHeaderCell className="text-right">Status</TableHeaderCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.date}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.plan}</TableCell>
                <TableCell>{transaction.totalRequest}</TableCell>

                <TableCell className="text-right">${transaction.amount}</TableCell>
                <TableCell className="text-right">{transaction.success && ("✅") }</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
