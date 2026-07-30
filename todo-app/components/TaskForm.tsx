"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Todo");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        topic,
        dueDate,
        status,
      }),
    });

    setTitle("");
    setDescription("");
    setTopic("");
    setDueDate("");
    setStatus("Todo");


    const router = useRouter();

    // after successful POST
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 rounded"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 rounded"
        required
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Topic"
        className="border p-2 rounded"
        required
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="Todo">Todo</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Complete">Complete</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
}