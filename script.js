// Redirect Form
const formRedirect = document.querySelector(".button-28")

formRedirect.addEventListener('click', () =>{
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSd25_qLh_gulo3rYXh9edi0-86_ifeHsWONRv78_6-pGYbkhg/viewform?usp=sf_link", "_blank");
})


var slide = document.getElementById('slide');
var descr = document.getElementById('descr');
var birth_date = document.getElementById('birth_date')

var arrImgs = [
    ['Fernanda Jatobá', 'img/profile/nanda.png', '31/08/2002'],
    ['Patrick Ribeiro', 'img/profile/patrick.png', '22/08/2003'],
    ['Tiffany Souza', 'img/profile/tiffany.png', '06/08/2002']];

var index = 0;

function fSlide(id) {
    
	id === 'prox' ? index === arrImgs.length -1 ? '' : index++ : id === 'prev' ? index < 1 ? '' : index-- : '';
    
	slide.setAttribute('src', arrImgs[index][1]);
    descr.innerText = arrImgs[index][0];
    birth_date.innerText = arrImgs[index][2];
}

window.addEventListener('click', function(e) {
	if(e.target.id === 'prev' || e.target.id === 'prox') {
        fSlide(e.target.id);
    }
});

fSlide();
