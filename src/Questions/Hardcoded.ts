import { foedus, quaerere, docēre, habitāre, silva, esse, ego, tu, ea, is, id, venīre, caelum, clāmor } from '../WordReference';
import { Question, ExerciseSet } from './Types';

export const loadExercises = (): Promise<ExerciseSet[]> => {
    return new Promise(resolve =>
        setTimeout(() => resolve([
            { name: 'esse', questions: shuffle([femina, feminae]) },
            { name: 'Dative pronouns', questions: shuffle([tibi, mihi, eīFeminine, eīMasculine, eīNeuter]) },
            { name: 'The Forest', questions: shuffle([theForestIsSilent, youWalkToTheForest, childrenOfTheForest, iGiveBlessingsToTheForest, youRestInTheForest]) },
            { name: 'Forests', questions: shuffle([theForestsAreBeautiful, theArmySetsFireToTheForests, childrenOfTheForests, iGiveBlessingsToTheForests, youRestInTheForests]) },
            { name: 'Sky/Heaven', questions: shuffle([theSkyIsBeautiful, lookToTheSky, godsOfHeaven, blessingsToTheSky, restInHeaven]) },
            { name: 'Skies', questions: shuffle([theSkiesAreBeautiful, lookToTheSkies, godsOfTheSkies, blessingsToTheSkies, restInTheSkiesOfJupiter]) },
            { name: 'shout', questions: shuffle([theShoutIsLoud, hearTheShout, soundOfTheShout, youWillBeFrightenedOfMyShout, openDoorsWithAShout]) },
            { name: 'shouts', questions: shuffle([theShoutsAreLoud, hearTheShouts, soundOfTheShouts, youWillBeFrightenedOfMyShouts, openDoorsWithAShouts]) },
            { name: 'Treaty', questions: shuffle([theTreatyIsFair, readTheTreaty, seeTheWordsOfTheTreaty, writeTheWordForTheTreaty, safeByMeansOfTheTreaty]) },
            { name: 'Treaties', questions: shuffle([theTreatiesAreFair, readTheTreaties, seeTheWordsOfTheTreaties, writeTheWordForTheTreaties, safeByMeansOfTheTreaties]) },
            { name: 'To inhabit', questions: shuffle([iInhabit, youInhabit, sheInhabits, weInhabit, yallInhabit, theyInhabit]) },
            { name: 'To teach', questions: shuffle([iTeach, youTeach, sheTeaches, weTeach, yallTeach, theyTeach]) },
            { name: 'To enquire', questions: shuffle([iEnquire, youEnquire, sheEnquires, weEnquire, yallEnquire, theyEnquire]) },
            { name: 'To come', questions: shuffle([iCome, youCome, sheComes, weCome, yallCome, theyCome]) },
        ]), 800)
    );
};

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

const NominativeAdjective = { explanation: 'to be is an intransitive verb so use the nominative' };
const Accusative = { explanation: 'The thing that is the direct target of an action uses the accusative' };
const Genitive = { explanation: '"Of" or "Of the" is the usual translation of the genitive' };
const Dative = { explanation: 'The dative is used as the indirect object of the action' };
const AblativeInstrumental = { explanation: 'Use the ablative when the noun in question is the means or instrument of an action' };

const iCome: Question = {
    question: '{}',
    explanation: 'singular 1st person is used for "I"',
    translation: 'I come',
    answer: venīre.active.indicative.s1,
    dictionaryForm: venīre,
    answers: generateAnswers(venīre.active.indicative.s1, 4, venīre.active.indicative)
}

const youCome: Question = {
    question: '{}',
    explanation: 'singular 2nd person is used for "You"',
    translation: 'You come',
    answer: venīre.active.indicative.s2,
    dictionaryForm: venīre,
    answers: generateAnswers(venīre.active.indicative.s2, 4, venīre.active.indicative)
}

