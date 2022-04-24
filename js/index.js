import FooterComponent from "./component/FooterComponent/FooterComponent.js";
import HeaderComponent from "./component/headerComponent/HeaderComponent.js";
import MainComponent from "./component/maincomponent/MainComponent.js";

const body = document.querySelector("body");

new HeaderComponent(body);
new MainComponent(body);
new FooterComponent(body);
