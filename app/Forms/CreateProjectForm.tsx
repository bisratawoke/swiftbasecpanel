"use client";

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import CustomTextField from "@/app/components/CustomTextField";
import { useEffect } from "react";
export default function CreateProjectForm() {
  useEffect(() => {}, []);
  return (
    <Formik
      initialValues={{}}
      validationSchema={yup.object({})}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Box
          component={"form"}
          gap={1}
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
        >
          <CustomTextField name="name" label="Name" />
          <CustomTextField name="name" label="Name" />
          <Button type="submit" variant="outlined">
            Next
          </Button>
        </Box>
      )}
    </Formik>
  );
}
