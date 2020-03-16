import * as Dict from './Types';

export const ego: Dict.Pronoun = {
    partOfSpeech: 'pronoun',
    english: 'I',
    dictionaryForm: 'ego',
    singular: {
        nom: 'ego',
        acc: 'mē',
        gen: 'meī',
        dat: 'mihī',
        abl: 'mē'
    },
    plural: {
        nom: 'nōs',
        acc: 'nōs',
        gen: 'nostrī/nostrum',
        dat: 'nōbīs',
        abl: 'nōbīs'
    }
}

export const is: Dict.Pronoun = {
    partOfSpeech: 'pronoun',
    english: 'he',
    dictionaryForm: 'is',
    singular: {
        nom: 'is',
        acc: 'eum',
        gen: 'eius',
        dat: 'eī',
        abl: 'eō'
    },
    plural: {
        nom: 'iī/eī/ī',
        acc: 'eōs',
        gen: 'eōrum',
        dat: 'eīs/iīs',
        abl: 'eīs/iīs'
    }
}

export const ea: Dict.Pronoun = {
    partOfSpeech: 'pronoun',
    english: 'she',
    dictionaryForm: 'ea',
    singular: {
        nom: 'ea',
        acc: 'eam',
        gen: 'eius',
        dat: 'eī',
        abl: 'eā'
    },
    plural: {
        nom: 'eae',
        acc: 'eās',
        gen: 'eārum',
        dat: 'eīs/iīs',
        abl: 'eīs/iīs'
    }
}

export const id: Dict.Pronoun = {
    partOfSpeech: 'pronoun',
    english: 'it',
    dictionaryForm: 'id',
    singular: {
        nom: 'id',
        acc: 'id',
        gen: 'eius',
        dat: 'eī',
        abl: 'eō'
    },
    plural: {
        nom: 'ea',
        acc: 'ea',
        gen: 'eōrum',
        dat: 'eīs/iīs',
        abl: 'eīs/iīs'
    }
}

export const tu: Dict.Pronoun = {
    partOfSpeech: 'pronoun',
    english: 'you',
    dictionaryForm: 'tū',
    singular: {
        nom: 'tū',
        acc: 'tē',
        gen: 'tui',
        dat: 'tibi',
        abl: 'tē'
    },
    plural: {
        nom: 'vōs',
        acc: 'vōs',
        gen: 'vestrī/vestrum',
        dat: 'vōbīs',
        abl: 'vōbīs'
    }
}

export const esse: Dict.Verb = {
    partOfSpeech: 'verb',
    dictionaryForm: 'sum, esse',
    inifinitive: 'esse',
    active: {
        indicative: {
            s1: 'sum',
            s2: 'es',
            s3: 'est',
            p1: 'sumus',
            p2: 'estis',
            p3: 'sunt',
        }
    }
}