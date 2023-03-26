import dropdown from "./modules/dropdown";
import checkRadio from "./modules/filter";
import addProductCard from "./modules/product-grid";
import addToFavorite from "./modules/add-to-favorite";
import scss from "../sass/main.scss";

function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('../image', true, /.(png|gif|jpg|jpeg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/));

window.addEventListener("DOMContentLoaded", () => {
  
  const dropdownBtn = document.querySelector(".dropdown"),
    url = "http://localhost:3000/data",
    wrapper = document.querySelector(".grid-wrapper");

  dropdownBtn.addEventListener("click", dropdown);
  checkRadio(); //init filter btn
  addProductCard(url, wrapper);

});
