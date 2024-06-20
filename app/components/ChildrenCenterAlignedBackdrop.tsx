"use client";

import { Backdrop, BackdropProps, styled } from "@mui/material";
import { pink } from "@mui/material/colors";

export const ChildrenCenterAlignedBackdrop = styled(Backdrop)<BackdropProps>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);
