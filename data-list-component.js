// data-list-header
const dataListHeaderTemplate = document.createElement("template");
dataListHeaderTemplate.innerHTML = /*html*/`
    <style>
        :host {
            text-transform: uppercase;
            line-height: 1;
            font-size: 16px;
            padding: 5px 0 20px 10px;
            margin: 10px 0 20px 0;
            border-bottom: 1px solid black;
            display: block;
        }
    </style>
    <slot></slot>
`;

class DataListHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(dataListHeaderTemplate.content.cloneNode(true));
    }
}
window.customElements.define("data-list-header", DataListHeader);

// data-list-content
const dataListContentTemplate = document.createElement("template");
dataListContentTemplate.innerHTML = /*html*/`
    <style>
        :host {
            min-width: 100px;
            flex-grow: 1;
            margin-left: 10px;
            padding-bottom: 20px;
            border-bottom: 1px solid gray;
            display: block;
        }
        ::slotted(h3) {
            margin: 0;
            padding: 0;
            line-height: 1;
            font-weight: normal;
        }
        ::slotted(p) {
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: gray;
        }
    </style>
    <slot></slot>
`;

class DataListContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(dataListContentTemplate.content.cloneNode(true));
    }
}
window.customElements.define("data-list-content", DataListContent);

//data-list-icon
class DataListIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        var imgUrl = "./banana.jpg";
        var img = document.createElement("img");
        img.src = imgUrl;
        this.shadowRoot.appendChild(img)
        var style = document.createElement("style");
        style.textContent = /*html*/`
            img {
                margin-left: 10px;
                border-radius: 50%;
                width: 40px;
                height: 40px;
            }
        `;
        this.shadowRoot.appendChild(style);
    }
}
window.customElements.define("data-list-icon", DataListIcon);

//data-list-sequence
const dataListSequenceTemplate = document.createElement("template");
dataListSequenceTemplate.innerHTML = /*html*/`
    <style>
        :host {
            color: gray;
            font-size: 11px;
            padding-right: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid gray;
            display: block;
        }        
    </style>   
    <slot></slot>
`;

class DataListSequence extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(dataListSequenceTemplate.content.cloneNode(true));
    }
}
window.customElements.define("data-list-sequence", DataListSequence);

// data-list-item
const dataListItemTemplate = document.createElement("template");
dataListItemTemplate.innerHTML = /*html*/`
    <style>
        :host {
            display: flex;
            flex-flow: row nowrap;
            margin-left: 10px;
            margin-bottom: 20px;
        }        
    </style>   
    <slot></slot>
`;

class DataListItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(dataListItemTemplate.content.cloneNode(true));
    }
}
window.customElements.define("data-list-item", DataListItem);

// data-list
const dataListTemplate = document.createElement("template");
dataListTemplate.innerHTML = /*html*/`
    <style>
        :host {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin-bottom: 50px;
            display: block;
        }
    </style>   
    <slot></slot>
`;

class DataList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(dataListTemplate.content.cloneNode(true));
    }
}
window.customElements.define("data-list", DataList);