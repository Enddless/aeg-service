document.addEventListener('scroll', function () {
  const headerTop = document.querySelector('.header__top');
  const header = document.querySelector('.header');
  const stickyClass = 'sticky';

  if (window.scrollY > 100) {
    header.classList.add(stickyClass);
    headerTop.style.display = 'none';
  } else {
    header.classList.remove(stickyClass);
    headerTop.style.display = '';
  }
});
