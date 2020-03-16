import { DictionaryForm, isPronoun, isVerb, Pronoun, Verb } from './Types';
import React from 'react';

export const renderVerb = (verb: Verb) =>
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th>{verb.dictionaryForm}</th>
                <th>Singular</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1st Person "I"</th>
                <td>{verb.active.indicative.s1}</td>
                <td>{verb.active.indicative.p1}</td>
            </tr>

            <tr>
                <th scope="row">2nd Person "You"</th>
                <td>{verb.active.indicative.s2}</td>
                <td>{verb.active.indicative.p2}</td>
            </tr>

            <tr>
                <th scope="row">3rd Person "They"</th>
                <td>{verb.active.indicative.s3}</td>
                <td>{verb.active.indicative.p3}</td>
            </tr>
        </tbody>
    </table>
    ;

export const renderPronoun = (pronoun: Pronoun) =>
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th>{pronoun.dictionaryForm}</th>
                <th>Singular</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Nominative</th>
                <td>{pronoun.singular.nom}</td>
                <td>{pronoun.plural.nom}</td>
            </tr>
            <tr>
                <th scope="row">Accusative</th>
                <td>{pronoun.singular.acc}</td>
                <td>{pronoun.plural.acc}</td>
            </tr>
            <tr>
                <th scope="row">Genitive</th>
                <td>{pronoun.singular.gen}</td>
                <td>{pronoun.plural.gen}</td>
            </tr>
            <tr>
                <th scope="row">Dative</th>
                <td>{pronoun.singular.dat}</td>
                <td>{pronoun.plural.dat}</td>
            </tr>
            <tr>
                <th scope="row">Ablative</th>
                <td>{pronoun.singular.abl}</td>
                <td>{pronoun.plural.abl}</td>
            </tr>
        </tbody>
    </table>

export const renderForm = (dictionaryForm: DictionaryForm) => {
    return <div className="Hint-table">
        {isVerb(dictionaryForm) && renderVerb(dictionaryForm)}
        {isPronoun(dictionaryForm) && renderPronoun(dictionaryForm)}
    </div>
}