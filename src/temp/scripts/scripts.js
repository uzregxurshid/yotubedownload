document.querySelector('.nav__hamburger--button').addEventListener("click", ()=>{
  document.querySelector('.nav__bar').classList.toggle('nav__bar--show');
})

document.querySelector('.url__input').addEventListener("focus", ()=>{
  document.querySelector('.url__form').classList.toggle('url__hover');
})

