var mobileScreen = window.matchMedia("(max-width: 600px)")
var desktopScreen = window.matchMedia("(min-width: 601px)");
var menuMobileBar = document.querySelector(".mobile-menu");
var menuIcon = document.querySelector(".mobile-menu__menu-icon");
var asideBar = document.querySelector(".aside-bar");

if(mobileScreen.matches) {
  asideBar.style.display = 'none';
  menuIcon.addEventListener('click', menuController);
  asideBar.addEventListener('click', menuController);
}

if (desktopScreen.matches) {
  menuMobileBar.style.display = 'none';
  asideBar.style.display = 'flex';
}

function menuController() {

  if (asideBar.style.display == 'none') {

    asideBar.style.display = 'flex';

  } else if(asideBar.style.display == 'flex' ) {
    
    asideBar.style.display = 'none';
  }

}
