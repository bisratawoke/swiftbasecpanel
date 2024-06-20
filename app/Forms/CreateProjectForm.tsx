"use client";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import CustomTextField from "@/app/components/CustomTextField";
import { useEffect, useState } from "react";
import { FetchService } from "../actions/FetchServices";
import CustomAutocomplete from "../components/CustomAutoCompleteField";
import createProjectFormValidator from "./validators/createProjectFormValidator";
import CustomLoadingButton from "../components/CustomLoadingButton";
import Fade from "@mui/material/Fade";
import { FORM_STATUS } from "@/app/Forms/FormStatus";
import { useRouter } from "next/navigation";

export default function CreateProjectForm() {
  const [services, setServices] = useState<any>([]);
  const [formStatus, setFormStatus] = useState<FORM_STATUS | null>(null);
  const [formStatusMessage, setFormStatusMessage] = useState<string | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    FetchService()
      .then((res) => setServices(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        services: [],
      }}
      validationSchema={createProjectFormValidator()}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        let result = await fetch("/api/project", {
          method: "POST",
          body: JSON.stringify(values),
        });
        const res = await result.json();

        //TODO: check status and if its not 201 then throw an error
        const createServicesPayload = {
          projectId: res.message.id,
          services: values.services.map(
            (service: { id: string; title: string }) => {
              if (service.title.includes("static")) return "STATIC_HOSTING";
              else if (service.title.includes("Serverless")) return "LAMBDA";
              else return "SWIFTBASE_DB";
            }
          ),
        };
        result = await fetch("/api/service", {
          method: "POST",
          body: JSON.stringify(createServicesPayload),
        });
        setSubmitting(false);
        setFormStatus(FORM_STATUS.SUCCESS);
        setFormStatusMessage("Successfully created");
        setTimeout(() => {
          localStorage.setItem("currentProject", res.message.id);
          router.push("/dashboard");
        }, 2000);
      }}
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
          <CustomAutocomplete
            name="services"
            label="Services"
            options={services}
          />

          {formStatus ? (
            <Fade in={true} timeout={600}>
              <Alert severity={formStatus}>{formStatusMessage}</Alert>
            </Fade>
          ) : (
            <CustomLoadingButton isSubmitting={isSubmitting} />
          )}
        </Box>
      )}
    </Formik>
  );
}
