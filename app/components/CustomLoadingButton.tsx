import { LoadingButton } from "@mui/lab";

export default function CustomLoadingButton({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
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
