import { green, purple } from "@mui/material/colors";
import LevelCard from "./LevelCard";
import Tag from "../../components/Tag";
import { Grid, Stack } from "@mui/material";
import Frame from "../../components/Frame";
import LevelDescription from "../../components/LevelDescription";

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
          <LevelDescription title='1. Commit and Push' content = '1. Sed luctus venenatis massa. Nam sagittis neque nec purus aliquam, a tempus velit hendrerit. Pellentesque ac risus aliquet, egestas orci vitae, feugiat tellus. 2. Morbi id tortor id enim consectetur consectetur. Praesent orci erat, consectetur quis efficitur pretium, auctor blandit lorem. Donec lobortis arcu ac dui luctus tincidunt. 3. Proin scelerisque arcu sapien, eu tristique lorem dictum eget. Suspendisse mollis tempor ligula nec iaculis. Quisque maximus interdum nunc, ut convallis quam pretium vitae. Duis posuere neque urna, id auctor arcu consectetur id. Ut mollis lectus tortor, eu tempus quam vestibulum at. Integer in leo non nisi scelerisque molestie. Nullam ut volutpat ante. 4. Duis ultrices erat urna, eu semper augue euismod eget. Nulla ac elit nunc. Mauris non diam quam. Nullam consectetur ipsum non metus blandit bibendum'/>
        </Frame>
      </Grid>
    </Grid>
  );
}