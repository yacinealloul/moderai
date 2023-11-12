// pages/pricing.tsx
"use client";
import React from 'react';
import PricingPanel from '@/components/PricingPanel';
import { useAuth } from '@clerk/nextjs';


const Pricing =  () => {  
    const {userId} = useAuth();
    //console.log(userId);
    var logged;
    if (userId){
        logged = true;
    }
    else{
        logged = false;
    }
    //console.log(logged);
    return (
        <PricingPanel logged={logged}></PricingPanel>
    );
}

export default Pricing;
