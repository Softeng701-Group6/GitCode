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
import { useContext, useState } from "react";
import { LevelContext } from "../../context/LevelContext.tsx";


export default function LevelDiscussion() {

  const { selectedQuestion } = useContext(LevelContext);

  const [commentToSend, setCommentToSend] = useState<string>("");

  // TODO: replace with DB call
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
        <Typography sx={{ textAlign: "left", py: 2 }}>
          {selectedQuestion.discussion.statement}
        </Typography>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            my: 4,
            borderRadius: 1,
            alignItems: "flex-start",
            marginRight: 4,
            width: 0.92,
            px: 4,
            py: 4,
            backgroundColor: "#1E1E1E",
          }}
        >
          {selectedQuestion.discussion.commands.map((cmd) => (
            <Typography sx={{ textAlign: "left" }} key={cmd}>
              {cmd}
            </Typography>
          ))}
        </Stack>
        {selectedQuestion.discussion.answers.map((ans) => (
          <Stack key={ans.step} sx={{ py: 2 }}>
            <Typography sx={{ textAlign: "left", py: 2 }}>
              {ans.step}
            </Typography>
            <ul>
              {ans.explanation.map((line, index) => (
                <li key={index}>
                  <Typography sx={{ textAlign: "left" }}>{line}</Typography>
                </li>
              ))}
            </ul>
          </Stack>
        ))}

        {/* Footer */}
        <Typography sx={{ textAlign: "left", py: 2 }}>
          For more information, Checkout Atlassian's Page{" "}
          <a href="https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud">
            here
          </a>
        </Typography>
        <Typography variant="h3" sx={{ textAlign: "left", py: 2 }}>
          Post your answers below, Is there another way to get the solution?
        </Typography>

      </Stack>

      <Divider
        className={styles["divider"]}
        sx={{ marginTop: 4 }}
        variant="middle"
      />
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
