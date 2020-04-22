import React from "react";
import { render, screen } from "@testing-library/react";
import IssueList from "./IssueList";

describe("Layout", () => {
  const mockData = [
    {
      id: 1,
      title: "Bug: React App with router not opening on ios 13.4.x",
      issueId: "#18699",
      description: "opened 5 hours ago by nvnvenki",
    },
    {
      id: 2,
      title: "Bug: anther bugs",
      issueId: "#18620",
      description: "opened 5 hours ago by nvnvenki",
    },
  ];
  it("matches snapshot", () => {
    render(<IssueList issues={mockData} />);
    expect(screen.getByTestId("issue-list")).toMatchSnapshot();
  });
});
