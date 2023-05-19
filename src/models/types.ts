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
    completedQuestions: DocumentReference;  // Reference to Question
}

export interface Article extends GeneralObject {
    authorId: DocumentReference;  // Reference to User
    dateCreated: Timestamp;
    title: string;
    description: string;
    commentIds: DocumentReference[];  // Reference to Comment
}

export interface Comment extends GeneralObject {
    userId: DocumentReference;  // Reference to User
    message: string;
    upVotes: number;
}

export interface Question extends GeneralObject {
    articleId: DocumentReference;  // Reference to Article
    initialGraph: DocumentReference; // Reference to Graph
    goalGraph: DocumentReference; // Reference to Graph
    hint: string[];
}

export interface Graph extends GeneralObject {
    nodes: string[];
    edges: Edge[];
}

interface Edge {
    source: string;
    target: string;
}