const sheComes: Question = {
    question: '{}',
    explanation: 'singular 3rd person is used for "She"',
    translation: 'She comees',
    answer: venīre.active.indicative.s3,
    dictionaryForm: venīre,
    answers: generateAnswers(venīre.active.indicative.s3, 4, venīre.active.indicative)
}

const weCome: Question = {
    question: '{}',
    explanation: 'plural 1st person is used for "We"',
    translation: 'We come',
    answer: venīre.active.indicative.p1,
    dictionaryForm: venīre,
    answers: generateAnswers(venīre.active.indicative.p1, 4, venīre.active.indicative)
}

const yallCome: Question = {
    question: '{}',
    explanation: 'plural 2nd person is used for "You all"/"y\'all"',
    translation: 'Y\'all come',
    answer: venīre.active.indicative.p2,
    dictionaryForm: venīre,
    answers: generateAnswers(venīre.active.indicative.p2, 4, venīre.active.indicative)
}

const theyCome: Question = {
    question: '{}',
    explanation: 'plural 3rd person is used for "they"',
    translation: 'They come',
    answer: venīre.active.indicative.p3,
    dictionaryForm: venīre,
    answers: generateAnswers(venīre.active.indicative.p3, 4, venīre.active.indicative)
}

const iEnquire: Question = {
    question: '{}',
    explanation: 'singular 1st person is used for "I"',
    translation: 'I enquire',
    answer: quaerere.active.indicative.s1,
    dictionaryForm: quaerere,
    answers: generateAnswers(quaerere.active.indicative.s1, 4, quaerere.active.indicative)
}

const youEnquire: Question = {
    question: '{}',
    explanation: 'singular 2nd person is used for "You"',
    translation: 'You enquire',
    answer: quaerere.active.indicative.s2,
    dictionaryForm: quaerere,
    answers: generateAnswers(quaerere.active.indicative.s2, 4, quaerere.active.indicative)
}

const sheEnquires: Question = {
    question: '{}',
    explanation: 'singular 3rd person is used for "She"',
    translation: 'She enquirees',
    answer: quaerere.active.indicative.s3,
    dictionaryForm: quaerere,
    answers: generateAnswers(quaerere.active.indicative.s3, 4, quaerere.active.indicative)
}

const weEnquire: Question = {
    question: '{}',
    explanation: 'plural 1st person is used for "We"',
    translation: 'We enquire',
    answer: quaerere.active.indicative.p1,
    dictionaryForm: quaerere,
    answers: generateAnswers(quaerere.active.indicative.p1, 4, quaerere.active.indicative)
}

const yallEnquire: Question = {
    question: '{}',
    explanation: 'plural 2nd person is used for "You all"/"y\'all"',
    translation: 'Y\'all enquire',
    answer: quaerere.active.indicative.p2,
    dictionaryForm: quaerere,
    answers: generateAnswers(quaerere.active.indicative.p2, 4, quaerere.active.indicative)
}

const theyEnquire: Question = {
    question: '{}',
    explanation: 'plural 3rd person is used for "they"',
    translation: 'They enquire',
    answer: quaerere.active.indicative.p3,
    dictionaryForm: quaerere,
    answers: generateAnswers(quaerere.active.indicative.p3, 4, quaerere.active.indicative)
}

const iTeach: Question = {
    question: '{}',
    explanation: 'singular 1st person is used for "I"',
    translation: 'I teach',
    answer: docēre.active.indicative.s1,
    dictionaryForm: docēre,
    answers: generateAnswers(docēre.active.indicative.s1, 4, docēre.active.indicative)
}

const youTeach: Question = {
    question: '{}',
    explanation: 'singular 2nd person is used for "You"',
    translation: 'You teach',
    answer: docēre.active.indicative.s2,
    dictionaryForm: docēre,
    answers: generateAnswers(docēre.active.indicative.s2, 4, docēre.active.indicative)
}

const sheTeaches: Question = {
    question: '{}',
    explanation: 'singular 3rd person is used for "She"',
    translation: 'She teaches',
    answer: docēre.active.indicative.s3,
    dictionaryForm: docēre,
    answers: generateAnswers(docēre.active.indicative.s3, 4, docēre.active.indicative)
}

