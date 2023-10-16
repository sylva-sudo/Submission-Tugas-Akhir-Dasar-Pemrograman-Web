// Menu
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-bars'
}


// hero typing 
const text = document.querySelector(".text-seccond")

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "i am Sylva Aditya";
    }, 0);

    textLoad();
}




