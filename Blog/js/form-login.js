var btn_in = document.getElementById('btn-sign');
var modal_login = document.getElementById('login');
var close_in = document.getElementsByClassName('login__close')[0];


btn_in.addEventListener('click', openModal);
close_in.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    modal_login.style.display = 'block';
}
function closeModal(){
  modal_login.style.display = 'none';
}
function outsideClick(e){
  if(e.target == modal_login){
    modal_login.style.display = 'none';
  }
}


var btn_tab_login = document.getElementById('sign-in-blog');
var btn_tab_registration = document.getElementById('sign-up-blog');
var modal_tab_login = document.getElementById('sign__in__content');
var modal_tab_registration = document.getElementById('sign__up__content');

btn_tab_login.addEventListener('click', openLogin);
btn_tab_registration.addEventListener('click', openRegistration);


function openLogin() {
  modal_tab_login.style.display = 'block';
  modal_tab_registration.style.display = 'none';
}
function openRegistration() {
  modal_tab_login.style.display = 'none';
  modal_tab_registration.style.display = 'block';
}