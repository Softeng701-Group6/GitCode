import { Difficulty } from "./enums.ts";

export interface GeneralObject {
  id?: string;
}

export interface User extends GeneralObject {
  name: string;
  email: string;
  expProgress: string;
  level: string;
  profileImg: string;
  completedQuestions: string[];  // Reference to Question
  attemptedQuestions: string[];  // Reference to Question
}

interface Description {
  title: string;
  activity: string;
  plan: string[];
  desiredGraphImgUrl: string;
}

interface learningObjective {
  objective: string;
  outcomeArray: string[];
}

interface Discussion {
  statement: string;
  commands: string[];
  selectedCommands: string[];
  answers: Answer[];
}

interface Answer {
  step: string;
  explanation: string[];
}

export interface Comment extends GeneralObject {
  questionId: string; // Reference to Question (hard coded)
  userId: string;  // Reference to User
  message: string;
  upVotes: string[];  // Reference to User
}

export interface Question extends GeneralObject {
  title: string;
  hints: string[];
  summary: string[];
  description: Description;
  learningObjective: learningObjective;
  discussion: Discussion;
  // commentIds: DocumentReference[];  // Reference to Comment
  initialCommands: string[];
  initialGraph: Graph | null; // Reference to Graph
  goalGraph: Graph | null; // Reference to Graph
  difficulty: Difficulty;
  tags: Tag[];
}

export interface Tag {
  name: string;
  color: string;
}

export interface Edge {
  source: string;
  target: string;
  branch: string;
}

export interface Graph extends GeneralObject {
  nodes: string[];
  edges: Edge[];
  headNode?: string;
  branch?: string;
  branchHeads?: Map<string, string>;
  remoteNodes?: Set<string>;
  branchNodes?: Map<string, string[]>;
}
