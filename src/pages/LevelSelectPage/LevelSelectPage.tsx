import { green, purple } from "@mui/material/colors";
import LevelCard from "../../components/LevelCard";
import Tag from "../../components/Tag";

const tags = [
  {
    name: "commit",
    color: purple[400]
  },
  {
    name: "push",
    color: green[600]
  }
]

export default function LevelSelectPage() {
  return (
    <LevelCard 
      level="1. Commit and Push"
      difficulty="Easy"
      tags={tags.map((tag, index) => {
        return <Tag key={index} color={tag.color}>{tag.name}</Tag>
      })} />
  );
}