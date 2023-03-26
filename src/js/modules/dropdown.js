const dropdownContent = document.querySelector('.dropdown-content'),
      dropdownBtn = document.querySelector('.dropbtn');

function dropdown () {

  if (dropdownContent.classList.contains('dropdown-content-show')) {
      dropdownContent.classList.remove('dropdown-content-show');
      dropdownBtn.classList.remove('dropbtn-active');
      dropdownBtn.classList.add('dropbtn');
    } else {
      dropdownBtn.classList.remove('dropbtn');
      dropdownContent.classList.add('dropdown-content-show');
      dropdownBtn.classList.add('dropbtn-active');
    }
}


export default dropdown;
