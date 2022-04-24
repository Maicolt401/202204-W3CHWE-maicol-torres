import Component from "../Component.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const getPokemon = async () => {
  const response = await fetch(`${apiUrl}`);
  const pokemonUrl = await response.json();
  return pokemonUrl;
};

for (let i = 0; i < 20; i++) {
  (async () => {
    const pokemonAll = await getPokemon();
    return pokemonAll;
  })();
}

class MainComponent extends Component {
  name;
  constructor(parentElement, name) {
    super(parentElement, "main", "pokemon-card");
    this.name = name;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <ul class="characters-list row list-unstyled">
                  <li class="character col-12 col-sm-4">
                      <div class="card character__card ">
                        <img
                          src="/pokemon-pikachu.gif"
                          alt="pokemon pikachu"
                          class="character__picture card-img-top"
                        />
                        <div class="card-body">
                          <h2 class="character__name card-title h4">${this.name}</h2>
                      
                            <ul class="list-unstyled">
                            
                              <li>nunca muere</li>
                              <li>tira ryos</li>
                              <li>pokemon poderoso</li>
                              <li>amigo de ash</li>
                            </ul>
                      
                        </div>
                      </div>
                                            <div class="card character__card ">
                        <img
                          src="CHARIZARD.gif"
                          alt="pokemon pikachu"
                          class="character__picture card-img-top"
                        />
                        <div class="card-body">
                          <h2 class="character__name card-title h4">CHARIZARD</h2>
                      
                            <ul class="list-unstyled">
                            
                              <li>nunca muere</li>
                              <li>tira ryos</li>
                              <li>pokemon poderoso</li>
                              <li>amigo de ash</li>
                            </ul>
                      
                        </div>
                      </div>
                                            <div class="card character__card ">
                        <img
                          src="/pokemon-pikachu.gif"
                          alt="pokemon pikachu"
                          class="character__picture card-img-top"
                        />
                        <div class="card-body">
                          <h2 class="character__name card-title h4">BUSBAZUR</h2>
                      
                            <ul class="list-unstyled">
                            
                              <li>nunca muere</li>
                              <li>tira ryos</li>
                              <li>pokemon poderoso</li>
                              <li>amigo de ash</li>
                            </ul>
                      
                        </div>
                      </div>
                                            <div class="card character__card ">
                        <img
                          src="/pokemon-pikachu.gif"
                          alt="pokemon pikachu"
                          class="character__picture card-img-top"
                        />
                        <div class="card-body">
                          <h2 class="character__name card-title h4">RATATA</h2>
                      
                            <ul class="list-unstyled">
                            
                              <li>nunca muere</li>
                              <li>tira ryos</li>
                              <li>pokemon poderoso</li>
                              <li>amigo de ash</li>
                            </ul>
                      
                        </div>
                      </div>
                                            <div class="card character__card ">
                        <img
                          src="/pokemon-pikachu.gif"
                          alt="pokemon pikachu"
                          class="character__picture card-img-top"
                        />
                        <div class="card-body">
                          <h2 class="character__name card-title h4">SQUIRTLE</h2>
                      
                            <ul class="list-unstyled">
                            
                              <li>nunca muere</li>
                              <li>tira ryos</li>
                              <li>pokemon poderoso</li>
                              <li>amigo de ash</li>
                            </ul>
                      
                        </div>
                      </div>
                  </li> 
      </ul>
    `;
  }
}

export default MainComponent;
