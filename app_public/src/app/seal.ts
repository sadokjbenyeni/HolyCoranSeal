import { Chapter } from './chapter';

export class Seal {
    _id: string;
    title: string;
    creationDate: Date;
    closingDate: Date;
    progress: number;
    chapters: Chapter[];
}