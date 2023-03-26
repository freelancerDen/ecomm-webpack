import dropdown from "./modules/dropdown";
import checkRadio from "./modules/filter";
import addProductCard from "./modules/product-grid";
import scss from "../sass/main.scss";
//get all images from src folder 
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../image', true, /.(png|gif|jpg|jpeg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/));
//get all images from src folder --end--

window.addEventListener("DOMContentLoaded", () => {
  
  const dropdownBtn = document.querySelector(".dropdown"),
    url = "http://localhost:3000/data",
    wrapper = document.querySelector(".grid-wrapper"),
    radioBtn = document.querySelectorAll('input[type="radio"]');

  dropdownBtn.addEventListener("click", dropdown);
  radioBtn.forEach((item) => {
    if (item.checked) {
      item.parentElement.classList.add('checked');
      item.nextElementSibling.classList.add('checked');
    }  else {
      item.parentElement.classList.remove('checked');
      item.nextElementSibling.classList.remove('checked');
    }
    item.addEventListener('click', (e) => {checkRadio(e, url, wrapper)});
  });
  
  addProductCard(url, wrapper);

});
