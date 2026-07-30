import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const tasks = await prisma.task.findMany({
    where: {
      archived: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Todo Application
      </h1>

      <TaskForm />

      <TaskList tasks={tasks} />
    </main>
  );
}