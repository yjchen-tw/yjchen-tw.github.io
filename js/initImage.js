var windowloaded = false;
var mainImgLoaded = false;


function initSubImage() {
  var elements = document.getElementsByClassName('image-zoom-in');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('data-src')) {
      elements[i].setAttribute('src',  elements[i].getAttribute('data-src'));
    }
  }

  elements = document.getElementsByClassName('mySlides');
  for (var i = 0; i < elements.length; i++) {
    var imgDefer = elements[i].getElementsByTagName('img')[0];
    if (imgDefer.getAttribute('data-src')) {
      imgDefer.setAttribute('src',imgDefer.getAttribute('data-src'));
    }
  }
}

function windowLoadedCheck(){
  windowloaded = true;
  if (windowloaded && mainImgLoaded) initSubImage()
}

function mainImageCheck() {
  mainImgLoaded  = true;
  if (windowloaded && mainImgLoaded) initSubImage()
}

window.addEventListener('load', windowLoadedCheck)
