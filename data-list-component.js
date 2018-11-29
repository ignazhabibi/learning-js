import { getItems } from "./item-service.js";

let foodlist = getItems();

foodlist.forEach(function(entry) {
    console.log(new Date(entry.timestamp).toLocaleString());
    console.log(entry.name);
    console.log(entry.calories);
    
});