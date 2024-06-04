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
    clearContent();
    createRestaurantHomePage();
  });

  menuButton.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  });

  contactButton.addEventListener('click', () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default loadPageOnClick;
