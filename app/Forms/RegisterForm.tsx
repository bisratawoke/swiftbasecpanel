"use client";

import { Alert, Fade, Link, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import CustomTextField from "../components/CustomTextField";
import CustomLoadingButton from "../components/CustomLoadingButton";
import { useState } from "react";
import { FORM_STATUS } from "./FormStatus";
import RegisterUser from "@/app/actions/RegisterUser";
export default function RegisterForm() {
  const [formStatus, setFormStatus] = useState<FORM_STATUS | null>(null);
  const [formStatusMessage, setFormStatusMessage] = useState<string | null>(
    null
  );
  return (
    <Formik
      initialValues={{}}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const result = await RegisterUser(values);
        if (!result?.status) {
          setSubmitting(false);
          setFormStatus(FORM_STATUS.ERROR);
          setFormStatusMessage("Failed to register please try again");
          setTimeout(() => {
            setFormStatus(null);
          }, 2000);
        } else {
          setFormStatus(FORM_STATUS.SUCCESS);
          setFormStatusMessage("Successfully registered");
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Stack
          component="form"
          sx={{
            width: { md: "300px" },
            border: "1px solid silver",
            borderRadius: "8px",
            paddingLeft: "16px",
            paddingRight: "16px",
            minHeight: { md: "300px" },
            justifyContent: "center",
          }}
          spacing={3}
          onSubmit={handleSubmit}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "22",
                fontWeight: 700,
              }}
            >
              Create An Account
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Already have an account ? <Link href="/auth/login">Login</Link>
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <CustomTextField name="email" label="Email" size="small" />
            <CustomTextField name="password" label="Password" size="small" />
          </Stack>
          {formStatus ? (
            <Fade in={true} timeout={600}>
              <Alert severity={formStatus}>{formStatusMessage}</Alert>
            </Fade>
          ) : (
            <CustomLoadingButton isSubmitting={isSubmitting} />
          )}
        </Stack>
      )}
    </Formik>
  );
}
