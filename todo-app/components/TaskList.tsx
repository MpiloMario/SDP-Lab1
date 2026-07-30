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
  return (
    <section className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="border rounded-lg p-4 shadow"
            >
              <h3 className="text-lg font-bold">
                {task.title}
              </h3>

              <p>{task.description}</p>

              <p>
                <strong>Topic:</strong> {task.topic}
              </p>

              <p>
                <strong>Status:</strong> {task.status}
              </p>

              <p>
                <strong>Due Date:</strong>{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}