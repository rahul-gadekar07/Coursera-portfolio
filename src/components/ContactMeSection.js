import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext"; // Import useAlertContext
import Alert from "./Alert"; // Import the Alert component

const ContactMeSection = () => {
  const { submit, response, isLoading } = useSubmit();
  const { onOpen } = useAlertContext(); // Use onOpen from context
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log("Submitting form with values:", values);
      try {
        await submit(values); // Wait for submit to complete
        formik.resetForm(); // Reset form on success
        onOpen("success", "Thank you for your submission!"); // Open success alert
      } catch (error) {
        console.error("Submission error:", error);
        onOpen("error", "Submission failed. Please try again later."); // Open error alert
        // Handle error state if needed
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
  });

  useEffect(() => {
    console.log("Response:", response);
    // Handle different response types here if needed
    if (response && response.type === "success") {
      onOpen("success", response.message);
    } else if (response && response.type === "error") {
      onOpen("error", response.message);
    }
  }, [response]);

  return (
    <Box bg="purple.700" p={8} borderRadius="md" maxW="xl" mx="auto" mt={8} mb={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={6} color="white">
        Contact me
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} mb={4}>
          <FormLabel htmlFor="firstName" color="white">Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            {...formik.getFieldProps("firstName")}
            bg="white"
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.email && formik.errors.email} mb={4}>
          <FormLabel htmlFor="email" color="white">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            bg="white"
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.type && formik.errors.type} mb={4}>
          <FormLabel htmlFor="type" color="white">Type of enquiry</FormLabel>
          <Select
            id="type"
            name="type"
            {...formik.getFieldProps("type")}
            bg="white"
          >
            <option value="hireMe">Hire Me</option>
            <option value="openSource">Open Source</option>
            <option value="other">Other</option>
          </Select>
          <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.comment && formik.errors.comment} mb={4}>
          <FormLabel htmlFor="comment" color="white">Your message</FormLabel>
          <Textarea
            id="comment"
            name="comment"
            height={150}
            {...formik.getFieldProps("comment")}
            bg="white"
          />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="purple"
          width="full"
          mt={4}
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>

      {/* Render Alert component */}
      <Alert />
    </Box>
  );
};

export default ContactMeSection;
