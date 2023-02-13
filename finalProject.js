const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");
const pokemonRival = document.querySelector(".pokemon-rival-container")
const vs = document.querySelector(".result");
let counter = -1;
let power1 = 0;
let power2 = 0;


let pokemonList = [];
button.addEventListener("click", async(e)=>{
e.preventDefault();

counter += 1;
if(counter > 0){
    clear();
await getPokemon(input.value);
console.log(power1);

let random = Math.floor(Math.random() * 1008);
await getPokemon2(random);
console.log(power2);
if(power1 > power2){
    const h1 = document.createElement("h1");
    h1.textContent = "You win!";
    vs.appendChild(h1);
}else if(power1 < power2){
    const h1 = document.createElement("h1");
    h1.textContent = "You lose!"
    vs.appendChild(h1);
}else{
    const h1 = document.createElement("h1");
    h1.textContent = "It is a tie!"
    vs.appendChild(h1);
}





}});


function output(pokemon){
    
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const h4 = document.createElement("h4");
    h4.textContent = `Power: ${pokemon.base_experience}`;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);

    pokemonContainer.appendChild(div);
    

}
function output2(pokemon){
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const h4 = document.createElement("h4");
    h4.textContent = `Power: ${pokemon.base_experience}`;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);

    pokemonRival.appendChild(div);
    let pokemonRival2 = document.querySelector("#product");
    pokemonRival2.value = pokemon.name;
    
}
async function getPokemon (pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    let results = null;
    const response = await fetch(url);
    if (response.ok)
    {
        let data = await response.json();
        pokemon = data;
        console.log(pokemon);
        // output(templeList);
        power1 = pokemon.base_experience;
        output(pokemon);
        
    }
}
async function getPokemon2 (pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    let results = null;
    const response = await fetch(url);
    if (response.ok)
    {
        let data = await response.json();
        pokemon = data;
        console.log(pokemon);
        // output(templeList);
        power2 = pokemon.base_experience;
        output2(pokemon);
        
    }
}

function clear(){
    let element = document.querySelector(".pokemon-container");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }

    let element2 = document.querySelector(".pokemon-rival-container");
    while (element2.firstChild) {
    element2.removeChild(element2.firstChild);

    let element3 = document.querySelector(".result");
    while (element3.firstChild) {
    element3.removeChild(element3.firstChild);
}}}
