import createRestaurantHomePage from './restaurant';
import loadPageOnClick from './changeTab';

function initialLoad() {
  createRestaurantHomePage();
  loadPageOnClick();
}

export default initialLoad();