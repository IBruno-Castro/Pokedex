//Pokémon data
const pokeName = document.querySelector('.pokeName');
const pokeID = document.querySelector('.pokeID');
const pokeImage = document.querySelector('.pokeImage');

const form = document.querySelector('form');
const input_search = document.querySelector('.search input');

const fetchPokemon = async (pokemon) => {
    const APIResponse = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = (await APIResponse).json()
    return data;
}

const renderPokemon = async (pokemon) => {
    pokeName.innerHTML = "Loading...";

    const data = await fetchPokemon(pokemon);

    if(data == 'Not Found'){
        pokeName.innerHTML = data.name;
        pokeID.innerHTML = "#" + data.id
        pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        console.log(data)
    } else {
        pokeName.innerHTML = 'Not found';
        pokeID.innerHTML = '???'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon((input_search.value).toLowerCase());
})