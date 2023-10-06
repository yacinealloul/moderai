import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
      const body = await req.json();
      const research = await axios.post('',body);


      return NextResponse.json(research.data);
    } catch (error) {
     
      return new NextResponse("Internal Error", { status: 500 });
    }
  };
  