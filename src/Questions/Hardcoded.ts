import { esse, tu, ego, is, ea, id } from '../WordReference';
import { Question } from './Types';

export const loadQuestions = (): Promise<Question[]> => {
    return new Promise(resolve =>
        setTimeout(() => resolve(
            shuffle([
                feminae,
                tibi,
                mihi,
                femina,
                eīFeminine,
                eīMasculine,
                eīNeuter
            ])
        ), 2000));
}

function shuffle<A>(a: A[]): A[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateAnswers(answer: string, totalSize: number, ...samples: object[]): string[] {
    var values = shuffle(samples
        .flatMap(object => Object.values(object))
        .filter(value => value !== answer)
    ).slice(0, totalSize - 1);

    values.push(answer);

    return shuffle(values);
}

const feminae: Question = {
    question: 'Feminae laetae {}',
    explanation: 'Femin-ae is plural, so use the 3rd person plural',
    translation: "The women are happy",
    answer: esse.active.indicative.p3,
    dictionaryForm: esse,
    answers: generateAnswers(esse.active.indicative.p3, 4, esse.active.indicative)
};

const femina: Question = {
    question: 'Femina laeta {}',
    explanation: 'Femina is singular, so 3rd person singular form',
    translation: "The woman is happy",
    answer: esse.active.indicative.s3,
    dictionaryForm: esse,
    answers: generateAnswers(esse.active.indicative.s3, 4, esse.active.indicative)
}

const mihi: Question = {
    question: 'Marcus gladium {} dat',
    explanation: 'Use the dative of `ego` as it is the indirect beneficiary',
    translation: "Marcus gives the sword to me",
    dictionaryForm: ego,
    answer: ego.singular.dat,
    answers: generateAnswers(ego.singular.dat, 4, ego.singular, ego.plural),
};

const tibi: Question = {
    question: 'Marcus gladium {} dat',
    explanation: 'Use the dative of `tu` as it is the indirect beneficiary',
    translation: "Marcus gives the sword to you",
    dictionaryForm: tu,
    answer: tu.singular.dat,
    answers: generateAnswers(tu.singular.dat, 4, tu.singular, tu.plural),
};

const eīMasculine: Question = {
    question: 'Marcus gladium {} dat',
    explanation: 'Use the dative of `is` as it is the indirect beneficiary',
    translation: "Marcus gives the sword to him",
    dictionaryForm: is,
    answer: is.singular.dat,
    answers: generateAnswers(is.singular.dat, 4, is.singular, is.plural),
};

const eīFeminine: Question = {
    question: 'Marcus gladium {} dat',
    explanation: 'Use the dative of `ea` as it is the indirect beneficiary',
    translation: "Marcus gives the sword to her",
    dictionaryForm: ea,
    answer: ea.singular.dat,
    answers: generateAnswers(ea.singular.dat, 4, ea.singular, ea.plural),
};

const eīNeuter: Question = {
    question: 'Marcus gladium {} dat',
    explanation: 'Use the dative of `id` as it is the indirect beneficiary',
    translation: "Marcus gives the sword to it",
    dictionaryForm: id,
    answer: id.singular.dat,
    answers: generateAnswers(id.singular.dat, 4, id.singular, id.plural),
};