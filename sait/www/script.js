let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

document.querySelector('.menu-btn').addEventListener('click', function(e) {
  e.preventDefault();
  var menu = document.querySelector('.menu');
  if (menu.classList.contains('menu_active')) {
    menu.classList.remove('menu_active');
  } else {
    menu.classList.add('menu_active');
  }

  var btn = document.querySelector('.menu-btn');
  if (btn.classList.contains('menu-btn_active')) {
    btn.classList.remove('menu-btn_active');
  } else {
    btn.classList.add('menu-btn_active');
  }
});

document.querySelector('.auto-btn').addEventListener('click', function(e) {
  e.preventDefault();
  var autorisation = document.querySelector('.auto-container');
  if (autorisation.classList.contains('auto-container_active')) {
    autorisation.classList.remove('auto-container_active');
  } else {
    autorisation.classList.add('auto-container_active');
  }
});
