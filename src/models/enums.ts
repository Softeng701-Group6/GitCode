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
  } as Tag,
  checkout: {
    name: "checkout",
    color: Colors.blue[700],
  } as Tag,
  branch: {
    name: "branch",
    color: Colors.cyan[600],
  } as Tag,
  merge: {
    name: "merge",
    color: Colors.orange[800],
  } as Tag
}
