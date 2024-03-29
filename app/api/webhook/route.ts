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
      'whsec_HXhtkGxyaLPahHWKkEXqaJKmfv7wQKOq',
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

    const type:string = session?.metadata?.tier;
    const apiKeyUser = 'sk-' + session?.metadata?.userId;
    const docKey  = db.collection('keys').doc(apiKeyUser);
    const snapshotDocKey = await docKey.get();
    if (!snapshotDocKey.exists){
      return new NextResponse('The account is not recognized contact the owner');
    }
    if (type === '1'){
      await docKey.set({'remainingRequests':20000},{merge:true});

    }
    else{
      await docKey.set({'remainingRequests': 200000},{merge:true});

    }


    // Update the subscription collection:

    const docSubscriptionRef = db.collection('subscription').doc(apiKeyUser);
    const snapshotDocSubscription = await docSubscriptionRef.get();


  
// TO DO: Update the subscription collection.
 
  
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

  return new NextResponse('Completed'+  session?.metadata?.tier, { status: 200 })
};