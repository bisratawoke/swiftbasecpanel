"use client";

import {
  ExpandLess,
  ExpandMore,
  Functions,
  GetAppRounded,
  Home,
  Rocket,
  Settings,
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
} from "@mui/material";
import React, { useState } from "react";

type Node = {
  label: string;
  icon: React.ReactNode;
  children?: Node[] | null;
  showChildren?: boolean;
  setShowChildren?: any;
};

export default function SideNavBar() {
  const [showService, setShowServices] = useState<boolean>(true);
  const navItems: Array<Node> = [
    {
      label: "Services",
      icon: <Home />,
      children: [
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
      ],
      showChildren: showService,
      setShowChildren: setShowServices,
    },
    {
      label: "Settings",
      icon: <Settings />,
    },
  ];
  return (
    <List>
      {navItems.map((item) => (
        <>
          <ListItem key={item.label}>
            <ListItemButton
              onClick={() => {
                if (item.children) {
                  item.setShowChildren((state: any) => !state);
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  fontSize: "16px",
                }}
              />
              {item.children ? (
                <>{item.showChildren ? <ExpandLess /> : <ExpandMore />}</>
              ) : (
                <></>
              )}
            </ListItemButton>
          </ListItem>
          {item.children ? (
            <Collapse in={item.showChildren} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  paddingLeft: 4,
                }}
              >
                {item.children.map((item, indx) => (
                  <ListItem key={indx}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          fontSize: "14px",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          ) : (
            <></>
          )}
        </>
      ))}
    </List>
  );
}
