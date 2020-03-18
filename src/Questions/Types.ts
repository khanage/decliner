import { DictionaryForm } from '../WordReference';

export interface Question {
    question: string,
    translation: string,
    answer: string,
    explanation: string,
    dictionaryForm: DictionaryForm,
    answers: string[],
};