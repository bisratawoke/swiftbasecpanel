"use client";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import CustomTextField from "@/app/components/CustomTextField";
import { useEffect, useState } from "react";
import { FetchService } from "../actions/FetchServices";

export default function CreateProjectForm() {
  const [services, setServices] = useState<any>([]);
  useEffect(() => {
    FetchService()
      .then((res) => setServices(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Formik
      initialValues={{}}
      validationSchema={yup.object({})}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Box
          component={"form"}
          gap={3}
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          sx={{
            padding: "16px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 400,
                color: "black",
              }}
            >
              Add Project
            </Typography>
          </Box>
          <CustomTextField name="name" label="Name" />
          <CustomTextField
            name="description"
            label="Description"
            rows={4}
            multiline
          />
          <Autocomplete
            multiple
            options={services}
            getOptionLabel={(option: any) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Services"
                variant="outlined"
              />
            )}
          />
          <Button type="submit" variant="outlined">
            Create
          </Button>
        </Box>
      )}
    </Formik>
  );
}
