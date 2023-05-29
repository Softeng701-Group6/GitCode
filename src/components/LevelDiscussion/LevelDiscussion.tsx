import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import styles from "./LevelDiscussion.module.css";
import { Comment, Question, User } from "../../models/types.ts";
import { useContext, useEffect, useState } from "react";
import { getCollection, storeDocument } from "../../firebase/firestoreUtils.ts";
import { Collection } from "../../firebase/firebaseEnums.ts";
import { UserContext } from "../../context/UserContext.ts";

interface Props {
  question: Question;
}

export default function LevelDiscussion({ question }: Props) {
  const discussion = question.discussion;
  const [refresh, setRefresh] = useState<boolean>(true);
  const user = useContext(UserContext)!;
  const [commentToSend, setCommentToSend] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  useEffect(() => {
    async function init() {
      // Linking to firebase
      setAllUsers(await getCollection<User>(Collection.USERS));

      const allComments: Comment[] = await getCollection<Comment>(Collection.COMMENTS);
      const filteredComments: Comment[] = allComments.filter(c => c.questionId === question.id);
      setComments(filteredComments);

      setIsLoading(false);
    }

    init();
  }, [refresh]);

  async function handleSendComment() {
    if (!commentToSend) return alert("Please enter a comment!");

    const newComment: Comment = {
      questionId: question.id!,
      userId: user.uid,
      message: commentToSend,
      upVotes: [],
    };

    setCommentToSend("");
    await storeDocument(Collection.COMMENTS, newComment);
    setRefresh(!refresh);
  }

  async function handleUpvote(comment: Comment) {
    // Toggle vote
    if (comment.upVotes.includes(user.uid)) {
      comment.upVotes = comment.upVotes.filter((userId) => userId !== user.uid);
    } else {
      comment.upVotes.push(user.uid);
    }

    await storeDocument(Collection.COMMENTS, comment);
    setRefresh(!refresh);
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
          {discussion.statement}
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
          {discussion.commands.map((cmd) => (
            <Typography sx={{ textAlign: "left" }} key={cmd}>
              {cmd}
            </Typography>
          ))}
        </Stack>
        {discussion.answers.map((ans) => (
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

      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
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

          {comments.map((comment) => (
            <Stack
              key={comment.id}
              className={styles["comment-read"]}
              sx={{ width: 1 }}
            >
              <Typography sx={{ textAlign: "left", py: 2, px: 2 }}>
                {/*{allUsers.find((u: User) => u.id === comment.userId)!.email}*/}
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

                {
                  comment.upVotes.includes(user.uid) ? (
                    <ThumbUpIcon
                      className={styles["comment-vote"]}
                      sx={{ pr: 4 }}
                      onClick={() => {
                        handleUpvote(comment);
                      }}
                    />
                  ) : (
                    <ThumbUpAltOutlinedIcon
                      className={styles["comment-vote"]}
                      sx={{ pr: 4 }}
                      onClick={() => {
                        handleUpvote(comment);
                      }}
                    />
                  )
                }

                <Typography>{comment.upVotes.length}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
