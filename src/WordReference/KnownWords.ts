import * as Dict from './Types';

export const silva: Dict.Noun = {
    partOfSpeech: 'noun',
    english: 'forest',
    dictionaryForm: 'silva, silvae',
    declension: 1,
    gender: 'fem',
    singular: {
        nom: 'silva',
        acc: 'silvam',
        gen: 'silvae',
        dat: 'silvae',
        abl: 'silvā'
    },
    plural: {
        nom: 'silvae',
        acc: 'silvas',
        gen: 'silvārum',
        dat: 'silvīs',
        abl: 'silvīs'
    }
}

export const caelum: Dict.Noun = {
    partOfSpeech: 'noun',
    english: 'sky, heaven',
    dictionaryForm: 'caelum, caelī',
    declension: 2,
    gender: 'neut',
    singular: {
        nom: 'caelum',
        acc: 'caelum',
        gen: 'caelae',
        dat: 'caelō',
        abl: 'caelō'
    },
    plural: {
        nom: 'caelī',
        acc: 'caelōs',
        gen: 'caelōrum',
        dat: 'caelīs',
        abl: 'caelīs'
    }
}

export const clāmor: Dict.Noun = {
    partOfSpeech: 'noun',
    english: 'shout',
    dictionaryForm: 'clāmor, clāmorīs',
    declension: 3,
    gender: 'masc',
    singular: {
        nom: 'clāmor',
        acc: 'clāmōrem',
        gen: 'clāmōrīs',
        dat: 'clāmōrī',
        abl: 'clāmōrē'
    },
    plural: {
        nom: 'clāmōrēs',
        acc: 'clāmōrēs',
        gen: 'clāmōrum',
        dat: 'clāmōribus',
        abl: 'clāmōrībus'
    },
}

export const foedus: Dict.Noun = {
    partOfSpeech: 'noun',
    english: 'treaty',
    dictionaryForm: 'foedus, foederis',
    declension: 4,
    gender: 'neut',
    singular: {
        nom: 'foedus',
        acc: 'foedus',
        gen: 'foederis',
        dat: 'foederī',
        abl: 'foedere'
    },
    plural: {
        nom: 'foedera',
        acc: 'foedera',
        gen: 'foederum',
        dat: 'foederibus',
        abl: 'foederibus'
    },
}

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
    conjugation: 'irregular',
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

export const habitāre: Dict.Verb = {
    partOfSpeech: 'verb',
    dictionaryForm: 'habitō, habitāre',
    inifinitive: 'habitāre',
    conjugation: 1,
    active: {
        indicative: {
            s1: 'habitō',
            s2: 'habitās',
            s3: 'habitat',
            p1: 'habitāmus',
            p2: 'habitātis',
            p3: 'habitant',
        }
    }
}

export const docēre: Dict.Verb = {
    partOfSpeech: 'verb',
    dictionaryForm: 'doceō, docēre',
    inifinitive: 'docēre',
    conjugation: 2,
    active: {
        indicative: {
            s1: 'doceō',
            s2: 'docēs',
            s3: 'docet',
            p1: 'docēmus',
            p2: 'docētis',
            p3: 'docent',
        }
    }
}

export const quaerere: Dict.Verb = {
    partOfSpeech: 'verb',
    dictionaryForm: 'quaerō, quaerere',
    inifinitive: 'quarerer',
    conjugation: 3,
    active: {
        indicative: {
            s1: 'quaerō',
            s2: 'quaeris',
            s3: 'quaerit',
            p1: 'quaerimus',
            p2: 'quaeritis',
            p3: 'quaerunt',
        }
    }
}

export const venīre: Dict.Verb = {
    partOfSpeech: 'verb',
    dictionaryForm: 'veniō, venīre',
    inifinitive: 'venīre',
    conjugation: 4,
    active: {
        indicative: {
            s1: 'veniō',
            s2: 'venīs',
            s3: 'venit',
            p1: 'venīmus',
            p2: 'venītis',
            p3: 'veniunt',
        }
    }
}