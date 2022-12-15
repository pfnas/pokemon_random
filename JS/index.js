// Ecoute du bouton avec l'id 
 let button = document.getElementById("button")
 let image = document.getElementById("image")
let pokeName  = document.getElementById("name")
let pokeNumber= document.getElementById("number")
let speciesPokemon = document.getElementById("species")
//  Création de la fonction changePokemon
const changePokemon  = async () => {
    // Recuperation de facon aléatoire un pokemon
    // Math.ceil permet d'englober les chiffres
    let randomNumber = (Math.ceil(Math.random() * 150)+1)//random renvoit un nombre entre [0 et 1]*150
    let requestString =(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    let data = await fetch(requestString)
   
    let response= await data.json();
    image.src = response.sprites.front_default;
    pokeNumber.textContent=`Number: #${response.id}`;
    pokeName.textContent=`#${response.name}`;
    // speciesPokemon.textContent=`Type of Pokémon : ${response.species.name}`
   
    console.log(response)
}
changePokemon()

//  au click appel a la fonction "changePokemon"
button.addEventListener("click", changePokemon)