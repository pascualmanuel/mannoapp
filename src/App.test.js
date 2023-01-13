import {render, screen} from "@testing-library/react";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
