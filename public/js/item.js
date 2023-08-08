const container = document.querySelector('.item-container');

const paragraph = document.querySelector('.alert_items');

container.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    const response = await fetch(
      `/catalog/item/${event.target.dataset.deleteItem}`,
      {
        method: 'DELETE',
      }
    );
    const result = await response.json();
    if (result.msg) {
      event.target.closest('.card').remove();
    }
  } else if (event.target.classList.contains('editBtn')) {
    const cardHidden = document.getElementById(
      `card-hidden-${event.target.dataset.editItem}`
    );
    const hiddenForm = document.getElementById(
      `hide-form-${event.target.dataset.editItem}`
    );
    cardHidden.style.display = 'none';
    hiddenForm.style.display = 'block';
  } else if (event.target.dataset.sendEditItem) {
    const editItemForm = document.getElementById(
      `editItem-${event.target.dataset.sendEditItem}`
    );
    const data = new FormData(editItemForm);
    const inputs = Object.fromEntries(data);

    if (!inputs.categoryName || !inputs.name || !inputs.description) {
      paragraph.innerText = 'Все поля кроме фото обязательны!';
    } else {
      try {
        const response = await fetch(
          `/catalog/item/${event.target.dataset.sendEditItem}`,
          {
            method: 'PUT',

            body: data,
          }
        );
        const result = await response.json();

        if (result.msg) {
          const cardHidden = document.getElementById(
            `card-hidden-${event.target.dataset.sendEditItem}`
          );

          const hiddenForm = document.getElementById(
            `hide-form-${event.target.dataset.sendEditItem}`
          );
          cardHidden.style.display = 'block';
          hiddenForm.style.display = 'none';
          const imageItem = document.getElementById(
            `card-img-top-${event.target.dataset.sendEditItem}`
          );
          imageItem.setAttribute('src', result.image);
          const titleHeader = document.getElementById(
            `card-title-${event.target.dataset.sendEditItem}`
          );
          titleHeader.innerText = result.name;
          const itemText = document.getElementById(
            `card-text-${event.target.dataset.sendEditItem}`
          );
          itemText.innerText = result.description;
        } else if (result.error) {
          paragraph.innerText = result.error;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
});
