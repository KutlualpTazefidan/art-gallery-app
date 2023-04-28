import { render, screen } from "@testing-library/react";
import CommentForm from "../CommentForm";
import userEvent from "@testing-library/user-event";

describe("CommentForm", () => {
  it("returns a new comment on submit", async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();

    render(<CommentForm onSubmitComment={handleSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Send" });

    await user.type(input, "my new comment! :)");

    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({ text: "my new comment! :)" });
  });
});