const weTeach: Question = {
    question: '{}',
    explanation: 'plural 1st person is used for "We"',
    translation: 'We teach',
    answer: docēre.active.indicative.p1,
    dictionaryForm: docēre,
    answers: generateAnswers(docēre.active.indicative.p1, 4, docēre.active.indicative)
}

const yallTeach: Question = {
    question: '{}',
    explanation: 'plural 2nd person is used for "You all"/"y\'all"',
    translation: 'Y\'all teach',
    answer: docēre.active.indicative.p2,
    dictionaryForm: docēre,
    answers: generateAnswers(docēre.active.indicative.p2, 4, docēre.active.indicative)
}

const theyTeach: Question = {
    question: '{}',
    explanation: 'plural 3rd person is used for "they"',
    translation: 'They teach',
    answer: docēre.active.indicative.p3,
    dictionaryForm: docēre,
    answers: generateAnswers(docēre.active.indicative.p3, 4, docēre.active.indicative)
}

const iInhabit: Question = {
    question: 'domī {}',
    explanation: 'singular 1st person is used for "I"',
    translation: 'I live in the house',
    answer: habitāre.active.indicative.s1,
    dictionaryForm: habitāre,
    answers: generateAnswers(habitāre.active.indicative.s1, 4, habitāre.active.indicative)
}

const youInhabit: Question = {
    question: 'domī {}',
    explanation: 'singular 2nd person is used for "You"',
    translation: 'You live in the house',
    answer: habitāre.active.indicative.s2,
    dictionaryForm: habitāre,
    answers: generateAnswers(habitāre.active.indicative.s2, 4, habitāre.active.indicative)
}

const sheInhabits: Question = {
    question: 'domī {}',
    explanation: 'singular 3rd person is used for "She"',
    translation: 'She lives in the house',
    answer: habitāre.active.indicative.s3,
    dictionaryForm: habitāre,
    answers: generateAnswers(habitāre.active.indicative.s3, 4, habitāre.active.indicative)
}

const weInhabit: Question = {
    question: 'domī {}',
    explanation: 'plural 1st person is used for "We"',
    translation: 'We live in the house',
    answer: habitāre.active.indicative.p1,
    dictionaryForm: habitāre,
    answers: generateAnswers(habitāre.active.indicative.p1, 4, habitāre.active.indicative)
}

const yallInhabit: Question = {
    question: 'domī {}',
    explanation: 'plural 2nd person is used for "You all"/"y\'all"',
    translation: 'Y\'all live in the house',
    answer: habitāre.active.indicative.p2,
    dictionaryForm: habitāre,
    answers: generateAnswers(habitāre.active.indicative.p2, 4, habitāre.active.indicative)
}

const theyInhabit: Question = {
    question: 'domī {}',
    explanation: 'plural 3rd person is used for "they"',
    translation: 'They live in the house',
    answer: habitāre.active.indicative.p3,
    dictionaryForm: habitāre,
    answers: generateAnswers(habitāre.active.indicative.p3, 4, habitāre.active.indicative)
}

const theForestsAreBeautiful: Question = {
    question: "{} pulchrae sunt",
    explanation: "'sunt' takes two nominatives",
    translation: "The forests are beautiful",
    answer: silva.plural.nom,
    dictionaryForm: silva,
    answers: generateAnswers(silva.plural.nom, 4, silva.plural)
};

const theArmySetsFireToTheForests: Question = {
    question: "exercitus {} incendit",
    explanation: 'The forests are the thing being set alight',
    translation: 'The army sets fire to the forests',
    answer: silva.plural.acc,
    dictionaryForm: silva,
    answers: generateAnswers(silva.plural.acc, 4, silva.plural)
};

const childrenOfTheForests: Question = {
    question: "puerī {}",
    explanation: 'the genitive is often translated as "of the"',
    translation: 'Children of the forests',
    answer: silva.plural.gen,
    dictionaryForm: silva,
    answers: generateAnswers(silva.plural.gen, 4, silva.plural)
};

