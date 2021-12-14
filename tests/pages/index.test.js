import React from "react";
import { render, screen } from "../test-utils";
import CustomerFeedback from "../../pages/index";

describe("Customer Feedback Page", () => {
  it("should render the label", () => {
    const textToFind = "Product rating:";

    render(<CustomerFeedback />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});
