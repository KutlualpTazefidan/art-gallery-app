import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import ArtPieceDetails from ".";

const title = "My Title";
const artist = "Jane Doe";
const image = "http://example.com/image.jpg";
const year = 1910;
const genre = "pop art";
const colors = ["#bccbd5", "#13517b", "#80acc5", "#78a2c4", "#081931"];
const slug = "my-slug";

test("image is displayed", () => {
  render(<ArtPieceDetails image={image} />);

  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("title is displayed", () => {
  render(<ArtPieceDetails title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test("artist is displayed", () => {
  render(<ArtPieceDetails artist={artist} />);

  expect(screen.getByText(artist)).toBeInTheDocument();
});

test("year is displayed", () => {
  render(<ArtPieceDetails year={year} />);

  expect(screen.getByText(year)).toBeInTheDocument();
});

test("genre is displayed", () => {
  render(<ArtPieceDetails genre={genre} />);

  expect(screen.getByText(genre)).toBeInTheDocument();
});

test("back-button is displayed", () => {
  render(<ArtPieceDetails />);

  expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument();
});

test("favorite-button is displayed", () => {
  render(<ArtPieceDetails />);

  expect(screen.getByLabelText("favorite-button")).toBeInTheDocument();
});

test("Colors are passed to the ArtPieceDetails", () => {
  render(<ArtPieceDetails colors={colors} />);

  const coloredCircles = screen.getAllByLabelText(
    "Colored circle for the color palette"
  );
  coloredCircles.map((circle, i) =>
    expect(circle.getAttribute("color")).toBe(colors[i])
  );
});

describe("Comments for Art Pieces", () => {
  let user;
  let commentsSection;

  beforeEach(() => {
    user = userEvent.setup();

    render(<ArtPieceDetails slug={slug} />);

    commentsSection = screen.getByTestId("comments");
  });

  it('has a headline "Comments"', () => {
    expect(
      within(commentsSection).getByRole("heading", { name: "Comments" })
    ).toBeInTheDocument();
  });

  it("has a list of comments for this art piece", () => {
    expect(within(commentsSection).getByRole("list")).toBeInTheDocument();
  });

  it("has an input field to write a comment", () => {
    expect(
      within(commentsSection).getByRole("textbox", { id: "comment" })
    ).toBeInTheDocument();
  });

  it('has a submit button labeled "Send"', () => {
    expect(
      within(commentsSection).getByRole("button", { name: "Send" })
    ).toBeInTheDocument();
  });

  describe("After submitting the form, the comment is appended to the list of comments", () => {
    it("works when adding a first comment", async () => {
      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: "Send" });

      await user.type(input, "my new comment! :)");

      await user.click(button);

      expect(within(commentsSection).getByText("my new comment! :)"));
    });
    it("works when adding a second comment", async () => {
      const input = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: "Send" });

      await user.type(input, "my first comment");
      await user.click(button);
      expect(within(commentsSection).getByText("my first comment"));

      await user.type(input, "my second comment");
      await user.click(button);
      expect(within(commentsSection).getByText("my second comment"));
    });
  });
});
