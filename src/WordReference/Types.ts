
export interface Pronoun extends DictionaryForm {
    partOfSpeech: 'pronoun',
    english: string,
    singular: {
        nom: string,
        acc: string,
        gen: string,
        dat: string,
        abl: string
    },
    plural: {
        nom: string,
        acc: string,
        gen: string,
        dat: string,
        abl: string
    }
};

export type Genitive =
    | { ending: '-ae', declension: 1 }
    | { ending: '-ī', declension: 2 }
    | { ending: '-is', declension: 3 }
    | { ending: '-ūs', declension: 4 }
    | { ending: '-eī', declension: 5 }

export interface Noun extends DictionaryForm {
    partOfSpeech: 'noun',
    english: string,
    gender: 'masc' | 'fem' | 'neut',
    declension: 1 | 2 | 3 | 4,
    singular: {
        nom: string,
        acc: string,
        gen: string,
        dat: string,
        abl: string
    },
    plural: {
        nom: string,
        acc: string,
        gen: string,
        dat: string,
        abl: string
    }
};

export interface Adjective extends DictionaryForm {
    partOfSpeech: 'adjective',
};

export interface Verb extends DictionaryForm {
    partOfSpeech: 'verb',
    inifinitive: string,
    conjugation: 1 | 2 | 3 | 4 | 'mixed' | 'irregular',
    active: {
        indicative: {
            s1: string,
            s2: string,
            s3: string,
            p1: string,
            p2: string,
            p3: string,
        }
    }
}

export interface Adverb extends DictionaryForm {
    partOfSpeech: 'adverb',
    form: string,
};

export interface DictionaryForm {
    partOfSpeech: string,
    dictionaryForm: string,
};

export function isPronoun(form: DictionaryForm): form is Pronoun {
    return form.partOfSpeech === 'pronoun';
}

export function isVerb(form: DictionaryForm): form is Verb {
    return form.partOfSpeech === 'verb';
}