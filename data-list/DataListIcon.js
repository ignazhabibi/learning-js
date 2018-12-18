import { dataListIconTemplate } from "./data-list-templates.js";
import { createHTMLTemplate } from "../mb-helper.js";

const iconTpl = createHTMLTemplate(dataListIconTemplate);

export class DataListIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(iconTpl.content.cloneNode(true));
    } 
    connectedCallback() {   
        const iconUrl = this.getAttribute("src");
        const icon = this.shadowRoot.querySelector("img");
        icon.src = iconUrl;  
    }
}