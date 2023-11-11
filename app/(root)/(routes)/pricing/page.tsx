// pages/pricing.tsx
"use client";
import React from 'react';
import PricingPanel from '@/components/PricingPanel';
import { useAuth } from '@clerk/nextjs';


const Pricing =  () => {  
    const {userId} = useAuth();
    const logged = userId ? (true) : (false);
   
    return (
        <PricingPanel logged={logged}></PricingPanel>
    );
}

export default Pricing;
