const managerForm = document.querySelector('.manager_form');
const managerMessage = document.querySelector('.manager_message');
const managerEmailList = document.querySelector('.managerEmailList');
const managerEmail = document.querySelector('.managerEmail');

managerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(managerForm);
  const input = Object.fromEntries(data);

  const inputValidationEmail = input.managerEmail.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

  if (!inputValidationEmail) {
    managerMessage.innerText = 'Поле email не может быть пустым!';
  } else if (input.managerEmail.match(emailPattern) === null) {
    managerMessage.innerText = 'Некорректный email';
  } else {
    try {
      const response = await fetch('/accountPanel/manager', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      const result = await response.json();
      if (result.email) {
        managerMessage.innerText = 'Почта менеджера успешно добавлена';
        managerEmail.value = '';
        const newManagerEmail = `
      <li> ${result.email} <button id=${result.id} type="button" class="deleteManagerBtn btn-close"
      aria-label="Close"></button></li>
      `;

        managerEmailList.insertAdjacentHTML('beforeend', newManagerEmail);
      } else if (result.msg) {
        managerMessage.innerText = result.msg;
      }
    } catch (error) {
      console.log('owibka', error);
    }
  }
});
