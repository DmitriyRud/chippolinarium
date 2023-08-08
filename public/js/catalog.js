const containerCategory = document.querySelector('.containerCategory');

const paragraph = document.querySelector('.alert_items');

containerCategory.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    const response = await fetch(
      `/catalog/${event.target.dataset.deleteItem}`,
      {
        method: 'DELETE',
      }
    );
    const result = await response.json();
    if (result.msg) {
      event.target.closest('.card').remove();
    }
  } else if (event.target.classList.contains('editBtn')) {
    const hiddenForm = document.getElementById(
      `hide-form-${event.target.dataset.editCategory}`
    );

    hiddenForm.style.display = 'block';
  } else if (event.target.dataset.sendEditCategory) {
    const editCategoryForm = document.getElementById(
      `editCategory-${event.target.dataset.sendEditCategory}`
    );

    const data = new FormData(editCategoryForm);
    const inputs = Object.fromEntries(data);

    const id = event.target.dataset.sendEditCategory;

    if (!inputs.title || !inputs.description) {
      paragraph.innerText = 'Все поля кроме фото обязательны!';
    } else {
      try {
        const response = await fetch(
          `/catalog/${event.target.dataset.sendEditCategory}`,
          {
            method: 'PUT',
            body: data,
            id,
          }
        );
        const result = await response.json();

        if (result.msg) {
          const hiddenForm = document.getElementById(
            `hide-form-${event.target.dataset.sendEditCategory}`
          );
          hiddenForm.style.display = 'none';
          const imageCategory = document.getElementById(
            `card-img-top-${event.target.dataset.sendEditCategory}`
          );
          imageCategory.setAttribute('src', result.image);
          const titleHeader = document.getElementById(
            `card-title-${event.target.dataset.sendEditCategory}`
          );
          titleHeader.innerText = result.title;
          const itemText = document.getElementById(
            `card-text-${event.target.dataset.sendEditCategory}`
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
