import {
  Box,
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import { ReactElement } from "react";

export interface CardOptionInterface {
  title: string;
  list: {
    text: string;
    icon?: ReactElement;
  }[];
}

export interface CardContentProps {
  title?: string;
  options?: CardOptionInterface[];
}

export const CardContent = ({ title, options }: CardContentProps) => {
  return (
    <Box p={2} width="90%" height="90%">
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>

      <Divider
        light
        style={{
          marginTop: 16,
          marginBottom: 8,
        }}
      />

      {(options ?? []).map(({ title, list }, optionIndex) => (
        <List
          key={`${optionIndex}-index`}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {title}
            </ListSubheader>
          }
        >
          {list.map(({ text, icon }, itemIndex) => (
            <ListItemButton key={`${optionIndex}-${itemIndex}-item`}>
              <ListItemIcon>{icon ? icon : <CodeIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      ))}
    </Box>
  );
};
