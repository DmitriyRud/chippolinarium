const { newCategory } = document.forms;

const createCategory = document.querySelector('.createCategory');
const inputs = document.querySelectorAll('input');

const approvedFeedback = document.querySelector('.approved_feedback');

const cardFeedback = document.querySelector('.card_feedback');
const updateAdminBtn = document.querySelector('.updateAdmin-btn');
const updateForm = document.querySelector('.update-form');
const message = document.querySelector('.message1');
const closeBtn = document.querySelector('.close-update-btn');

newCategory.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = new FormData(newCategory);
  const categoryInputs = Object.fromEntries(data);
  const inputValidationTitle = categoryInputs.title.trim();
  const inputValidationDescription = categoryInputs.description.trim();
  if (!inputValidationTitle || !inputValidationDescription) {
    createCategory.innerText = 'Поля не могут быть пустыми!';
  } else {
    try {
      const response = await fetch('/accountPanel', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.msg) {
        createCategory.innerText = result.msg;
        inputs.forEach((el) => (el.value = ''));
      } else if (result.error) {
        createCategory.innerText = result.error;
      } else {
        createCategory.innerText = 'Ошибка базы данных';
      }
    } catch (error) {
      console.log('owibka', error);
    }
  }
});

cardFeedback.addEventListener('click', async (e) => {
  e.preventDefault();
  if (
    e.target.tagName === 'BUTTON' &&
    e.target.classList.contains('approved')
  ) {
    const response = await fetch(`/accountPanel/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: e.target.id }),
    });
    const result = await response.json();
    if (result.msg) {
      approvedFeedback.innerText = result.msg;
      setTimeout(() => {
        approvedFeedback.innerText = '';
      }, 2000);
      const cardBody = document.getElementById(`card-${e.target.id}`);
      cardBody.remove();
    } else if (result.error) {
      approvedFeedback.innerText = result.error;
      setTimeout(() => {
        approvedFeedback.innerText = '';
      }, 2000);
    }
  } else if (
    e.target.tagName === 'BUTTON' &&
    e.target.classList.contains('deleteFeedback')
  ) {
    try {
      const response = await fetch(`/accountPanel/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: e.target.id }),
      });
      const result = await response.json();
      if (result.msg) {
        approvedFeedback.innerText = result.msg;
        setTimeout(() => {
          approvedFeedback.innerText = '';
        }, 2000);
        const cardBody = document.getElementById(`card-${e.target.id}`);
        cardBody.remove();
      } else if (result.error) {
        approvedFeedback.innerText = result.error;
        setTimeout(() => {
          approvedFeedback.innerText = '';
        }, 2000);
      }
    } catch (error) {
      console.log('owibka', error);
    }
  } else if (
    e.target.tagName === 'BUTTON' &&
    e.target.classList.contains('editFeedback')
  ) {
    try {
      const response = await fetch(
        `/accountPanel/edit-feedback/${e.target.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: e.target.id }),
        }
      );

      const result = await response.json();

      const editForm = `
      
    <form id="feedBackFormEdit">
    <p class="feedback_alert_edit"></p>
    <div class="mb-3">
      <label htmlFor="exampleInputPassword1" class="form-label">
        Ваше имя
      </label>
      <input
        name="name"
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        value=${result.name}
      />
    </div>

    <div class="mb-3">
      <label htmlFor="exampleInputPassword1" class="form-label">
        Напишите Ваш отзыв
      </label>
      <input
        name="body"
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        value='${result.body}'
      />
    </div>

    <button id=${result.id} type="submit" class="btn btn-send-feed">
      Отправить
    </button>
    </form>

    `;

      if (!document.querySelector('#feedBackFormEdit')) {
        cardFeedback.insertAdjacentHTML('beforebegin', editForm);
      }

      const { feedBackFormEdit } = document.forms;

      feedBackFormEdit.addEventListener('submit', async (event) => {
        event.preventDefault();

        const feedbackAlert = document.querySelector('.feedback_alert_edit');

        const dataEdit = new FormData(feedBackFormEdit);
        const inputsEdit = Object.fromEntries(dataEdit);

        const inputValidationName = inputsEdit.name.trim();
        const inputValidationBody = inputsEdit.body.trim();
        const namePattern = /^[A-Za-zА-Яа-яЁё\s]*$/g;

        if (!inputValidationName || !inputValidationBody) {
          feedbackAlert.innerText = 'Поля не могут быть пустыми!';
        } else if (inputsEdit.name.match(namePattern) === null) {
          feedbackAlert.innerText = 'Недопустимое значение в поле Имя!';
        } else {
          try {
            const resp = await fetch(
              `/accountPanel/edit-feedback/${e.target.id}`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputsEdit),
              }
            );
            const resultEdit = await resp.json();

            const divEditContainer = document.getElementById(
              `card-${resultEdit.id}`
            );

            const newCardEdit = `
            <div class="card-body" key=${resultEdit.id}>
                <h5 class="card-title">${resultEdit.name}</h5>
                <p class="card-text">${resultEdit.body}</p>
              </div>
        
              <div class="div_button_feedback">
                  <button
                    id="${resultEdit.id}"
                    type="button"
                    class="btn approved"
                  >
                    Отзыв прошёл
                  </button>
                  <button
                  id="${resultEdit.id}"
                    type="button"
                    class="btn deleteFeedback"
                  >
                    Удалить отзыв
                  </button>
                  <button
                  id="${resultEdit.id}"
                    type="button"
                    class="btn editFeedback"
                  >
                    Изменить отзыв
                  </button>
              
                <div>
                `;
            divEditContainer.innerHTML = newCardEdit;
            const editFormResult = document.getElementById('feedBackFormEdit');
            editFormResult.remove();
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
});

const { newItem } = document.forms;
const createItem = document.querySelector('.createItem');
newItem.addEventListener('submit', async (event) => {
  event.preventDefault();

  const dataItem = new FormData(newItem);

  try {
    const response = await fetch('/accountPanel/item', {
      method: 'POST',
      body: dataItem,
    });
    const result = await response.json();
    if (result.msg) {
      createItem.innerText = result.msg;
      inputs.forEach((el) => (el.value = ''));
    } else if (result.error) {
      createItem.innerText = result.error;
    } else {
      createItem.innerText = 'Ошибка базы данных';
    }
  } catch (error) {
    console.log('owibka', error);
  }
});
updateAdminBtn.addEventListener('click', (event) => {
  event.preventDefault();
  updateForm.style = 'display:block';
});
closeBtn.addEventListener('click', () => {
  updateForm.style = 'display:none';
  message.innerText = '';
});
updateForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(updateForm);
  const res = Object.fromEntries(data);

  const inputValidationOldEmail = res.oldEmail.trim();
  const inputValidationOldPassword = res.oldPassword.trim();
  const inputValidationNewEmail = res.newEmail.trim();
  const inputValidationNewPassword1 = res.newPassword1.trim();
  const inputValidationOldPassword2 = res.newPassword2.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

  if (
    !inputValidationOldEmail ||
    !inputValidationOldPassword ||
    !inputValidationNewEmail ||
    !inputValidationNewPassword1 ||
    !inputValidationOldPassword2
  ) {
    message.innerText = 'Поля не могут быть пустыми!';
  } else if (
    res.oldEmail.match(emailPattern) === null ||
    res.newEmail.match(emailPattern) === null
  ) {
    message.innerText = 'Некорректный email!';
  } else {
    try {
      const response = await fetch('/accountPanel/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.msg) {
        message.innerText = result.msg;
      }
      if (result.success) {
        message.innerText = result.success;
      }
    } catch (error) {
      console.log('FRONT', error);
    }
  }
});
