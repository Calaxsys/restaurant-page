//Append content for menu tab page
const createMenuPage = () => {
  const content = document.querySelector('.content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  //Create and append header element for menu tab page
  const header = document.createElement('h1');
  header.textContent = "Menu";
  header.classList.add('menu-header');
  pageContent.appendChild(header);

  //Create and apend main content to the menu tab page
  const menuItem1 = document.createElement('p');
  menuItem1.textContent = 'Crab Legs $30';
  const menuItem2 = document.createElement('p');
  menuItem2.textContent = 'Shrimp Broil $20';
  pageContent.appendChild(menuItem1);
  pageContent.appendChild(menuItem2);
  content.appendChild(pageContent);
}

export default createMenuPage;