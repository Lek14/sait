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
  var autorisation = document.querySelector('.form-box');
  if (autorisation.classList.contains('form-box_active')) {
    autorisation.classList.remove('form-box_active');
  } else {
    autorisation.classList.add('form-box_active');
  }
});

document.querySelector('.forget').addEventListener('click', function(e) {
  e.preventDefault();
  var autorisation = document.querySelector('.auto-container');
  if (autorisation.classList.contains('auto-container_active')) {
    autorisation.classList.remove('auto-container_active');
  } else {
    autorisation.classList.add('auto-container_active');
  }
  var registration = document.querySelector('.reg-container');
  if (registration.classList.contains('reg-container_active')) {
    registration.classList.remove('reg-container_active');
  } else {
    registration.classList.add('reg-container_active');
  }
});

document.querySelector('.signin').addEventListener('click', function(e) {
  e.preventDefault();
  var autorisation = document.querySelector('.auto-container');
  if (autorisation.classList.contains('auto-container_active')) {
    autorisation.classList.remove('auto-container_active');
  } else {
    autorisation.classList.add('auto-container_active');
  }
  var registration = document.querySelector('.reg-container');
  if (registration.classList.contains('reg-container_active')) {
    registration.classList.remove('reg-container_active');
  } else {
    registration.classList.add('reg-container_active');
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
