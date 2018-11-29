import { getItems } from "./item-service.js";

const dataToShow = getItems();

dataToShow.forEach(function(entry) {
    for (let prop in entry) {
        if(prop === "timestamp") {
            entry[prop] = new Date(entry[prop]).toLocaleString();
        } 
        console.log(prop + ": " + entry[prop]);
    }  
});