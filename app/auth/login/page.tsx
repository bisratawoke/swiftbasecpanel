"use client";
import CustomLoadingButton from "@/app/components/CustomLoadingButton";
import CustomTextField from "@/app/components/CustomTextField";
import { Alert, Box, Fade, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { FORM_STATUS } from "@/app/Forms/FormStatus";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [formStatus, setFormStatus] = useState<FORM_STATUS | null>(null);
  const [formStatusMessage, setFormStatusMessage] = useState<string | null>(
    null
  );
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        if (!res?.ok) {
          setSubmitting(false);
          setFormStatus(FORM_STATUS.ERROR);
          setFormStatusMessage("Please enter a valid Email or Password");
          setTimeout(() => {
            setFormStatus(null);
          }, 3000);
        } else {
          setFormStatus(FORM_STATUS.SUCCESS);
          setFormStatusMessage("Successfully authenticated");
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <Stack
            sx={{
              width: { xs: "100%", md: "300px" },
              justifyContent: "center",
              minHeight: { md: "300px" },
              height: "auto",
              border: "1px solid gray",
              borderRadius: "8px",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
            spacing={3}
            component={"form"}
            onSubmit={handleSubmit}
          >
            <Stack display="flex">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                Login
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                Not registered ?{" "}
                <Link href="/auth/register">Create Account</Link>
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
        </Box>
      )}
    </Formik>
  );
}
