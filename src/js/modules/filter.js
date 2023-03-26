import addProductCard from "./product-grid";
const radioBtn = document.querySelectorAll('input[type="radio"]');

const checkRadio = (e, url, wrapper) => {
  radioBtn.forEach((item) => {
    if (item.checked) {
      item.parentElement.classList.add('checked');
      item.nextElementSibling.classList.add('checked');
    }  else {
      item.parentElement.classList.remove('checked');
      item.nextElementSibling.classList.remove('checked');
    }
  });
  
  if (e.target.value === 'hot') {
    wrapper.innerHTML = '';
    addProductCard(url, wrapper, e.target.value);
  } else if (e.target.value === 'instock') {
    wrapper.innerHTML = '';
    addProductCard(url, wrapper, e.target.value);
  } else {
    wrapper.innerHTML = '';
    addProductCard(url, wrapper);
  }
}

export default checkRadio;
