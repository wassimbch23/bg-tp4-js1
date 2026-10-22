"use strict";

// Déclaration d'un tableau nommé "Etudiants" contenant 3 étudiants. (vue dans le slide 39)
let Etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Declaration d'un objet nommé "Etudiant". (vue dans le slide 40)
const Etudiant = {
    nom : "John",
    prenom : "Doe",
    age : 30
}

// Declaration d'un tableau d'objet nommé "ListeEtudiants". (vue dans le slide 41)
const ListeEtudiants = [
    {
        nom: "nom1",
        prenom: "prenom1",
        age: "21"
    },

    {  
        nom: "nom2",
        prenom: "prenom2",
        age: "22"
    },

    {
        nom: "nom3",
        prenom: "prenom3",
        age: "23"
    }
]

// Déclaration des fonctions f1,f2,f3 sans paramétres. (vue dans le slide 46)

function f1() {
    // Boucle "for" pour parcourir et afficher les 3 étudiants du tableau un par un. (vue dans le slide 45)
    for(let i=0; i<=2; i++) {
        console.log(Etudiants[i]);
    }
}

function f2() {
    // Affichage de l'objet.
    console.log(Etudiant);
}

function f3() {
    // Boucle "for" pour parcourir et afficher les 3 étudiants du tableau d'objet un par un. (vue dans le slide 45)
    for(let i=0; i<=2; i++) {
        console.log(ListeEtudiants[i].nom + "-" + ListeEtudiants[i].prenom + "-" + ListeEtudiants[i].age);
    }
}