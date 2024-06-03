//Code to change the display based on the button tab
//that is clicked
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";
import createContactPage from "./contact";

const loadPageOnClick = () => {
  const homeButton = document.getElementById('home-btn');
  const menuButton =  document.getElementById('menu-btn');
  const contactButton = document.getElementById('contact-btn');

  homeButton.addEventListener('click', () => {
    const content = document.querySelector('.content');
    createRestaurantHomePage();
  });

  menuButton.addEventListener('click', () => {
    createMenuPage();
  });

  contactButton.addEventListener('click', () => {
    createContactPage();
  });
};

export default loadPageOnClick;