const iGiveBlessingsToTheForests: Question = {
    question: "{} benedictiōnēs dō",
    explanation: '"to the ..." is translated with the dative case in latin',
    translation: 'I give blessings to the forests',
    answer: silva.plural.dat,
    dictionaryForm: silva,
    answers: generateAnswers(silva.plural.dat, 4, silva.plural)
};

const youRestInTheForests: Question = {
    question: "{} sedet",
    explanation: 'The ablative is used for location',
    translation: 'You rest in the forests',
    answer: silva.plural.abl,
    dictionaryForm: silva,
    answers: generateAnswers(silva.plural.abl, 4, silva.plural)
};

const theForestIsSilent: Question = {
    question: "{} silenta est",
    explanation: "'est' takes two nominatives",
    translation: "The forest is silent",
    answer: silva.singular.nom,
    dictionaryForm: silva,
    answers: generateAnswers(silva.singular.nom, 4, silva.singular)
};

const youWalkToTheForest: Question = {
    question: "ad {} ambulat",
    explanation: '"ad" takes the accusative',
    translation: "You walk to the forest",
    answer: silva.singular.acc,
    dictionaryForm: silva,
    answers: generateAnswers(silva.singular.acc, 4, silva.singular)
};

const childrenOfTheForest: Question = {
    question: "puerī {}",
    explanation: 'the genitive is often translated as "of the"',
    translation: 'Children of the forest',
    answer: silva.singular.gen,
    dictionaryForm: silva,
    answers: generateAnswers(silva.singular.gen, 4, silva.singular)
};

const iGiveBlessingsToTheForest: Question = {
    question: "{} benedictiōnēs dō",
    explanation: '"to the ..." is translated with the dative case in latin',
    translation: 'I give blessings to the forest',
    answer: silva.singular.dat,
    dictionaryForm: silva,
    answers: generateAnswers(silva.singular.dat, 4, silva.singular)
};

const youRestInTheForest: Question = {
    question: "{} sedet",
    explanation: 'The ablative is used for location',
    translation: 'You rest in the forest',
    answer: silva.singular.abl,
    dictionaryForm: silva,
    answers: generateAnswers(silva.singular.abl, 4, silva.singular)
};

const theSkiesAreBeautiful: Question = {
    question: 'pulchra {} sunt',
    explanation: 'est only takes a nominative',
    translation: 'The sky is beautiful',
    answer: caelum.plural.nom,
    dictionaryForm: caelum,
    answers: generateAnswers(caelum.plural.nom, 4, caelum.plural)
}

const lookToTheSkies: Question = {
    question: 'ad {} vide',
    translation: 'Look ye to the sky',
    explanation: 'ad takes an accusative',
    answer: caelum.plural.acc,
    dictionaryForm: caelum,
    answers: generateAnswers(caelum.plural.acc, 4, caelum.plural)
}

const godsOfTheSkies: Question = {
    question: 'deī {}',
    translation: 'Gods of the skies',
    explanation: '"Of the" is the usual translation of the genitive',
    dictionaryForm: caelum,
    answer: caelum.plural.gen,
    answers: generateAnswers(caelum.plural.gen, 4, caelum.plural)
}

const blessingsToTheSkies: Question = {
    translation: 'You give a blessing to the skies',
    question: '{} benedictiōnem dās',
    explanation: 'The sky is the indirect object of the sentance',
    dictionaryForm: caelum,
    answer: caelum.plural.dat,
    answers: generateAnswers(caelum.plural.dat, 4, caelum.plural)
}

const restInTheSkiesOfJupiter: Question = {
    translation: 'Rest ye in the skies of jupiter',
    question: 'mane {} lovis',
    explanation: 'The location of the sentance uses the ablative',
    dictionaryForm: caelum,
    answer: caelum.plural.abl,
    answers: generateAnswers(caelum.plural.abl, 4, caelum.plural)
}

