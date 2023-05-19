export default interface Article {
    id?: string;
    authorId: string;  // Reference to User
    dateCreated: Date;
    title: string;
    description: string;
    commentIds: string[];  // Reference to Comment
}
