import { renderForm } from '../WordReference';
import { Question } from './Types';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

export interface QuestionRenderProps {
    currentQuestion: Question,
    provideAnswer: (answer: string, askedForHint: boolean) => void,
}

export const RenderQuestion: React.FC<QuestionRenderProps> = ({ currentQuestion, provideAnswer }) => {
    const [show, setShow] = useState(false);

    return <div>
        <div className='prompt'>
            {currentQuestion.question.replace('{}', '_______')}
        </div>
        <div className='translation'>
            ({currentQuestion.translation})
        </div>
        <div className='answers'>
            {currentQuestion.answers.map((answer, index) => {
                return <button key={index} onClick={() => provideAnswer(answer, show)}>{answer}</button>
            })}
        </div>
        <div>
            {show || <Button
                onClick={() => show || setShow(true)}>
                Show hint
            </Button>
            }
            {show && renderForm(currentQuestion.dictionaryForm)}
        </div>
    </div>
}