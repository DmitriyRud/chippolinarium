const buttonPrice = document.querySelector('.button_price');
const dialog = document.querySelector('#modalPrice');

const dialogForm = document.querySelector('.dialogForm');

const itemPriceRequest = document.querySelectorAll('.itemPriceRequest');

const modalPriceBtn = document.querySelector('.modalPriceBtn');

const modalList = document.querySelector('.modal_list');

const closeModalWindow = document.querySelector('.closeModalWindow');

const priceFormAlertModal = document.querySelector('.price_form_alert_modal');

buttonPrice.addEventListener('click', (event) => {
  dialog.showModal();
});

itemPriceRequest.forEach((el) => {
  el.addEventListener('click', (event) => {
    dialog.showModal();
  });
});

modalList.addEventListener('click', (event) => {
  dialog.showModal();
});

closeModalWindow.addEventListener('click', (event) => {
  dialog.close();
});

dialogForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(dialogForm);
  const inputs = Object.fromEntries(data);

  const inputValidationName = inputs.name.trim();
  const inputValidationEmail = inputs.email.trim();
  const inputValidationPhone = inputs.phone.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  const namePattern = /^[A-Za-zА-Яа-яЁё\s]*$/g;
  const phonePattern = /^\+?[0-9()-\s]+$/g;

  if (!inputValidationName || !inputValidationEmail || !inputValidationPhone) {
    priceFormAlertModal.innerText = 'Поля не могут быть пустыми!';
    priceFormAlertModal.style.color = 'red';
  } else if (inputs.name.match(namePattern) === null) {
    priceFormAlertModal.innerText = 'Некорректное имя';
    priceFormAlertModal.style.color = 'red';
  } else if (inputs.phone.match(phonePattern) === null) {
    priceFormAlertModal.innerText = 'Некорректный номер телефона';
    priceFormAlertModal.style.color = 'red';
  } else if (inputs.email.match(emailPattern) === null) {
    priceFormAlertModal.innerText = 'Некорректный email';
    priceFormAlertModal.style.color = 'red';
  } else {
    try {
      const response = await fetch('/modalpice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      priceFormAlertModal.innerText =
        'Ваше письмо отправлено! Менеджеры свяжутся с Вами в ближайшее время.';
      priceFormAlertModal.style.color = '#338023';

      inputsOnHome.forEach((el) => (el.value = ''));

      setTimeout(() => {
        dialog.close();
        priceFormAlertModal.innerText = '';
      }, 5000);
    } catch (error) {
      console.log('что-то пошло не так', error);
    }
  }
});
