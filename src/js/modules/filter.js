const radioBtn = document.querySelectorAll('input[type="radio"]');

function checkRadio () {
  radioBtn.forEach( item => {
    if (item.checked) {
      item.parentElement.classList.add('checked');
      item.nextElementSibling.classList.add('checked');
    }  else {
      item.parentElement.classList.remove('checked');
      item.nextElementSibling.classList.remove('checked');
    }
    item.addEventListener('click', checkRadio);
  });
}

export default checkRadio;
