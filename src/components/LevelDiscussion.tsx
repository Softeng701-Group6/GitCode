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

  const [dummyComments, setDummyComments] = useState([
    {
      id: "1",
      userId: "User 1",
      message: "Interesting question",
      upVotes: 3
    },
    {
      id: "2",
      userId: "User 2",
      message: "This is hard",
      upVotes: 9
    }
  ]);

  function handleSendComment() {
    const newComment = {
      id: `${dummyComments.length + 1}`,
      userId: `User ${dummyComments.length + 1}`,
      message: commentToSend,
      upVotes: 0
    };

    setDummyComments([newComment, ...dummyComments]);
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

      <Stack alignItems="flex-start" className={styles["comment-section"]}>
        <Typography className={styles["comment-title"]}>Comments</Typography>

        <Stack
          className={styles["comment-sender"]}
          direction="row">
          <TextField
            className={styles["comment-box"]}
            multiline
            rows={4}
            value={commentToSend}
            InputProps={{
              style: {color: 'white'},
            }}
            onChange={event => setCommentToSend(event.target.value)}
            onKeyDown={event => event.key === 'Enter' ? handleSendComment() : null}
          />
          <Button variant="outlined" className={styles["comment-sender-button"]} onClick={handleSendComment}>Send</Button>
        </Stack>

        {dummyComments.map(comment => (
          <Stack key={comment.id} className={styles["comment-read"]}>
            <Typography>{comment.userId}</Typography>
            <TextField
              className={styles["comment-box"]}
              multiline
              rows={4}
              value={comment.message}
              InputProps={{
                readOnly: true,
                style: {color: 'white'},
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
