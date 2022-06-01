const homeNav = document.getElementById('home-nav');
const tesNav = document.getElementById('tes-nav');
const tipsNav = document.getElementById('tips-nav');
const riwayatNav = document.getElementById('riwayat-nav');
const aboutNav = document.getElementById('about-nav');

homeNav.classList.add('active');

homeNav.addEventListener('click', () => {
  homeNav.classList.add('active');
  tesNav.classList.remove('active');
  tipsNav.classList.remove('active');
  riwayatNav.classList.remove('active');
  aboutNav.classList.remove('active');
});

tesNav.addEventListener('click', () => {
  tesNav.classList.add('active');
  homeNav.classList.remove('active');
  tipsNav.classList.remove('active');
  riwayatNav.classList.remove('active');
  aboutNav.classList.remove('active');
});

tipsNav.addEventListener('click', () => {
  tipsNav.classList.add('active');
  homeNav.classList.remove('active');
  tesNav.classList.remove('active');
  riwayatNav.classList.remove('active');
  aboutNav.classList.remove('active');
});

riwayatNav.addEventListener('click', () => {
  riwayatNav.classList.add('active');
  homeNav.classList.remove('active');
  tesNav.classList.remove('active');
  tipsNav.classList.remove('active');
  aboutNav.classList.remove('active');
});

aboutNav.addEventListener('click', () => {
  aboutNav.classList.add('active');
  homeNav.classList.remove('active');
  tesNav.classList.remove('active');
  tipsNav.classList.remove('active');
  riwayatNav.classList.remove('active');
});
