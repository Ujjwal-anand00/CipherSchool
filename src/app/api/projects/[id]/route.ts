import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

import Project from "@/models/Project";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/config/connectDB";


export const dynamic = "force-dynamic";


export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  try {
    
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { id } = await context.params; 
    const userId = session.user.id;

    
    const project = await Project.findOne({ _id: id, user: userId });
    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("API GET [id] Error:", error);
    return NextResponse.json(
      { message: "Error fetching project", error },
      { status: 500 }
    );
  }
}


export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const userId = session.user.id;
    const { id } = params;
    const body = await request.json();

    
    const updatedProject = await Project.findOneAndUpdate(
      { _id: id, user: userId },
      body,
      { new: true } 
    );

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    console.error("API PUT [id] Error:", error);
    return NextResponse.json(
      { message: "Error updating project", error },
      { status: 500 }
    );
  }
}


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const userId = session.user.id;
    const { id } = params;

   
    const deletedProject = await Project.findOneAndDelete({
      _id: id,
      user: userId,
    });

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Project deleted" }, { status: 200 });
  } catch (error) {
    console.error("API DELETE [id] Error:", error);
    return NextResponse.json(
      { message: "Error deleting project", error },
      { status: 500 }
    );
  }
}
