import Component from "../Component.js";

class HeaderComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "header", "header");
    this.render();
  }

  render() {
    this.element.innerHTML = `
 
        <h1>POKEMOS TO GUAPOS</h1>
      
        <navc class="header__list">
          <ul>
            <li><a href="">POKEMOS MAMADISIMOS</a></li>
            <li><a href="">MIS POKEMOS TOO GUAPOS</a></li>
            <li><a href="">POKEMOS MODIFICADOS</a></li>
          </ul>
        </nav>

    `;
  }
}
export default HeaderComponent;
