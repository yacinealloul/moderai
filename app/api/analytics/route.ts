import { NextResponse } from "next/server";
import axios from "axios";
import * as admin from 'firebase-admin';
import * as serviceAccount from '../key.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
  });
}

let db = admin.firestore();


export async function POST(req: Request) {
    try {
      const {userId} = await req.json();
      // We need to know if the user has took a subscription 
      const docSnapshotMember = await db.collection('subscriptions').doc(userId).get();
       {/*await db.collection('keys').doc(String('sk-'+String(userId))).set({
        remainingRequests:100,
        lastReset: new Date(),
      }) */}     
      if (!docSnapshotMember.exists){
        await db.collection('subscriptions').doc(userId).set({
          'sid': userId,
          'type': 'user',
          'uid': userId
        })
        await db.collection('keys').doc(String('sk-'+String(userId))).set({
          remainingRequests:100,
          lastReset: new Date(),
        })

      }
      const docSnapshotHotMember = await db.collection('subscriptions').doc(userId).get();
      const docGet = docSnapshotHotMember.data();


      return NextResponse.json(docGet);
    } catch (error) {
     
      return new NextResponse("Internal Error", { status: 500 });
    }
  };
  