import { Stack } from "@mui/material";
import { Question } from "../../models/types";
import LevelCard from "./LevelCard";
import Tag from "../../components/Tag";

interface Props {
  questions: Question[]
}

export default function LevelCardList({questions}: Props) {
  return (
    <Stack direction="column">
      {questions.map((question, index) => (
        <LevelCard
          key={index}
          level={`${index + 1}. ${question.title}`}
          difficulty={question.difficulty}
          
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