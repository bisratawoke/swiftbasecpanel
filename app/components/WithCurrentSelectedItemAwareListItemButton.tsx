"use client";

import { ListItemButton, ListItemButtonProps, styled } from "@mui/material";
import { pink } from "@mui/material/colors";

export default function WithCurrentSelectItemAwareListItemButton({
  itemName,
  currentSelectItem,
  key,
  children,
  onClick,
}: {
  itemName: string;
  currentSelectItem: string;
  key: any;
  children: React.ReactNode;
  onClick: any;
}) {
  const StyledListItem = styled(ListItemButton)<ListItemButtonProps>(
    ({ theme }) => ({
      backgroundColor: itemName == currentSelectItem ? pink[200] : "white",
      borderRadius: 14,
      "&:hover": {
        backgroundColor:
          itemName === currentSelectItem
            ? pink[200]
            : theme.palette.action.hover,
      },
    })
  );
  return (
    <StyledListItem key={key} onClick={onClick}>
      {children}
    </StyledListItem>
  );
}
