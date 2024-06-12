"use client";

import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function CustomTextField({ label, ...props }: any) {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <TextField
      multiline={props.multiline}
      rows={props.rows}
      label={label}
      value={field.value}
      name={props.name}
      helperText={meta.touched && meta.error ? meta.error : ""}
      error={meta.touched && meta.error ? true : false}
      onChange={(value) => setFieldValue(field.name, value)}
    />
  );
}
