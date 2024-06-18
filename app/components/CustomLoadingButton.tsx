import { LoadingButton } from "@mui/lab";
import { useEffect } from "react";

export default function CustomLoadingButton({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  useEffect(() => {
    console.log(isSubmitting);
  }, [isSubmitting]);
  return (
    <LoadingButton
      size="small"
      type="submit"
      loading={isSubmitting}
      loadingPosition="center"
      variant="outlined"
    >
      Create
    </LoadingButton>
  );
}
