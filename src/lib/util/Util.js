/* eslint-disable prefer-arrow-callback */

const formatterCurrency = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
});

export const linkToWebWhatsapp = (phone, mesage) => {
  if (phone && mesage) {
    return `http://web.whatsapp.com/send?text=${mesage}&phone=${phone}`;
  }
  return null;
};

export const generateLink = (url) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const formatCurrency = (ammount) => formatterCurrency.format(ammount);

export const linkToMobileWhatsapp = (phone, mesage) => {
  if (phone && mesage) {
    return `whatsapp://send?text=${mesage}&phone=${phone}`;
  }
  return null;
};

export const scrollToSection = (id) => {
  if (id) {
    const section = document.getElementById(id) || null;
    window.scrollTo({
      top: section ? section.offsetTop : 0,
      behavior: 'smooth',
    });
  }
};

export const enableScrollingPage = () => {
  const content = document.getElementById('main-banner');
  const header = document.getElementById('Filters');
  if (content && header) {
    window.addEventListener('scroll', function () {
      const windowPosition = window.scrollY > content.offsetHeight;
      header.classList.toggle('Filters-active', windowPosition);
    });
  }
};
