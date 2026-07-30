import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      refresh: jest.fn(),
    };
  },
}));

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