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
  var autorisation = document.querySelector('.sub-a-r-container');
  if (autorisation.classList.contains('sub-a-r-container_active')) {
    autorisation.classList.remove('sub-a-r-container_active');
  } else {
    autorisation.classList.add('sub-a-r-container_active');
  }
});

document.querySelector('.search_btn').addEventListener('click', function(e) {
  e.preventDefault();
  var autorisation = document.querySelector('.search');
  if (autorisation.classList.contains('search_active')) {
    autorisation.classList.remove('search_active');
  } else {
    autorisation.classList.add('search_active');
  }
});
