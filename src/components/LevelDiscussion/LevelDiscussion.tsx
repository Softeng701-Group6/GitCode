import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import styles from "./LevelDiscussion.module.css";
import { Question } from "../../models/types.ts";
import { useState } from "react";

interface Props {
  question: Question;
}

export default function LevelDiscussion({ question }: Props) {
  const discussion = question.discussion;
  const [commentToSend, setCommentToSend] = useState<string>("");

  const [dummyComments, setDummyComments] = useState([
    {
      id: "1",
      userId: "User 1",
      message: "Interesting question",
      upVotes: 3,
    },
    {
      id: "2",
      userId: "User 2",
      message: "This is hard",
      upVotes: 9,
    },
  ]);

  function handleSendComment() {
    const newComment = {
      id: `${dummyComments.length + 1}`,
      userId: `User ${dummyComments.length + 1}`,
      message: commentToSend,
      upVotes: 0,
    };

    setDummyComments([newComment, ...dummyComments]);
  }

  return (
    <Stack className={styles["container"]}>
      <Typography
        className={styles["title"]}
        sx={{ fontWeight: "bold", fontSize: 32 }}
      >
        Model Answer
      </Typography>
      <Stack>
        <Typography sx={{ textAlign: "left", py:2 }}>
          {discussion.statement}
        </Typography>
        <Stack direction="column" spacing={2} sx={{ my:4, borderRadius: 1, alignItems:'flex-start', marginRight:4,width: 0.92, px: 4, py: 4,  backgroundColor:'#1E1E1E'}}>
          {discussion.commands.map((cmd) => (
            <Typography sx={{ textAlign: "left"}} key={cmd}>
              {cmd}
            </Typography>
          ))}
        </Stack>
        {discussion.answers.map((ans) => (
          <Stack key={ans.step} sx={{py: 2}} >
            <Typography sx={{ textAlign: "left", py: 2 }}>
              {ans.step}
            </Typography>
            <Typography sx={{ textAlign: "left" }}>
              {ans.explanation}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Divider className={styles["divider"]} sx={{marginTop: 4}} variant="middle" />
      <Box sx={{ flexGrow: 1 }}></Box>

      <Stack alignItems="flex-start" className={styles["comment-section"]}>
        <Typography className={styles["comment-title"]} sx={{ width: 1 }}>
          Comments
        </Typography>

        <Stack
          className={styles["comment-sender"]}
          direction="row"
          sx={{ width: 1 }}
        >
          <TextField
            className={styles["comment-box"]}
            multiline
            sx={{ width: 0.95 }}
            rows={4}
            value={commentToSend}
            InputProps={{
              style: { color: "white" },
            }}
            onChange={(event) => setCommentToSend(event.target.value)}
            onKeyDown={(event) =>
              event.key === "Enter" ? handleSendComment() : null
            }
          />
          <Button
            variant="outlined"
            className={styles["comment-sender-button"]}
            onClick={handleSendComment}
          >
            Send
          </Button>
        </Stack>

        {dummyComments.map((comment) => (
          <Stack
            key={comment.id}
            className={styles["comment-read"]}
            sx={{ width: 1 }}
          >
            <Typography sx={{ textAlign: "left", py: 2, px: 2 }}>
              {comment.userId}
            </Typography>

            <Stack
              className={styles["comment-sender"]}
              direction="row"
              sx={{ width: 1 }}
            >
              <TextField
                className={styles["comment-box"]}
                sx={{ width: 1, marginRight: 4 }}
                multiline
                rows={4}
                value={comment.message}
                InputProps={{
                  readOnly: true,
                  style: { color: "white" },
                }}
              />

              <ThumbUpIcon
                className={styles["comment-vote"]}
                sx={{ pr: 4 }}
                onClick={() => {
                  comment.upVotes++;
                  setDummyComments([...dummyComments]);
                }}
              />

              <Typography>{comment.upVotes}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}