import { Stack } from "@mui/material";
import { Question } from "../../models/types";
import LevelCard from "./LevelCard";
import Tag from "../../components/Tag";
import { useContext } from "react";
import { LevelContext } from "../../context/LevelContext";

interface Props {
  questions: Question[]
}

export default function LevelCardList({questions}: Props) {

  const { selectedQuestion, setQuestion } = useContext(LevelContext);

  function handleClick(question: Question) {
    setQuestion(question);
  }

  return (
    <Stack direction="column">
      {questions.map((question, index) => (
        <LevelCard
          key={index}
          level={`${question.title}`}
          difficulty={question.difficulty}
          selected={question.id == selectedQuestion.id}

          // TODO: check current user's completed questions and mark accordingly
          completed={true}
          onClick={() => handleClick(question)}

          tags={question.tags.map((tag, index) => {
            return (
              <Tag key={index} color={tag.color}>
                {tag.name}
              </Tag>
            );
          })}
        />  
      ))}
    </Stack>
  );
}