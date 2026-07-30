import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();
  const { id } = await params;

  const task = await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      title: body.title,
      description: body.description,
      topic: body.topic,
      dueDate: new Date(body.dueDate),
      status: body.status,
    },
  });

  return NextResponse.json(task);
}