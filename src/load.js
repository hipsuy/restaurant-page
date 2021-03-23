import loadHome from './home';
function loadPage(){

    let content = document.querySelector('#content');
    let topNav = document.createElement('div');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    topNav.classList.add('topnav');
    home.setAttribute('id','home');
    menu.setAttribute('id','menu');
    contact.setAttribute('id','contact');
    home.classList.add('tab');
    menu.classList.add('tab');
    contact.classList.add('tab');
    topNav.appendChild(home);
    topNav.appendChild(menu);
    topNav.appendChild(contact);

    content.appendChild(topNav);


    
    
    let heading = document.createElement('p');
    heading.textContent = 'The Spice Island';
    heading.setAttribute('id','heading');
    content.appendChild(heading);
    
    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    content.appendChild(description);
    loadHome();
    
    
}
export default loadPage;