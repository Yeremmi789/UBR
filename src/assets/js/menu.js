// alert("hola mundo");
const nav = document.querySelector('.barra_1');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active',window.scrollY >-10)
})