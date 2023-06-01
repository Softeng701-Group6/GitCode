import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import styles from "./LevelDiscussion.module.css";
import { Comment, Question, User } from "../../models/types.ts";
import { useContext, useEffect, useState } from "react";
import HiddenDiscussion from "./HiddenDiscussion.tsx";
import { UserContext } from "../../context/UserContext";
import {
  getCollection,
  getDocumentById,
  storeDocument,
} from "../../firebase/firestoreUtils.ts";
import { Collection } from "../../firebase/firebaseEnums.ts";
import { LevelContext } from "../../context/LevelContext.tsx";
import GreenButton from "../GreenButton/GreenButton.tsx";

export default function LevelDiscussion() {
  const { selectedQuestion } = useContext(LevelContext);
  const user = useContext(UserContext)!;

  const [refresh, setRefresh] = useState<boolean>(true);
  const [commentToSend, setCommentToSend] = useState<string>("");
  const [levelAttempted, setLevelAttempted] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  isLevelAttempted();

  // Refresh the comments to get the latest
  async function init() {
    // Linking to firebase
    setAllUsers(await getCollection<User>(Collection.USERS));

    const allComments: Comment[] = await getCollection<Comment>(
      Collection.COMMENTS
    );
    const filteredComments: Comment[] = allComments.filter(
      (c) => c.questionId === selectedQuestion.id
    );
    setComments(filteredComments);
  }

  // When changing question, show is loading...
  useEffect(() => {
    setIsLoading(true);

    init().then(() => setIsLoading(false));
  }, [selectedQuestion.id]);

  // When refresh, only refresh the questions
  useEffect(() => {
    init();
  }, [refresh]);

  async function handleSendComment() {
    if (!commentToSend) return alert("Please enter a comment!");

    const newComment: Comment = {
      questionId: selectedQuestion.id!,
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

  async function isLevelAttempted() {
    const userObj = await getDocumentById<User>(Collection.USERS, user.uid);
    const attemptedArray = userObj.attemptedQuestions;  // Reference to Question
    
    if (attemptedArray.includes(selectedQuestion.id!)) setLevelAttempted(true);
    else setLevelAttempted(false);
  }

  return (
    <Stack className={styles["container"]}>
      <Typography
        className={styles["title"]}
        sx={{ fontWeight: "bold", fontSize: 32 }}
      >
        Model Answer
      </Typography>
      {levelAttempted ? (
        <Stack>
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
              {selectedQuestion.discussion.commands.map((cmd, index) => (
                <Typography sx={{ textAlign: "left" }} key={index}>
                  {cmd}
                </Typography>
              ))}
            </Stack>
            {selectedQuestion.discussion.answers.map((ans, index) => (
              <Stack key={index} sx={{ py: 2 }}>
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
            sx={{ marginTop: 4, backgroundColor:"white"}}
            variant="middle"
          />
          <Box sx={{ flexGrow: 1 }}></Box>

          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
            <Stack
              alignItems="flex-start"
              className={styles["comment-section"]}
            >
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
                  <GreenButton onClick={handleSendComment}>Send</GreenButton>
              </Stack>

              {comments.map((comment) => (
                <Stack
                  key={comment.id}
                  className={styles["comment-read"]}
                  sx={{ width: 1 }}
                >
                  <Typography sx={{ textAlign: "left", py: 2, px: 2 }}>
                    {allUsers.find((u: User) => u.id === comment.userId)!.email}
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

                    {comment.upVotes.includes(user.uid) ? (
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
                    )}

                    <Typography>{comment.upVotes.length}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      ) : (
        <HiddenDiscussion />
      )}
    </Stack>
  );
}
