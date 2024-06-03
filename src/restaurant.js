// Append html content to index.html

const createRestaurantHomePage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  //Create and append the header element
  const header = document.createElement('h1');
  header.textContent = "Welcome to Shiloh's Seafood!";
  header.classList.add('header');
  pageContent.appendChild(header);

  //Create and appened the image element
  const image = document.createElement('img');
  image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1920px-Barbieri_-_ViaSophia25668.jpg';
  image.classList.add('image');
  image.height = '300';
  pageContent.appendChild(image);

  //Create and append the paragraph element
  const paragraph1 = document.createElement('p');
  paragraph1.textContent = "Come on in to enjoy some of our fantastic selections, at the newly opened location!"
  paragraph1.classList.add('p-txt');
  pageContent.appendChild(paragraph1);
  content.appendChild(pageContent);
}

export default createRestaurantHomePage;