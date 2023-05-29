import { DocumentReference } from "firebase/firestore";
import { Difficulty } from "./enums";

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
  description: string;
  activityArray: string[];
}

interface learningObjective {
  objective: string;
  outcomeArray: string[];
}

interface Discussion {
  statement: string;
  commands: string[];
  answers: Answer[];
}

interface Answer {
  step: string;
  explanation: string[];
}

export interface Comment extends GeneralObject {
  questionId: string; // Reference to Question (hard coded)
  userId: DocumentReference;  // Reference to User
  message: string;
  upVotes: DocumentReference[];  // Reference to User
}

export interface Question extends GeneralObject {
  title: string;
  hints: string[];
  summary: string[];
  description: Description;
  learningObjective: learningObjective;
  discussion: Discussion;
  // commentIds: DocumentReference[];  // Reference to Comment
  initialGraph: Graph | null; // Reference to Graph
  goalGraph: Graph | null; // Reference to Graph
  difficulty: Difficulty;
  tags: Tag[];
}

export interface Tag {
  name: string;
  color: string;
}

export interface Node {
  name: string;
  branch: string;
}

export interface Edge {
  source: string;
  target: string;
  branch: string;
}

export interface Graph extends GeneralObject {
  name: string;
  nodes: Node[];
  edges: Edge[];
  headNode: string | null;
}
