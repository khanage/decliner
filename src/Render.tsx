import { Question } from './Questions';
import React from 'react';
import { Button } from 'react-bootstrap';

export const renderLoadingScreen = () =>
    <div>Loading...</div>
    ;

export const renderCorrectAnswer = (callback: () => void) =>
    <div>
        <p>Winner winner chicken dinner</p>
        <Button
            onClick={callback}
            variant='primary'>
            Next
        </Button>
    </div>
    ;

export const renderIncorrectAnswer = (currentQuestion: Question, callback: () => void) =>
    <div>
        <p>Incorrect: {currentQuestion.question.replace('{}', currentQuestion.answer)}</p>
        <p>{currentQuestion.explanation}</p>
        <Button onClick={() => callback()}>Next</Button>
    </div>
    ;

export const renderFinished = () =>
    <div>
        <p>Congratulations!</p>
        <Button onClick={() => window.location.reload()}>Reload</Button>
    </div>
    ;

export const renderLoadingFailed = () =>
    <div>
        <p>Failed to load!</p>
        <Button onClick={() => window.location.reload()}>Reload</Button>
    </div>
    ;

