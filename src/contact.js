import { personContactInfo, addPersonToContactPage } from "./contactPerson"; 

//Create person objects for the display
const person1 = new personContactInfo('Shiloh Dillard', '123-456-7890', 'shiloh.dillard@fake.com');
const person2 = new personContactInfo('Emily Dillard', '354-869-5555', 'emily.dillard@fake.com');


//Append content to contact tab
const createContactPage = () => {
  const content = document.querySelector('#content');
  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  //Append header to the contact tab page
  const header = document.createElement('h2');
  header.textContent = 'Contact Us';
  header.classList.add('contact-header');
  pageContent.appendChild(header);

  //Create and append the content elements to the page
  const contactPage = document.createElement('div');
  contactPage.id = 'container';
  
  addPersonToContactPage(person1);
  addPersonToContactPage(person2);

  pageContent.appendChild(contactPage);
  content.appendChild(pageContent);
}