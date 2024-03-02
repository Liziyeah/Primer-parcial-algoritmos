class MoreDetails extends HTMLElement {
    constructor() {
      super()
      this.attachShadow ({mode: 'open'}); // always call super() first in the ctor.
      
    }
    connectedCallback() {
      this.render();
    }
    static get observedAttributes(){
      return ["materials" , "sizesAvailable" , "brand", "origin"
    ]}
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this[propName] = {newVal}
    }
  
    render(){
      this.shadowRoot = `
      <section>
          <div>
              <p>${this.materials}</p>
              <p>${this.sizesAvailable}</p>
              <p>${this.brand}</p>
              <p>${this.origin}</p>
          </div>
      </section>`
    }
  }
  
  customElements.define('moredetails-card', MoreDetails);
  export default MoreDetails;
  