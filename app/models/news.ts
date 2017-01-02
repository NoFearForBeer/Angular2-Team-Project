import { Comment } from './comment';

export class News {
    id: number;
    title: string;
    content: string;
    createdOn: Date;
    comments: Comment[];
}
