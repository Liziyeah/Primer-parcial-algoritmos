import * as components from './components/indexPadre.js'
import * as components from './components/moreDetails/moreDetails.js'
import productsData from './data/data.js'
class AppContainer extends HTMLElement {
    cardProduct = [];
    cardProductDetails = [];

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    
        productsData.forEach(element => {
            const card = this.ownerDocument.createElement('product-card');
            card.setAttribute('title',element.title);
            card.setAttribute('description',element.description);
            card.setAttribute('value',element.value);
            card.setAttribute('inStock',element.inStock);
            card.setAttribute('image',element.image);
            this.cardProduct.push(card);
        });

        productsData.forEach(element => {
            const card = this.ownerDocument.createElement('moreDetails-card')
            card.setAttribute('materials',element.details.materials);
            card.setAttribute('sizesAvailable',element.details.sizesAvailable);
            card.setAttribute('brand',element.details.brand);
            card.setAttribute('origin',element.details.origin);
            this.cardProductDetails.push(card);
        })
    }

    connectedCallback() {
        this.render();
    }
    
    render(){
        this.cardProduct.forEach((card) => {
            this.shadowRoot.appendChild(card)
        })
        this.cardProductDetails.forEach((card) => {
            this.shadowRoot.appendChild(card)
        })
    }
}
customElements.define('app-container', AppContainer)