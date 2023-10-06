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
      const docSnapshot = await db.collection('keys').doc(String('sk-')+String(userId)).get();
      const docGet = docSnapshot.data();
      const docSnapshotOverview = await db.collection('keys')
      .doc('sk-' + String(userId))
      .collection('stats')
      .orderBy('day', 'desc') 
      .get();
      const sortedData = docSnapshotOverview.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));


      return NextResponse.json({docGet,sortedData});
    } catch (error) {
     
      return new NextResponse("Internal Error", { status: 500 });
    }
  };
  