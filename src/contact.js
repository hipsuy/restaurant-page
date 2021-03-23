function loadContact(){
    let description = document.querySelector('#description');
    description.textContent = `87 Beverly Hills, LA County, California`;
    let phNum = document.createElement('p');
    phNum.textContent = 'Ph Num: 87339494716';
    description.appendChild(phNum);
}
export default loadContact;