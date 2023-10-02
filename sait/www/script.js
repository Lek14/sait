let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
/*
function applyTheme() {
      const isDark = (localStorage.getItem('is-dark-theme') ?? 'true') === 'true';
      if (isDark) {
          page.classList.remove('light-theme');
          page.classList.add('dark-theme');
      } else {
          page.classList.remove('dark-theme');
          page.classList.add('light-theme');
      }
  }
function themeChange() {
  localStorage.setItem('is-dark-theme', !((localStorage.getItem('is-dark-theme') ?? 'true') === 'true'));
  applyTheme();
}
window.addEventListener('DOMContentLoaded', function () {
       applyTheme();
});
*/