//Append content for menu tab page
const createMenuPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content-menu');

  //Create and append header element for menu tab page
  const header = document.createElement('h1');
  header.textContent = "Menu";
  header.classList.add('menu-header');
  pageContent.appendChild(header);

  //Create and apend main content to the menu tab page
  const menuItem1 = document.createElement('p');
  const crabImage = document.createElement('img');
  menuItem1.textContent = 'Crab Legs: $30';
  crabImage.src = 'https://www.allrecipes.com/thmb/uDbpyL1Whny6ziTQITI9A22VwUk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/155375-CrabLegsWithGarlicButterSauce-mfs-beauty-1682-4x3-643d88a79a0044918784a0f75f27f6b2.jpg'
  crabImage.classList.add('image');
  crabImage.id = 'crab-img';

  const menuItem2 = document.createElement('p');
  const shrimpImage = document.createElement('img');
  menuItem2.textContent = 'Shrimp Broil: $20';
  shrimpImage.src = 'https://www.julieseatsandtreats.com/wp-content/uploads/2020/08/Shrimp-Boil-13-of-17.jpg'
  shrimpImage.classList.add('image');
  shrimpImage.id = 'shrimp-img';

  pageContent.appendChild(menuItem1);
  pageContent.appendChild(crabImage);
  pageContent.appendChild(menuItem2);
  pageContent.appendChild(shrimpImage);

  content.appendChild(pageContent);
}

export default createMenuPage;