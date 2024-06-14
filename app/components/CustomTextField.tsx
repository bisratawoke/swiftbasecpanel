"use client";

import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function CustomTextField({ label, ...props }: any) {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      label={label}
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={meta.touched && meta.error ? true : false}
    />
  );
}
