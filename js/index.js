import FooterComponent from "./component/FooterComponent/FooterComponent.js";
import HeaderComponent from "./component/headerComponent/HeaderComponent.js";
import MainComponent from "./component/maincomponent/MainComponent.js";
import PokemonAllComponent from "./component/pokemonAllComponent/PokemonAllComponents.js";

const response = await fetch(
  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=80"
);

const pokemonData = await response.json();

const pokemonAll = await Promise.all(
  pokemonData.results.map(async (pokemon) => {
    const responseUrl = await fetch(pokemon.url);
    return responseUrl.json();
  })
);

const body = document.querySelector("body");

new HeaderComponent(body);
new MainComponent(body);

const maincontainer = document.querySelector(".pokemon-card");

pokemonAll.forEach((pokemon) => {
  new PokemonAllComponent(
    maincontainer,
    pokemon.name.toUpperCase(),
    pokemon.sprites.other.home.front_default,
    pokemon.types[0].type.name,
    pokemon.weight
  );
});

new FooterComponent(body);
