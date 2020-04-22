import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("matches snapshot", () => {
    render(
      <Layout>
        <div>hello</div>
      </Layout>
    );
    expect(screen.getByTestId("layout")).toMatchSnapshot();
  });
});
