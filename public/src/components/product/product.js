class Product extends HTMLElement {
  constructor() {
    super()
    this.attachShadow ({mode: 'open'}); // always call super() first in the ctor.
    
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes(){
    return ["title" , "description" , "value", "inStock", "details", "image"
  ]}

  attributeChangedCallback(propName, oldVal, newValue) {
    this[propName] = newValue
  }

  render(){
    this.shadowRoot = `
    <section>
        <div><img src="${this.image}" alt="Por defecto">
        </div>
        <div>
            <h1>${this.title}</h1>
            <p>${this.description}</p>
            <p>${this.value}</p>
            <p>${this.inStock}</p>
            <p>${this.details}</p>
        </div>
    </section>`
  }
}

customElements.define('product-card', Product);
export default Product;
