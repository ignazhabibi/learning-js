import {
    dataListHeaderTemplate, 
    dataListContentTemplate, 
    dataListIconTemplate, 
    dataListSequenceTemplate, 
    dataListItemTemplate, 
    dataListTemplate
} from "./data-list-templates.js";

import {createHTMLTemplate} from "./mb-helper.js";

const headerTpl = createHTMLTemplate(dataListHeaderTemplate);
const contentTpl = createHTMLTemplate(dataListContentTemplate);
const iconTpl = createHTMLTemplate(dataListIconTemplate);
const sequenceTpl = createHTMLTemplate(dataListSequenceTemplate);
const itemTpl = createHTMLTemplate(dataListItemTemplate);
const listTpl = createHTMLTemplate(dataListTemplate);

// data-list-header
class DataListHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(headerTpl.content.cloneNode(true));
    }
}
window.customElements.define("data-list-header", DataListHeader);

// data-list-content
class DataListContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(contentTpl.content.cloneNode(true));
    }
}
window.customElements.define("data-list-content", DataListContent);

//data-list-icon
class DataListIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(iconTpl.content.cloneNode(true));
    } 
    connectedCallback() {   
        let iconUrl = this.getAttribute("src");
        let icon = this.shadowRoot.querySelector("img");
        icon.src = iconUrl;  
       
    }
}
window.customElements.define("data-list-icon", DataListIcon);

//data-list-sequence
class DataListSequence extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(sequenceTpl.content.cloneNode(true));
    }
}
window.customElements.define("data-list-sequence", DataListSequence);

// data-list-item
class DataListItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(itemTpl.content.cloneNode(true));
    }
}
window.customElements.define("data-list-item", DataListItem);

// data-list
class DataList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(listTpl.content.cloneNode(true));
    }
}
window.customElements.define("data-list", DataList);