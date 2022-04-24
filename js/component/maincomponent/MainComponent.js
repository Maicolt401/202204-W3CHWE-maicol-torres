import Component from "../Component.js";

class MainComponent extends Component {
  name;
  constructor(parentElement, name) {
    super(parentElement, "main", "pokemon-card");
    this.name = name;
  }
}

export default MainComponent;
