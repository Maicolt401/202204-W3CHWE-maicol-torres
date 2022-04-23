class component {
  element;
  constructor(parentElement, tag, className) {
    this.tag = tag;
    this.className = className;
    this.appendchild(parentElement);
  }
}
export default component;
