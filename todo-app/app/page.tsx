export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Todo Application
      </h1>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Task Description"
          className="border p-2 rounded"
        />

        <input
          type="date"
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Topic"
          className="border p-2 rounded"
        />

        <select className="border p-2 rounded">
          <option>Todo</option>
          <option>In-Progress</option>
          <option>Complete</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </form>
    </main>
  );
}