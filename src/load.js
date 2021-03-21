
function loadPage(){
    
    let content = document.querySelector('#content');
    let heading = document.createElement('p');
    heading.textContent = 'The Spice Island';
    heading.setAttribute('id','heading');
    content.appendChild(heading);
    
    let description = document.createElement('p');
    description.textContent = 'Set up in 1995, The Spicy Island has firmly established itself in the culinary scene. Let your tastebuds run wild! Come visit the hottest place in town !';
    description.setAttribute('id', 'description');
    content.appendChild(description);
}
export default loadPage;