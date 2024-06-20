"use client";

import {
  ExpandLess,
  ExpandMore,
  Functions,
  GetAppRounded,
  Home,
  IndeterminateCheckBoxTwoTone,
  Rocket,
  Settings,
  SettingsOverscan,
  Storage,
  Store,
} from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Backdrop,
  styled,
  BackdropProps,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import WithCurrentSelectItemAwareListItem from "./WithCurrentSelectedItemAwareListItemButton";
import WithCurrentSelectItemAwareListItemButton from "./WithCurrentSelectedItemAwareListItemButton";
type Node = {
  label: string;
  icon: React.ReactNode;
  children?: Node[] | null;
  showChildren?: boolean;
  setShowChildren?: any;
};

export default function SideNavBar() {
  const [showService, setShowServices] = useState<boolean>(true);
  const pathname = usePathname();
  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<string>("Hosting");
  useEffect(() => {
    console.log(pathname);
  }, []);
  const navItems: Array<Node> = [
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
      icon: <Storage />,
    },

    {
      label: "Settings",
      icon: <Settings />,
    },
  ];
  return (
    <List>
      {navItems.map((item, indx) => (
        <ListItem key={indx}>
          <WithCurrentSelectItemAwareListItemButton
            key={indx}
            itemName={item.label}
            currentSelectItem={currentSelectedItem}
            onClick={() => setCurrentSelectedItem(item.label)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                {item.label}
              </Typography>
            </ListItemText>
          </WithCurrentSelectItemAwareListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
