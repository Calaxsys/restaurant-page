//Define a class to create mutliple person objects
//and append to the DOM when called
class personContactInfo {
  constructor(name, phoneNumber, email ) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
};

//function to add person info to the html
function addPersonToContactPage(person) {
  const contactContainer = document.querySelector('#container');

  if (!contactContainer) {
    console.error('Contact container not found');
    return;
  }

  const contactPersonElement = document.createElement('div');
  contactPersonElement.classList.add('contact-person'); 

  const nameElement = document.createElement('h3');
  nameElement.textContent = person.name;

  const phoneElement = document.createElement('p');
  phoneElement.textContent = `Phone: ${person.phoneNumber}`;

  const emailElement = document.createElement('p');
  emailElement.textContent = `Email: ${person.email}`;

  contactPersonElement.appendChild(nameElement);
  contactPersonElement.appendChild(phoneElement);
  contactPersonElement.appendChild(emailElement);

  contactContainer.appendChild(contactPersonElement);
}

export { personContactInfo, addPersonToContactPage };