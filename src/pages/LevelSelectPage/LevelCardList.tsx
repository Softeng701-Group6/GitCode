import { Stack } from "@mui/material";
import { Question } from "../../models/types";
import LevelCard from "./LevelCard";
import Tag from "../../components/Tag";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface Props {
  questions: Question[]
}

export default function LevelCardList({questions}: Props) {

  const [selectedQuestionId, setQuestionId] = useLocalStorage("selectedQuestionId");

  function handleClick(question: Question) {
    setQuestionId(question.id);
  }

  return (
    <Stack direction="column">
      {questions.map((question, index) => (
        <LevelCard
          key={index}
          level={`${index + 1}. ${question.title}`}
          difficulty={question.difficulty}
          selected={question.id == selectedQuestionId}
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