const theSkyIsBeautiful: Question = {
    question: 'pulchrum {} est',
    explanation: 'est only takes a nominative',
    translation: 'The sky is beautiful',
    answer: caelum.singular.nom,
    dictionaryForm: caelum,
    answers: generateAnswers(caelum.singular.nom, 4, caelum.singular)
};

const lookToTheSky: Question = {
    question: 'ad {} vide',
    translation: 'Look ye to the sky',
    explanation: 'ad takes an accusative',
    answer: caelum.singular.acc,
    dictionaryForm: caelum,
    answers: generateAnswers(caelum.singular.acc, 4, caelum.singular)
};

const godsOfHeaven: Question = {
    question: 'deī {}',
    translation: 'Gods of the sky',
    explanation: '"Of the" is the usual translation of the genetive',
    dictionaryForm: caelum,
    answer: caelum.singular.gen,
    answers: generateAnswers(caelum.singular.gen, 4, caelum.singular)
};

const blessingsToTheSky: Question = {
    translation: 'You give a blessing to the sky',
    question: '{} benedictiōnem dās',
    explanation: 'The sky is the indirect object of the sentance',
    dictionaryForm: caelum,
    answer: caelum.singular.dat,
    answers: generateAnswers(caelum.singular.dat, 4, caelum.singular)
};

const restInHeaven: Question = {
    translation: 'Rest ye in heaven',
    question: 'mane {}',
    explanation: 'The location of the sentance uses the ablative',
    dictionaryForm: caelum,
    answer: caelum.singular.abl,
    answers: generateAnswers(caelum.singular.abl, 4, caelum.singular)
};

const theShoutIsLoud: Question = {
    ...NominativeAdjective,
    translation: 'The shout is loud',
    question: '{} clārus est',
    dictionaryForm: clāmor,
    answer: clāmor.singular.nom,
    answers: generateAnswers(clāmor.singular.nom, 4, clāmor.singular)
};

const hearTheShout: Question = {
    ...Accusative,
    translation: 'I hear the shout',
    question: '{} audiō',
    dictionaryForm: clāmor,
    answer: clāmor.singular.acc,
    answers: generateAnswers(clāmor.singular.acc, 4, clāmor.singular)
};

const soundOfTheShout: Question = {
    ...Genitive,
    translation: 'Sound of the shout',
    question: 'sonus {}',
    dictionaryForm: clāmor,
    answer: clāmor.singular.gen,
    answers: generateAnswers(clāmor.singular.gen, 4, clāmor.singular)
};

const youWillBeFrightenedOfMyShout: Question = {
    ...Dative,
    translation: 'You will have been frightened of my shout',
    question: 'terrueris meus {}',
    dictionaryForm: clāmor,
    answer: clāmor.singular.dat,
    answers: generateAnswers(clāmor.singular.dat, 4, clāmor.singular)
};

const openDoorsWithAShout: Question = {
    ...AblativeInstrumental,
    translation: 'I open doors with a shout',
    question: 'aperiō iānuae {}',
    dictionaryForm: clāmor,
    answer: clāmor.singular.abl,
    answers: generateAnswers(clāmor.singular.abl, 4, clāmor.singular)
}
const theShoutsAreLoud: Question = {
    ...NominativeAdjective,
    translation: 'The shouts are loud',
    question: '{} clārīs sunt',
    dictionaryForm: clāmor,
    answer: clāmor.plural.nom,
    answers: generateAnswers(clāmor.plural.nom, 4, clāmor.plural)
};

const hearTheShouts: Question = {
    ...Accusative,
    translation: 'I hear the shouts',
    question: '{} audiō',
    dictionaryForm: clāmor,
    answer: clāmor.plural.acc,
    answers: generateAnswers(clāmor.plural.acc, 4, clāmor.plural)
};

const soundOfTheShouts: Question = {
    ...Genitive,
    translation: 'Sound of the shouts',
    question: 'sonus {}',
    dictionaryForm: clāmor,
    answer: clāmor.plural.gen,
    answers: generateAnswers(clāmor.plural.gen, 4, clāmor.plural)
};

