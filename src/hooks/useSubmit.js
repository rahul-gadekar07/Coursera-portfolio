import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom hook to handle form submission and mock API call.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (values) => {
    setLoading(true);
    console.log("Submitting values to server:", values); // Log values being submitted

    try {
      // Simulate API call
      await wait(2000);

      // Example response handling
      const success = Math.random() > 0.5;
      if (success) {
        const successMessage = `Thank you for your submission, ${values.firstName}!`;
        console.log("Submission successful:", successMessage); // Log success message
        setResponse({
          type: "success",
          message: successMessage,
        });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      const errorMessage = "Something went wrong. Please try again later.";
      console.error("Submission error:", error); // Log error
      setResponse({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
