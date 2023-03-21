function youtube() {
  document.querySelector('.youtube').style.display = 'inline-block';
  document.querySelector('.note').style.display = 'none';
  document.querySelector('.scratch').style.display = 'none';
  document.querySelector('.suzuri').style.display = 'none';
}

function note() {
  document.querySelector('.note').style.display = 'inline-block';
  document.querySelector('.youtube').style.display = 'none';
  document.querySelector('.scratch').style.display = 'none';
  document.querySelector('.suzuri').style.display = 'none';
}

function scratch() {
  document.querySelector('.scratch').style.display = 'inline-block';
  document.querySelector('.note').style.display = 'none';
  document.querySelector('.youtube').style.display = 'none';
  document.querySelector('.suzuri').style.display = 'none';
}

function suzuri() {
  document.querySelector('.suzuri').style.display = 'inline-block';
  document.querySelector('.note').style.display = 'none';
  document.querySelector('.scratch').style.display = 'none';
  document.querySelector('.youtube').style.display = 'none';
}

function clear(){
  document.querySelector('.youtube').style.display = 'none';
  document.querySelector('.note').style.display = 'none';
  document.querySelector('.scratch').style.display = 'none';
  document.querySelector('.suzuri').style.display = 'none';
}