const youWillBeFrightenedOfMyShouts: Question = {
    ...Dative,
    translation: 'You will have been frightened of my shouts',
    question: 'terrueris meus {}',
    dictionaryForm: clāmor,
    answer: clāmor.plural.dat,
    answers: generateAnswers(clāmor.plural.dat, 4, clāmor.plural)
};

const openDoorsWithAShouts: Question = {
    translation: 'I open doors with shouts',
    question: 'aperiō iānuae {}',
    explanation: 'Use the ablative when the noun in question is the means or instrument of an action',
    dictionaryForm: clāmor,
    answer: clāmor.plural.abl,
    answers: generateAnswers(clāmor.plural.abl, 4, clāmor.plural)
}

const theTreatyIsFair: Question = {
    ...NominativeAdjective,
    translation: 'The Treaty is fair',
    question: 'aequābilis {} est',
    dictionaryForm: foedus,
    answer: foedus.singular.nom,
    answers: generateAnswers(foedus.singular.nom, 4, foedus.singular)
}

const readTheTreaty: Question = {
    ...Accusative,
    translation: 'I read the Treaty',
    question: '{} legō',
    dictionaryForm: foedus,
    answer: foedus.singular.acc,
    answers: generateAnswers(foedus.singular.acc, 4, foedus.singular)
}

const seeTheWordsOfTheTreaty: Question = {
    ...Genitive,
    question: 'verba {} legō',
    translation: 'I read The Treaty words',
    dictionaryForm: foedus,
    answer: foedus.singular.gen,
    answers: generateAnswers(foedus.singular.gen, 4, foedus.singular)
}

const writeTheWordForTheTreaty: Question = {
    ...Dative,
    translation: 'I write the words for The Treaty',
    question: 'verba {} scrībō',
    dictionaryForm: foedus,
    answer: foedus.singular.dat,
    answers: generateAnswers(foedus.singular.dat, 4, foedus.singular)
}

const safeByMeansOfTheTreaty: Question = {
    ...AblativeInstrumental,
    translation: 'I am safe by means of The Treaty',
    question: '{} salvus sum',
    dictionaryForm: foedus,
    answer: foedus.singular.abl,
    answers: generateAnswers(foedus.singular.abl, 4, foedus.singular)
}

const theTreatiesAreFair: Question = {
    ...NominativeAdjective,
    translation: 'The Treaties are fair',
    question: 'aequābilēs {} est',
    dictionaryForm: foedus,
    answer: foedus.plural.nom,
    answers: generateAnswers(foedus.plural.nom, 4, foedus.plural)
}

const readTheTreaties: Question = {
    ...Accusative,
    translation: 'I read the Treaties',
    question: '{} legō',
    dictionaryForm: foedus,
    answer: foedus.plural.acc,
    answers: generateAnswers(foedus.plural.acc, 4, foedus.plural)
}

const seeTheWordsOfTheTreaties: Question = {
    ...Genitive,
    question: 'verba {} legō',
    translation: 'I read words of The Treaties',
    dictionaryForm: foedus,
    answer: foedus.plural.gen,
    answers: generateAnswers(foedus.plural.gen, 4, foedus.plural)
}

const writeTheWordForTheTreaties: Question = {
    ...Dative,
    translation: 'I write the words for The Treaties',
    question: 'verba {} scrībō',
    dictionaryForm: foedus,
    answer: foedus.plural.dat,
    answers: generateAnswers(foedus.plural.dat, 4, foedus.plural)
}

const safeByMeansOfTheTreaties: Question = {
    ...AblativeInstrumental,
    translation: 'I am safe by means of The Treaties',
    question: '{} salvus sum',
    dictionaryForm: foedus,
    answer: foedus.plural.abl,
    answers: generateAnswers(foedus.plural.abl, 4, foedus.plural)
}

/*






'the treaties are fair'
'i read the treaties'
'i see the words of the treaties'
'i write the words for the treaties'
'i am safe by means of the treaties'
*/



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
};

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