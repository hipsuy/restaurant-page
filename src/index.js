import loadPage from './load';
import loadMenu from "./menu";
import loadHome from './home';
import loadContact from './contact';

function removeAllChildren(parent){
    while (parent.firstChild){ 
        parent.removeChild(parent.firstChild);
    }
}

loadPage();

let menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', ()=>{
    removeAllChildren(document.querySelector('#description'));
    loadMenu();
});

let homeButton = document.querySelector('#home');
homeButton.addEventListener('click', ()=>{
    removeAllChildren(document.querySelector('#description'));
    loadHome();
});

let contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', ()=>{
    removeAllChildren(document.querySelector('#description'));
    loadContact();
});


