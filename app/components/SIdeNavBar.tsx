"use client";

import { Functions, Rocket, Store } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";

export default function SideNavBar() {
  const navItems: Array<{ label: string; icon: React.ReactNode }> = [
    {
      label: "Hosting",
      icon: <Rocket />,
    },
    {
      label: "Function",
      icon: <Functions />,
    },
    {
      label: "Database",
      icon: <Store />,
    },
  ];
  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label}>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{
                fontSize: "16px",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
