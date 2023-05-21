import { Box, Color, Typography } from "@mui/material";

interface Props {
  color: string
  children: string
}

export default function Tag({color, children}: Props) {
  return (
    <Box sx={{
      display: "flex",
      paddingX: 2,
      paddingY: 1,
      marginX: 0.5,
      height: "min-content",
      borderRadius: 1,
      background: color,
      alignItems: "center"
    }}>
      <Typography variant="button" sx={{
        color: "white",
        fontWeight: "bold",
        fontSize: 10
      }}>{children}</Typography>
    </Box>
  );
}