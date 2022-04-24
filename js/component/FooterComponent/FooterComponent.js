import Component from "../Component.js";

class FooterComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "footer", "footer__list");
    this.render();
  }

  render() {
    this.element.innerHTML = `
    
      <nav>
        <ul>
          <li><a href="">Previus</a>
            <a href="">1</a>
            <a href="">1/8.000</a>
          </li>
        </ul>
      </nav>
  
    `;
  }
}
export default FooterComponent;
