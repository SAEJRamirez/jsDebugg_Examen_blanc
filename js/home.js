
//Variables et constantes
const container = document.querySelector('.container-card')
const students = [
    {
        name: "Julien",
        age: 35,
        section: "Web",
        year: 3,
        citation: "Dans la vie, soit t'es un lama, soit on te crache dessus."
    },
    {
        name: "Laura",
        age: 19,
        section: "Audio",
        year: 2,
        citation: "Le yoga, c'est comme un élastique, tu commences tendue, et tu finis toute détendue."
    },
    {
        name: "Daniel",
        age: 18,
        section: "Film",
        year: 1,
        citation: "Le cinéma c'est le reflet de l'âme du réalisateur."
    },
    {
        name: "Nina",
        age: 33,
        section: "Audio",
        year: 3,
        citation: "Il a pas dit bonjour, on lui a ***** sa mère."
    },
    {
        name: "Jeanine",
        age: 25,
        section: "Web",
        year: 1,
        citation: "Des fois je trouve sur le google dans les internets."
    },
    {
        name: "Aline",
        age: 29,
        section: "Film",
        year: 2,
        citation: "Je suis une actrice née pour jouer des rôles."
    },
]


//Fonction pour afficher tous les élèves
function displayAll(array) {

}

//Fonction pour trier les élèves selon leur âge
function displayByAge(array) {
    let newArray = array.sort()
    createElementToDisplay(newArray)
}

//Fonction pour trier les élèves selon leur section
function displayBySection(array) {

    createElementToDisplay("Ha oui faut un tableau ici")
}

//Fonction pour créer les cartes de chaque étudiant puis les implémenter dans le HTML
function createElementToDisplay(array) {
    container.innerHTML = ""
    array.forEach((student) => {
        //Création des éléments HTML
        let div = document.createElement('div')
        let name = document.createElement('h1')
        let age = document.createElement('p')
        let section = document.createElement('h3')
        let year = document.createElement('p')
        let citationContainer = document.createElement('p')
        let citation = document.createElement('i')

        //Ajout des différentes classes


        //Ajout des textes dans les éléments HTML


        //Insertion des éléments dans la div


        //Insertion de la div dans le conteneur "container-card"
        container.appendChild(div)
    })
}


