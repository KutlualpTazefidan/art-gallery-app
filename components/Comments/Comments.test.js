import { render, screen } from "@testing-library/react";
import Comments from "../Comments";

describe("Comments", () => {
  const comments = [
    { id: 1, text: "my comment1" },
    { id: 2, text: "my comment2" },
  ];

  it("displays each comment's text", () => {
    render(<Comments comments={comments} />);

    expect(screen.getByText("my comment1")).toBeInTheDocument();
    expect(screen.getByText("my comment2")).toBeInTheDocument();
  });
});
