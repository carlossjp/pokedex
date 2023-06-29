
const apiURL = 'https://pokeapi.co/api/v2/pokemon/'
const inputName = document.getElementById ('inputName')
const bttnBuscar = document.getElementById ('bttnBuscar')
const nombrePokemon = document.getElementById ('name-pokemon'); 
const idPokemon = document.getElementById ('id-pokemon');
const imgPokemon = document.getElementById ('img-pokemon');
const typePokemon = document.getElementById ('type-pokemon');
const statsPokemon = document.getElementById ('stats-pokemon');
const abilityPokemon = document.getElementById ('abilty-pokemon')

bttnBuscar.addEventListener ('click', cargarPokemon);

function cargarPokemon () {

    window.fetch (`${apiURL}${inputName.value.toLowerCase()}`)

    .then (datos => {
        if (datos.status === 404){
            alert ('este pokemon no esta disponible')
        } else {
            return datos.json()
        }
    })

    .then (response => mostrarPokemon (response))

}

function mostrarPokemon (datos) {

    nombrePokemon.textContent = datos.name.toUpperCase();
    idPokemon.textContent = (`# ${datos.id}`)
    imgPokemon.setAttribute ('src', datos.sprites.front_default);

    const {types} = datos;
    pokemonDeTipo (types)

        function pokemonDeTipo (types) {
            typePokemon.innerHTML = '';
            types.forEach(i => {
                const typeTextElement = document.createElement("div");
                typeTextElement.textContent = i.type.name;
                typePokemon.appendChild(typeTextElement);
            })
        }

    const {stats} = datos;
    pokemonStats (stats)

        function pokemonStats (stats) {
            statsPokemon.innerHTML = '';
            stats.forEach (i => {
                const statElement = document.createElement("div");
                const statElementName = document.createElement("div");
                const statElementAmount = document.createElement("div");
                statElementName.textContent = i.stat.name;
                statElementAmount.textContent = i.base_stat;
                statElement.append(statElementName);
                statElement.append(statElementAmount);
                statsPokemon.append(statElement);
            }); 
        }


    const {abilities} = datos;
    pokemonAbilidades (abilities)

        function pokemonAbilidades (abilities) {
            abilityPokemon.innerHTML = '';        
            abilities.forEach(i => {
                const typeTextElement = document.createElement("div");
                typeTextElement.textContent = i.ability.name;
                abilityPokemon.append(typeTextElement);
            })
        }

}