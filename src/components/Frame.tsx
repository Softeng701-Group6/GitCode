import { Card, CardContent, SxProps, styled } from "@mui/material";
import { ReactElement } from "react";

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

interface Props {
  sx?: SxProps
  children?: ReactElement | ReactElement[]
}

export default function Frame({sx, children}: Props) {
  return (
    <Card sx={{
      background: "background.paper",
      borderRadius: 2,
      color: "white",
      ...sx // User defined styles
    }}>
      <CardContentNoPadding sx={{
        padding: "18px !important",
      }}>
        {children}
      </CardContentNoPadding>
    </Card>
  );
}