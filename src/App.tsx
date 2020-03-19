import React from 'react';
import './App.css';
import { Machine, assign, AssignAction } from 'xstate';
import { useMachine } from '@xstate/react';
import { Question, RenderQuestion, loadExercises, ExerciseSet } from './Questions';
import { renderCorrectAnswer, renderIncorrectAnswer, renderFinished, renderLoadingScreen, renderLoadingFailed } from './Render';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ExerciseSchema {
  states: {
    initial: {},
    loadingFailed: {},
    noExerciseSelected: {},
    exerciseSelected: {
      states: {
        nothingselected: {},
        correctAnswer: {},
        incorrectAnswer: {},
      }
    },
  },
};

type ExerciseContext = {
  questions: Question[],
  exercises: ExerciseSet[],
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

interface ExerciseSelectedEvent {
  type: 'EXERCISE_SELECTED',
  currentExercise: ExerciseSet,
}

const exerciseSelected = (exercise: ExerciseSet): ExerciseSelectedEvent => ({
  type: 'EXERCISE_SELECTED',
  currentExercise: exercise,
});

function isExerciseSelectedEvent(event: ExerciseEvent): event is ExerciseSelectedEvent {
  return event.type === 'EXERCISE_SELECTED';
}

type ExerciseEvent =
  | SelectedEvent
  | NextQuestionEvent
  | ExerciseSelectedEvent
  ;

const isCorrectAnswer = (_: ExerciseContext, { answer, question }: SelectedEvent) =>
  question.answer === answer;

const hasMoreQuestions = (context: ExerciseContext) =>
  context.questions.length > 1;

const transitionToNextQuestion = assign((context: ExerciseContext, event: ExerciseEvent) => {
  if (isNextQuestionEvent(event)) {
    let updatedQuestions = Object
      .assign([], context.questions);

    updatedQuestions.shift();

    if (!event.correct) {
      updatedQuestions.push(event.currentQuestion);
    }

    return { questions: updatedQuestions };
  } else {
    console.error('Bad messsage: {event}, expecting a next question event')
    return {};
  }
});

const selectExercise: AssignAction<ExerciseContext, ExerciseEvent> = assign((_: ExerciseContext, event: ExerciseEvent) =>
  isExerciseSelectedEvent(event)
    ? { questions: event.currentExercise.questions }
    : {}
);

const exerciseMachine = Machine<ExerciseContext, ExerciseSchema, ExerciseEvent>({
  id: 'exercise',
  initial: 'initial',
  context: { questions: [], exercises: [], },

  states: {
    initial: {
      invoke: {
        id: 'loadExercises',
        src: (context, event) => loadExercises(),
        onDone: {
          target: '#noExerciseSelected',
          actions: assign({ exercises: (_, event) => event.data })
        },
        onError: {
          target: 'loadingFailed',
        }
      }
    },
    loadingFailed: {},

    noExerciseSelected: {
      id: 'noExerciseSelected',
      onExit: selectExercise,
      on: {
        EXERCISE_SELECTED: 'exerciseSelected',
      }
    },

    exerciseSelected: {
      initial: 'nothingselected',
      states: {
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
              { target: '#noExerciseSelected' },
            ]
          }
        },

        incorrectAnswer: {
          onExit: transitionToNextQuestion,
          on: {
            NEXT_QUESTION: 'nothingselected',
          }
        },
      }
    },
  },
});

interface ExercisesProps {
  exercises: ExerciseSet[],
  selectExercise: (exercise: ExerciseSet) => void,
};

const RenderExercises: React.FC<ExercisesProps> = ({ exercises, selectExercise }) => {
  return <div>

    <div>Select an exercise</div>

    <ul>
      {exercises.map((exercise, index) => {
        return <li key={index}>
          <button
            onClick={() => selectExercise(exercise)}>
            {exercise.name}
          </button>
        </li>
      })}
    </ul>
  </div>;
};

const App: React.FC = () => {
  const [current, send] = useMachine(exerciseMachine);
  const currentQuestion = current.context.questions[0];
  const currentEvent = current.event;

  return (
    <div className="App">
      <header className="App-header">
        {current.matches('exerciseSelected.nothingselected') &&
          <RenderQuestion
            currentQuestion={currentQuestion}
            provideAnswer={(answer, askedForHint) => send(selectedEvent(currentQuestion, answer, askedForHint))}
          />
        }
        {current.matches('exerciseSelected.correctAnswer')
          && isSelectedEvent(currentEvent)
          && renderCorrectAnswer(
            () => send(nextQuestion(currentQuestion, true, currentEvent.askedForHint))
          )}
        {current.matches('exerciseSelected.incorrectAnswer')
          && isSelectedEvent(currentEvent)
          && renderIncorrectAnswer(
            currentQuestion,
            () => send(nextQuestion(currentQuestion, false, currentEvent.askedForHint))
          )
        }
        {current.matches('noExerciseSelected') &&
          <RenderExercises
            exercises={current.context.exercises}
            selectExercise={exercise => send(exerciseSelected(exercise))}
          />
        }
        {current.matches('finished') && renderFinished()}
        {current.matches('initial') && renderLoadingScreen()}
        {current.matches('loadingFailed') && renderLoadingFailed()}
      </header>
    </div>
  );
}

export default App;