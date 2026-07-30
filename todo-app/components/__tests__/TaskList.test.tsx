import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      refresh: jest.fn(),
    };
  },
}));

describe("TaskList", () => {
  it("renders task title", () => {
    const tasks = [
      {
        id: 1,
        title: "COMS Lab",
        description: "Finish lab",
        topic: "COMS",
        dueDate: "2026-08-01",
        status: "Todo",
      },
    ];

    render(<TaskList tasks={tasks} />);

    expect(
      screen.getByText("COMS Lab")
    ).toBeInTheDocument();
  });
  it("shows overdue badge for overdue tasks", () => {
  const tasks = [
    {
      id: 1,
      title: "Overdue Task",
      description: "Test",
      topic: "COMS",
      dueDate: "2024-01-01",
      status: "Todo",
    },
  ];

  render(<TaskList tasks={tasks} />);

  expect(
    screen.getByText("⚠ Overdue")
  ).toBeInTheDocument();
});
it("renders edit and archive buttons", () => {
  const tasks = [
    {
      id: 1,
      title: "Task",
      description: "Test",
      topic: "COMS",
      dueDate: "2026-08-01",
      status: "Todo",
    },
  ];

  render(<TaskList tasks={tasks} />);

  expect(
    screen.getByRole("button", { name: /edit/i })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /archive/i })
  ).toBeInTheDocument();
});
});