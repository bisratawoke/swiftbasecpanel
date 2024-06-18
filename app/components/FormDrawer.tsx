"use client";

import { Drawer } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function FormDrawer({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ style: { width: "60vw" } }}
    >
      {children}
    </Drawer>
  );
}
