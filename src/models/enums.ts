import * as Colors from "@mui/material/colors"
import { Tag } from "./types.ts";

export enum Difficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export const Tags = {
  commit: {
    name: "commit",
    color: Colors.purple[400],
  } as Tag,
  push: {
    name: "push",
    color: Colors.green[600],
  } as Tag
}
