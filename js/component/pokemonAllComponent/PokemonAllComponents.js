import Component from "../Component.js";

class PokemonAllComponent extends Component {
  name;
  image;
  type;
  weight;
  constructor(parentElement, name, image, type, weight) {
    super(parentElement, "section", "listado");
    this.name = name;
    this.image = image;
    this.type = type;
    this.weight = weight;
    this.render();
  }

  render() {
    this.element.innerHTML = `
     <ul class="characters-list list-unstyled">
         <li class="character col-12 col-sm-4">
                <div class="card character__card ">
                        <img
                          class="character__picture card-img-top"
                          src="${this.image}"
                          alt="foto de ${this.name}"
                          width="150"
                          height="150"
                        />
                      <div class="card-body">
                          <h2 class="character__name card-title h4">${this.name}</h2>
                              <ul class="list-unstyled">
                                <li>Tipo: ${this.type}</li>
                                <li>Weight: ${this.weight}</li>
                              </ul>
                              <button>agregar</button><button>eliminar</button>
                      </div>
                  </div>
          </li>
     </ul>     
      `;
  }
}

export default PokemonAllComponent;
