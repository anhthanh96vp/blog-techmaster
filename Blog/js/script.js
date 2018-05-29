var btn_in = document.getElementById('btn-in');
var modal_login = document.getElementById('modal_in_up');
var close_in = document.getElementsByClassName('close-in')[0];

btn_in.addEventListener('click', openModal);
close_in.addEventListener('click', closeModal);

function openModal(){
    modal_login.style.display = 'block';
}
function closeModal(){
  modal_login.style.display = 'none';
}

var btn_tab_login = document.getElementById('login-blog');
var btn_tab_registration = document.getElementById('registration-blog');
var modal_tab_login = document.getElementById('in__content__in');
var modal_tab_registration = document.getElementById('in__content__up');

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