// App.test.js

import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // Find the input elements for score and comment
    const scoreInput = screen.getByLabelText("Score");
    const commentInput = screen.getByLabelText("Additional Feedback");

    // Fill in the score and comment
    fireEvent.change(scoreInput, { target: { value: score } });
    fireEvent.change(commentInput, { target: { value: comment } });

    // Find and click the submit button
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Make sure that the handleSubmit function is called with the correct values
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // Find the input element for score
    const scoreInput = screen.getByLabelText("Score");

    // Fill in the score
    fireEvent.change(scoreInput, { target: { value: score } });

    // Find and click the submit button
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Make sure that the handleSubmit function is called with the correct values
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "", // Expecting an empty comment when the score is higher than 5
    });
  });
});
