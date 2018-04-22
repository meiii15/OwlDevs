// Definir altura e ajustar

// var _AlturaDocumento = $(window).height();
// function AlturaSecao() {
//   $('.secao').height(_AlturaDocumento);

// }

// $(AlturaSecao);


// Seçao scroll ajustar

// function ScrollSecao() {
//   console.log('entrou');
//   if($(this).parent('.secao').is('#secao-01')) {
//     $('body').animate({scrollTop: _AlturaJanela}, '500');
//   } else if ($(this).parent('.secao').is('#secao-02')){
//     $('body').animate({scrollTop: _AlturaJanela*2}, '500');
//   } else if ($(this).parent('.secao').is('#secao-03')){
//     $('body').animate({scrollTop: _AlturaJanela*3}, '500');
//   } else {
//   $('body').animate({scrollTop: 0}, '800');
//   }
// }



// Slide
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onload = function(){
  showSlides(slideIndex);
}