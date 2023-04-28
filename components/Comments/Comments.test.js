import { render, screen } from "@testing-library/react";
import Comments from "../Comments";

describe("Comments", () => {
  const comments = [
    { id: 1, text: "my comment1", createdAt: new Date("2023-04-28T10:15:00Z") },
    { id: 2, text: "my comment2", createdAt: new Date("2023-01-01T08:05:00Z") },
  ];

  it("displays each comment's text", () => {
    render(<Comments comments={comments} />);

    expect(screen.getByText("my comment1")).toBeInTheDocument();
    expect(screen.getByText("my comment2")).toBeInTheDocument();
  });

  it("displays each comment's date and time", () => {
    render(<Comments comments={comments} />);

    expect(screen.getByText("Fri Apr 28 2023 12:15")).toBeInTheDocument();
    expect(screen.getByText("Sun Jan 01 2023 09:05")).toBeInTheDocument();
  });
});
