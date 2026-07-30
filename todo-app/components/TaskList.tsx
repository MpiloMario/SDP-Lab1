"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Task = {
  id: number;
  title: string;
  description: string;
  topic: string;
  dueDate: string;
  status: string;
};

export default function TaskList({
  tasks,
}: {
  tasks: Task[];
}) {
    const router = useRouter();

    const [editingTask, setEditingTask] = useState<number | null>(null);
    const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "",
    dueDate: "",
    status: "Todo",
    });
  return (
    <section className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="space-y-4">
         {tasks.map((task) => {
            const isOverdue =
                task.status !== "Complete" &&
                new Date(task.dueDate) < new Date();

            return (
            <div
              key={task.id}
              className={`border rounded-lg p-4 shadow ${
                isOverdue
                    ? "border-red-500 bg-red-50"
                    : ""
                }`}
            >
              <h3 className="text-lg font-bold">
                {task.title}
              </h3>
                {isOverdue && (
                    <p className="text-red-600 font-bold">
                        ⚠ Overdue
                    </p>
                    )}
              <p>{task.description}</p>

              <p>
                <strong>Topic:</strong> {task.topic}
              </p>

              <p>
                <strong>Status:</strong> {task.status}
              </p>

              <p>
                <strong>Due Date:</strong>{" "}
                  {new Date(task.dueDate).toISOString().split("T")[0]}
              </p>
              <button
                    onClick={() => {
                        setEditingTask(task.id);

                        setFormData({
                        title: task.title,
                        description: task.description,
                        topic: task.topic,
                        dueDate: new Date(task.dueDate).toISOString().split("T")[0],
                        status: task.status,
                        });
                    }}
                    className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                    Edit
                </button>
                <button
                onClick={async () => {
                    await fetch(`/api/tasks/${task.id}/archive`, {
                    method: "PATCH",
                    });

                    router.refresh();
                }}
                className="mt-3 ml-2 bg-red-500 text-white px-4 py-2 rounded"
                >
                Archive
                </button>
                {editingTask === task.id && (
                    <div className="mt-4 space-y-2">
                        <input
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            title: e.target.value,
                            })
                        }
                        className="border p-2 w-full rounded"
                        />

                        <textarea
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            description: e.target.value,
                            })
                        }
                        className="border p-2 w-full rounded"
                        />

                        <input
                        type="date"
                        value={formData.dueDate}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            dueDate: e.target.value,
                            })
                        }
                        className="border p-2 w-full rounded"
                        />

                        <input
                        value={formData.topic}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            topic: e.target.value,
                            })
                        }
                        className="border p-2 w-full rounded"
                        />

                        <select
                        value={formData.status}
                        onChange={(e) =>
                            setFormData({
                            ...formData,
                            status: e.target.value,
                            })
                        }
                        className="border p-2 w-full rounded"
                        >
                        <option value="Todo">Todo</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Complete">Complete</option>
                        </select>

                        <button
                        onClick={async () => {
                            await fetch(`/api/tasks/${task.id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                            });

                            setEditingTask(null);
                            router.refresh();
                        }}
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        >
                        Save Changes
                        </button>
                    </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}