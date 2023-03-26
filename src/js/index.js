import dropdown from "./modules/dropdown";
import checkRadio from "./modules/filter";
import addProductCard from "./modules/product-grid";
import scss from "../sass/main.scss";

window.addEventListener("DOMContentLoaded", () => {
  // get data from server
  const dropdownBtn = document.querySelector(".dropdown"),
    url = "http://localhost:3000/data",
    wrapper = document.querySelector(".grid-wrapper");

  dropdownBtn.addEventListener("click", dropdown);
  checkRadio(); //init filter btn
  addProductCard(url, wrapper);
});
