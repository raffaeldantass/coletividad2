var mobileScreen = window.matchMedia("(max-width: 600px)")
var menuIcon = document.querySelector(".mobile-menu__menu-icon");
var asideBar = document.querySelector(".aside-bar");

if(mobileScreen.matches) {
  asideBar.style.display = 'none';
}

function menuController() {

  if (asideBar.style.display == 'none') {

    asideBar.style.display = 'flex';

  } else if(asideBar.style.display == 'flex' ) {
    
    asideBar.style.display = 'none';
  }

}

menuIcon.addEventListener('click', menuController);
asideBar.addEventListener('click', menuController);