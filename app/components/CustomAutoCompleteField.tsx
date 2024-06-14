import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useField } from "formik";

export default function CustomAutocomplete({ options, ...props }: any) {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (event: any, value: any) => {
    helpers.setValue(value); // Set the Formik field value
  };

  return (
    <Autocomplete
      {...field}
      {...props}
      name={field.name}
      options={options}
      getOptionLabel={(option: any) => option.title}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          variant="outlined"
          error={meta.touched && meta.error ? true : false}
          helperText={meta.touched && meta.error ? meta.error : ""}
        />
      )}
      multiple
      value={field.value || []}
    />
  );
}
