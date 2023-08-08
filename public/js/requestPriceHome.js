const formRequestPriceHome = document.querySelector('.formRequestPriceHome');
const priceFormAlertHome = document.querySelector('.price_form_alert_home');
const inputsOnHome = document.querySelectorAll('input');

formRequestPriceHome.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(formRequestPriceHome);
  const inputs = Object.fromEntries(data);

  const inputValidationName = inputs.name.trim();
  const inputValidationEmail = inputs.email.trim();
  const inputValidationPhone = inputs.phone.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  const namePattern = /^[A-Za-zА-Яа-яЁё\s]*$/g;
  const phonePattern = /^\+?[0-9()-\s]+$/g;

  if (!inputValidationName || !inputValidationEmail || !inputValidationPhone) {
    priceFormAlertHome.innerText = 'Поля не могут быть пустыми!';
    priceFormAlertHome.style.color = 'red';
  } else if (inputs.name.match(namePattern) === null) {
    priceFormAlertHome.innerText = 'Некорректное имя';
    priceFormAlertHome.style.color = 'red';
  } else if (inputs.phone.match(phonePattern) === null) {
    priceFormAlertHome.innerText = 'Некорректный номер телефона';
    priceFormAlertHome.style.color = 'red';
  } else if (inputs.email.match(emailPattern) === null) {
    priceFormAlertHome.innerText = 'Некорректный email';
    priceFormAlertHome.style.color = 'red';
  } else {
    try {
      const response = await fetch('/modalpice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      priceFormAlertHome.innerText =
        'Ваше письмо отправлено! Менеджеры свяжутся с Вами в ближайшее время.';
      priceFormAlertHome.style.color = '#338023';

      inputsOnHome.forEach((el) => (el.value = ''));

      setTimeout(() => {
        priceFormAlertHome.innerText = '';
      }, 15000);
    } catch (error) {
      console.log('что-то пошло не так', error);
    }
  }
});
