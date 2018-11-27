import { getFoods } from "./food-service.js";

let foodlist = getFoods();

foodlist.forEach(function(entry) {
    console.log(entry.id);
    console.log(entry.name);
});