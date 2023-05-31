import { Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ReactElement, useState } from "react";
import { green } from "@mui/material/colors";
import Frame from "../../components/Frame";
import styles from "./LevelCard.module.css";

interface Props {
  level: string;
  difficulty: string;
  tags?: ReactElement[];
  selected: boolean;
  completed?: boolean;
  onClick: () => void;
}

export default function LevelCard({
  level,
  difficulty,
  tags,
  selected,
  completed = false,
  onClick,
}: Props) {
  return (
    <Frame
      onClick={onClick}
      className={`${styles.container} ${selected ? styles.selected : ""}`}
    >
      <Stack
        direction="row"
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
        }}
      >
        <Stack direction="column" spacing={2}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
            }}
          >
            {level}
          </Typography>

          <Stack direction="row" alignItems="center">
            <Typography
              variant="overline"
              sx={{
                paddingX: 2,
              }}
            >
              {difficulty}
            </Typography>

            {tags}
          </Stack>
        </Stack>

        <Box
          sx={{
            position: "absolute",
            right: 0,
          }}
        >
          {completed && (
            <CheckCircleIcon
              sx={{
                fontSize: 30,
                color: green[500],
              }}
            />
          )}
        </Box>
      </Stack>
    </Frame>
  );
}
