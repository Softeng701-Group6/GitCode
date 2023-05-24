import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import styles from "./LevelDescription.module.css";

interface Props {
    title: string;
    content: string;
  }

export default function LevelDescription({title, content}:Props) {
  return (
    <Stack className={styles['container']}>
      <Typography className={styles['title']} sx={{fontWeight:'bold', fontSize:32}}>
        {title}
      </Typography>
      <Typography className={styles['objectives-heading']} sx={{fontWeight:'bold', fontSize:24}}>
        Learning Objectives
      </Typography>
      <Typography className={styles['content']} sx={{py:4}}>
        {content}
      </Typography>
      <Divider className={styles['divider']} variant="middle" />
      <Box sx={{ flexGrow: 1 }}></Box>
      <Button className={styles['button']} variant="contained" sx={{ marginTop: 8, fontSize: 24, fontWeight: 'bold', backgroundColor: '#31884F' }}>
        Start Problem
      </Button>
    </Stack>
  );
}
