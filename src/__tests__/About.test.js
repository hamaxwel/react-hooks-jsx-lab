import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { image } from "../data/user";  // Corrected path to go up one level
import About from "../components/About";

test("renders a <div> with the ID of 'about'", () => {
  const { container } = render(<About />);
  const about = container.querySelector("#about");
  expect(about).toBeInTheDocument();
});

test("the <div> has three child elements", () => {
  const { container } = render(<About />);
  const about = container.querySelector("#about");
  expect(about.children).toHaveLength(3);
});

test("renders a <h2> with the text 'About Me'", () => {
  render(<About />);
  const h2 = screen.queryByText("About Me");
  expect(h2.tagName).toBe("H2");
});

test("renders a <p> element", () => {
  const { container } = render(<About />);
  const p = container.querySelector("p");
  expect(p).toBeInTheDocument();
});

test("renders a <img> element with the correct attributes", () => {
  render(<About />);
  const img = screen.queryByAltText("I made this");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", image);
});
