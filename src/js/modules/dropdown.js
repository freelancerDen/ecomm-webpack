const dropdownContent = document.querySelector('.dropdown-content');

function dropdown () {
    if (dropdownContent.classList.contains('dropdown-content-show')) {
      dropdownContent.classList.remove('dropdown-content-show');
    } else {
      dropdownContent.classList.add('dropdown-content-show');
    }
}


export default dropdown;
