import Component from "../Component.js";

class MainComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "main", "pokemon-card");
    this.render();
  }

  render() {
    this.element.innerHTML = `
        <header class="header">
      <h1>POKEMOS TO GUAPOS</h1>
    
      <navc class="header__list">
        <ul>
          <li><a href="">POKEMOS MAMADISIMOS</a></li>
          <li><a href="">MIS POKEMOS TOO GUAPOS</a></li>
          <li><a href="">POKEMOS MODIFICADOS</a></li>
        </ul>
      </nav> 
    </header>
    <ul class="characters-list row list-unstyled">
                  <li class="character col-12 col-sm-4">
                      <div class="card character__card ">
                        <img
                          src="/pokemon-pikachu.gif"
                          alt="pokemon pikachu"
                          class="character__picture card-img-top"
                        />
                        <div class="card-body">
                          <h2 class="character__name card-title h4">PICHACHU</h2>
                      
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
   <footer>
       <nav>
        <ul>
          <li><a href="">Previus</a>
          <a href="">1</a>
        <a href="">1/8.000</a></li>
        </ul>
      </nav>
    </footer>

    `;
  }
}
export default MainComponent;
