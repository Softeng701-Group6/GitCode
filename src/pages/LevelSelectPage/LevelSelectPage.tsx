import { green, purple } from "@mui/material/colors";
import LevelCard from "./LevelCard";
import Tag from "../../components/Tag";
import { Grid, Stack } from "@mui/material";
import Frame from "../../components/Frame";

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
    <Grid container spacing={2} sx={{
      
    }}>
      <Grid item xs={4}>
        <Stack direction="column">
          <LevelCard 
            level="1. Commit and Push"
            difficulty="Easy"
            tags={tags.map((tag, index) => {
              return <Tag key={index} color={tag.color}>{tag.name}</Tag>
            })} />
          <LevelCard 
            level="1. Commit and Push"
            difficulty="Easy"
            tags={tags.map((tag, index) => {
              return <Tag key={index} color={tag.color}>{tag.name}</Tag>
            })} />
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Frame sx={{
          // Custom styles here
        }}>

        </Frame>
      </Grid>
    </Grid>
  );
}