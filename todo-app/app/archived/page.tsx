import TaskList from "@/components/TaskList";
import { prisma } from "@/lib/prisma";

export default async function ArchivedPage() {
  const tasks = await prisma.task.findMany({
    where: {
      archived: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Archived Tasks
      </h1>

      <TaskList tasks={tasks} />
    </main>
  );
}