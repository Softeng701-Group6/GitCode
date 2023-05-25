import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import styles from "./LevelDiscussion.module.css";
import { Question } from "../models/types.ts";
import { useState } from "react";

interface Props {
  question: Question;
}

export default function LevelDiscussion({question}: Props) {
  const discussion = question.discussion;
  const [commentToSend, setCommentToSend] = useState<string>("");

  function handleSendComment() {
    console.log(commentToSend);
  }

  return (
    <Stack className={styles['container']}>
      <Typography className={styles['title']} sx={{fontWeight: 'bold', fontSize: 32}}>
        Model Answer
      </Typography>

      <Stack>
        <Typography>{discussion.statement}</Typography>
        {discussion.commands.map(cmd => (
          <Typography key={cmd}>{cmd}</Typography>
        ))}
        {discussion.answers.map(ans => (
          <Stack key={ans.step}>
            <Typography>{ans.step}</Typography>
            <Typography>{ans.explanation}</Typography>
          </Stack>
        ))}
      </Stack>

      <Divider className={styles['divider']} variant="middle"/>
      <Box sx={{flexGrow: 1}}></Box>

      <Stack>
        <Typography>Comments</Typography>

        <Stack>
          <TextField
            multiline
            rows={4}
            value={commentToSend}
            onChange={event => setCommentToSend(event.target.value)}
            onKeyDown={event => event.key === 'Enter' ? handleSendComment() : null}
          />
          <Button variant="outlined" onClick={handleSendComment}>Send</Button>
        </Stack>

        <Stack>
          <Typography>User 1</Typography>
          <TextField
            multiline
            InputProps={{
              readOnly: true,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
