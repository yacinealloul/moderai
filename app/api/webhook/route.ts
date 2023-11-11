import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

import * as admin from 'firebase-admin';
import * as serviceAccount from '../key.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
  });
}

let db = admin.firestore();


export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    )

    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    if (!session?.metadata?.tier){
      return new NextResponse('Tier is required',{status:400})
    }
    var id:number;
    id = Number(session?.metadata?.tier)
    var tier = ['project','business']
    const docRef =  db.collection('subscription').doc(session?.metadata?.userId)
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists){
      docRef.set({
        'sid':session?.metadata?.userId,
        'uid':session?.metadata?.userId,
        'tier': tier[id-1]
      })
    }
    else{
      docRef.set({'tier':tier[id-1]},{merge:true})

    }

 
  
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    )
    {/*
    await prismadb.userSubscription.update({
      where: {
        stripeSubscriptionId: subscription.id,
      },
      data: {
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000
        ),
      },
    })
  }
*/}
  }

  return new NextResponse(null, { status: 200 })
};