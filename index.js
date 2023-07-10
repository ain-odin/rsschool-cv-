const menuBurger = document.querySelector('.header_burger');
const menuNav = document.querySelector('.navbar');

if (menuBurger) {
  menuBurger.addEventListener('click', function (event) {
    document.body.classList.toggle('_lock');
    menuBurger.classList.toggle('_active');
    menuNav.classList.toggle('_active');
  });
}

const navItems = document.querySelectorAll('.nav-item[data-goto]');

if (navItems.length > 0) {
  navItems.forEach(navItem => {
    navItem.addEventListener('click', onNavItemClick);
  });

  function onNavItemClick(event) {
    const navItem = event.target;
    console.log(document.querySelector(navItem.dataset.goto))
    if (navItem.dataset.goto && document.querySelector(navItem.dataset.goto)) {
      const goToSection = document.querySelector(navItem.dataset.goto);
      const goToSectionValue = goToSection.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

      if (menuBurger.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        menuBurger.classList.remove('_active');
        menuNav.classList.remove('_active');
      }

      window.scrollTo({
        top: goToSectionValue,
        behavior: 'smooth'
      });
      event.preventDefault();
    }
  }
}