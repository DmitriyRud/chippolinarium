const feedback = document.querySelector('.feedback');
const feedBackForm = document.querySelector('#feedBackForm');
const closeFormBtn = document.querySelector('.closeFormBtn');
const newFeedback = document.querySelector('.newFeedback');

feedback.addEventListener('click', (event) => {
  feedBackForm.style.display = 'block';
  feedback.style.display = 'none';
});

closeFormBtn.addEventListener('click', (event) => {
  feedBackForm.style.display = 'none';
  feedback.style.display = 'block';
  newFeedback.innerText = '';
});

feedBackForm.addEventListener('click', async (e) => {
  e.preventDefault();

  const formData = new FormData(feedBackForm);
  const inputs = Object.fromEntries(formData);

  if (e.target.classList.contains('sendFormBtn')) {
    const inputValidationName = inputs.name.trim();
    const inputValidationBody = inputs.body.trim();
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]*$/g;

    if (!inputValidationName || !inputValidationBody) {
      newFeedback.innerText = 'Поля не могут быть пустыми!';
    } else if (inputs.name.match(namePattern) === null) {
      newFeedback.innerText = 'Недопустимое значение в поле Имя!';
    } else {
      try {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });
        const result = await response.json();
        if (result.msg) {
          newFeedback.innerText = result.msg;
          feedBackForm.style.display = 'none';
        } else if (result.error) {
          newFeedback.innerText = result.error;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
});
