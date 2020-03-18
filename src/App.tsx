import React from 'react';
import './App.css';
import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import { Question, loadQuestions, RenderQuestion } from './Questions';
import { renderCorrectAnswer, renderIncorrectAnswer, renderFinished, renderLoadingScreen, renderLoadingFailed } from './Render';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ExerciseSchema {
  states: {
    initial: {},
    loadingFailed: {},
    nothingselected: {},
    correctAnswer: {},
    incorrectAnswer: {},
    finished: {},
  },
};

type ExerciseContext = {
  questions: Question[],
};

interface SelectedEvent {
  type: 'SELECTED',
  answer: string,
  askedForHint: boolean,
  question: Question,
};

const selectedEvent = (question: Question, answer: string, askedForHint: boolean): SelectedEvent => ({
  type: 'SELECTED',
  answer,
  askedForHint,
  question,
});

function isSelectedEvent(event: ExerciseEvent): event is SelectedEvent {
  return event.type === 'SELECTED';
};

interface NextQuestionEvent {
  type: 'NEXT_QUESTION',
  currentQuestion: Question,
  askedForHint: boolean,
  correct: boolean,
};

const nextQuestion = (currentQuestion: Question, correct: boolean, askedForHint: boolean): NextQuestionEvent => ({
  type: 'NEXT_QUESTION',
  currentQuestion,
  askedForHint,
  correct
});

function isNextQuestionEvent(event: ExerciseEvent): event is NextQuestionEvent {
  return event.type === 'NEXT_QUESTION';
};

type ExerciseEvent =
  | SelectedEvent
  | NextQuestionEvent
  ;

const isCorrectAnswer = (_: ExerciseContext, { answer, question }: SelectedEvent) =>
  question.answer === answer;

const hasMoreQuestions = (context: ExerciseContext) =>
  context.questions.length > 1;

const transitionToNextQuestion = (context: ExerciseContext, event: ExerciseEvent): void => {
  if (isNextQuestionEvent(event)) {
    console.trace(context.questions);
    context.questions.shift();
    if (event.correct) {
      assign({ questions: context.questions });
    } else {
      assign({ questions: context.questions.push(event.currentQuestion) });
    }
  }
};

const exerciseMachine = Machine<ExerciseContext, ExerciseSchema, ExerciseEvent>({
  id: 'exercise',
  initial: 'initial',
  context: { questions: [] },

  states: {
    initial: {
      invoke: {
        id: 'loadQuestions',
        src: (context, event) => loadQuestions(),
        onDone: {
          target: 'nothingselected',
          actions: assign({ questions: (_, event) => event.data })
        },
        onError: {
          target: 'loadingFailed',
        }
      }
    },
    loadingFailed: {},

    nothingselected: {
      on: {
        SELECTED: [
          {
            target: 'correctAnswer',
            cond: isCorrectAnswer,
          },
          { target: 'incorrectAnswer' },
        ]
      }
    },

    correctAnswer: {
      onExit: transitionToNextQuestion,
      on: {
        NEXT_QUESTION: [
          {
            target: 'nothingselected',
            cond: hasMoreQuestions,
          },
          { target: 'finished' },
        ]
      }
    },

    incorrectAnswer: {
      onExit: transitionToNextQuestion,
      on: {
        NEXT_QUESTION: 'nothingselected',
      }
    },

    finished: {}
  },
});

const App: React.FC = () => {
  const [current, send] = useMachine(exerciseMachine);
  const currentQuestion = current.context.questions[0];

  return (
    <div className="App">
      <header className="App-header">
        {current.matches('nothingselected') &&
          <RenderQuestion
            currentQuestion={currentQuestion}
            provideAnswer={(answer, askedForHint) => send(selectedEvent(currentQuestion, answer, askedForHint))}
          />
        }
        {current.matches('correctAnswer') && renderCorrectAnswer(
          () => send(nextQuestion(currentQuestion, true, current.event.askedForHint))
        )}
        {current.matches('incorrectAnswer') &&
          renderIncorrectAnswer(
            currentQuestion,
            () => send(nextQuestion(currentQuestion, false, current.event.askedForHint))
          )
        }
        {current.matches('finished') && renderFinished()}
        {current.matches('initial') && renderLoadingScreen()}
        {current.matches('loadingFailed') && renderLoadingFailed()}
      </header>
    </div>
  );
}

export default App;