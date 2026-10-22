"use strict";

// Déclaration d'un tableau d'objet nommé "Students". (vue dans le slide 41) 
const Students = [
    { id: 1000, prenom: "JOHN",   nom: "DOE",     note: 14, autre: 5 },
    { id: 2000, prenom: "BOB",    nom: "CARLTON", note: 7,  autre: 1 },
    { id: 3000, prenom: "RAYANE", nom: "SMITH",   note: 13, autre: 3 }
]

// Déclaration d'une fonction B qui prend un seul paramètre (note) et retourne un booléen. (vue dans le slide 46)
function B(note) {
    return note >= 10;
}

// Déclaration d'une fonction A qui parcourt les étudiants, appelle la fonction B et affiche le résultat.
function A() {
    // boucle "for" pour afficher la decision "admis" ou "ajourne" un par un. (vue dans le slide 45)
    for (let i = 0; i <=2; i++) {
        const admis = B(Students[i].note);
        console.log(Students[i].id + ": " + (admis ? "ADMIS" : "AJOURNÉ"));
    }
}