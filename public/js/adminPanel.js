const { logForm } = document.forms;
const paragraph = document.querySelector('.paragraph');
logForm.addEventListener('click', async (e) => {
  const data = new FormData(logForm);
  const res = Object.fromEntries(data);
  if (e.target.tagName === 'BUTTON') {
    const inputValidationEmail = res.email.trim();
    const inputValidationPassword = res.password.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    if (!inputValidationEmail || !inputValidationPassword) {
      paragraph.innerText = `Заполните все поля`;
    } else if (res.email.match(emailPattern) === null) {
      paragraph.innerText = `Некорректный email!`;
    } else {
      try {
        const response = await fetch('/adminPanel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res),
        });
        const result = await response.json();

        if (result.err) {
          paragraph.innerText = result.err;
        } else if (result.msg) {
          window.location.href = '/accountPanel';
        }
      } catch (error) {
        console.log('Что-то пошло не так');
      }
    }
  }
});
