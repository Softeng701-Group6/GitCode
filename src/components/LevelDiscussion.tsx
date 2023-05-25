import { Box, Divider, Stack, Typography } from "@mui/material";
import styles from "./LevelDiscussion.module.css";
import { Question } from "../models/types.ts";

interface Props {
  question: Question;
}

export default function LevelDiscussion({question}: Props) {

  return (
    <Stack className={styles['container']}>
      <Typography className={styles['title']} sx={{fontWeight: 'bold', fontSize: 32}}>
        Model Answer
      </Typography>
      <Typography className={styles['content']} sx={{py: 4}}>
        Content
      </Typography>
      <Divider className={styles['divider']} variant="middle"/>
      <Box sx={{flexGrow: 1}}></Box>
    </Stack>
  );
}
