import { DocumentReference } from "firebase/firestore";

export interface GeneralObject {
    id?: string;
}

export interface User extends GeneralObject {
    name: string;
    password: string;
    expProgress: string;
    level: string;
    profileImg: string;
    completedQuestions: DocumentReference[];  // Reference to Question
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
    commentIds: DocumentReference[];  // Reference to Comment
    initialGraph: DocumentReference | null; // Reference to Graph
    goalGraph: DocumentReference | null; // Reference to Graph
}

interface Edge {
    source: string;
    target: string;
}

export interface Graph extends GeneralObject {
    name: string;
    nodes: string[];
    edges: Edge[];
}
