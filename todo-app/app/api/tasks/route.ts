import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      topic: body.topic,
      dueDate: new Date(body.dueDate),
      status: body.status,
    },
  });

  return NextResponse.json(task, { status: 201 });
}