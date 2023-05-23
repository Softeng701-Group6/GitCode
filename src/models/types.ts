import { DocumentReference, Timestamp } from "firebase/firestore";

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

export interface Description extends GeneralObject {
    title: string;
    activityArray: string[];
    description: string;
    objective: string;
    outcomeArray: string[];
}

export interface Discussion extends GeneralObject {
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
    descriptionId: DocumentReference;  // Reference to Description
    discussionId: DocumentReference;  // Reference to Discussion
    commentIds: DocumentReference[];  // Reference to Comment
    initialGraph: DocumentReference; // Reference to Graph
    goalGraph: DocumentReference; // Reference to Graph
    hint: string[];
    dateCreated: Timestamp;
}

export interface Graph extends GeneralObject {
    nodes: string[];
    edges: Edge[];
}

interface Edge {
    source: string;
    target: string;
}
