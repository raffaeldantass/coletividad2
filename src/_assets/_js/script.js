var menuIcon = document.querySelector(".mobile-menu__menu-icon");
var asideBar = document.querySelector(".aside-bar");

asideBar.style.display = 'none';

function menuController() {

  if (asideBar.style.display == 'none') {

    asideBar.style.display = 'block';

  } else if(asideBar.style.display == 'block' ) {
    
    asideBar.style.display = 'none';
  }

}

menuIcon.addEventListener('click', menuController);
asideBar.addEventListener('click', menuController);