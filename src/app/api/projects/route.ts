import { getServerSession } from "next-auth/next"; // Import getServerSession
import { authOptions } from "@/lib/authOptions"; // Import aapka object

import Project from "@/models/Project";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/connectDB";

// FIX: Caching ko rokein
export const dynamic = "force-dynamic";

// POST: Naya project save karein
export async function POST(request: NextRequest) {
  await connectDB();
  try {
    // FIX: Session get karne ka sahi tareeka
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const user = session.user as { id: string; name?: string; email?: string; image?: string };
    const userId = user.id;


    const body = await request.json();

    const project = await Project.create({
      ...body,
      user: userId,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("API POST Error:", error);
    return NextResponse.json(
      { message: "Error creating project", error },
      { status: 500 }
    );
  }
}

// GET: Sirf logged-in user ke projects laayein
export async function GET() {
  await connectDB();
  try {
    // FIX: Session get karne ka sahi tareeka
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const user = session.user as { id: string; name?: string; email?: string; image?: string };
    const userId = user.id;


    const projects = await Project.find({ user: userId }).sort({
      updatedAt: -1,
    });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("API GET Error:", error);
    return NextResponse.json(
      { message: "Error fetching projects", error },
      { status: 500 }
    );
  }
}
