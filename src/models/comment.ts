export default interface Comment {
    id?: string;
    userId: string;  // Reference to User
    message: string;
    upVotes: number;
}
