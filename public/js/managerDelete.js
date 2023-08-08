const deleteManagerBtn = document.querySelectorAll('.deleteManagerBtn');
const infoDeleteManager = document.querySelector('.infoDeleteManager');

deleteManagerBtn.forEach((el) => {
  el.addEventListener('click', async (event) => {
    try {
      const response = await fetch('/accountPanel/manager', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: event.target.id }),
      });

      const result = await response.json();
      if (result.msg) {
        infoDeleteManager.innerText = result.msg;
        event.target.parentNode.remove();
      } else if (result.error) {
        infoDeleteManager.innerText = result.error;
      }
    } catch (error) {
      console.log('ne ydalil', error);
    }
  });
});
