// pages/index.tsx
"use client";
import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation'

import Hero from "@/components/Hero";
import Playground from '@/components/Playground';
import Features from '@/components/Features';
import Ressources from '@/components/Ressources';
import Footer from '@/components/Footer';



export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const {userId} = useAuth();


  const handleTest = () => {
    setResponse(`Your simulated response based on: ${input}`);
  };
  if (userId){
    return redirect('/dashboard');

  }
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 antialiased">
      
      <Hero />
      <Playground />
      <Features />
      <Ressources /> 
      <Footer />
    
    </div>
    );
    
    

}
