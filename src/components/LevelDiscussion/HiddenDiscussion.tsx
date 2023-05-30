import { Stack, Typography } from "@mui/material";
import styles from "./LevelDiscussion.module.css";

import LockIcon from "@mui/icons-material/Lock";

export default function HiddenDiscussion() {
  return (
    <Stack className={styles["hidden"]} sx={{ backgroundColor: "#3E3E3E" }}>
      <LockIcon className={styles["lock-icon"]} />
      <Typography className={styles["title"]} sx={{ color: "#B3B3B3", textAlign: "center" }}>
        Attempt the problem to see the solution and comments.
      </Typography>
    </Stack>
  );
}
