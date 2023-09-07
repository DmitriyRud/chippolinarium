let updatedPrices = [];

const priceTable = document.getElementById('price-table');
const buttonSave1 = document.getElementById('btnSave-1');
const buttonSave2 = document.getElementById('btnSave-2');
const priceContainer = document.getElementById('price-container');
const PACKAGES = ['kg025', 'kg05', 'kg1', 'kg3', 'kg5', 'kg10'];

priceContainer.addEventListener('click', async (e) => {
  if (e.target.id.includes('btnSave-')) {
    const response = await fetch('/prices', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedPrices }),
    });
    const result = await response.json();
    if (result.msg) {
      console.log(result.msg);
      buttonSave1.setAttribute('disabled', 'true');
      buttonSave2.setAttribute('disabled', 'true');
      window.location.reload(true);
    } else if (result.error) {
      console.log(result.error);
    } else {
      console.log('Unexpected error on back-end while price updating');
    }
  } else if (e.target.id.includes('btnAdd-')) {
    const categoryId = Number(e.target.id.split('-')[1]);
    const currentRow = e.target.parentNode.parentNode;
    currentRow.className = 'content-tr';
    for (let i = 0; i < PACKAGES.length; i++) {
      const newTD = document.createElement('td');
      const newInput = document.createElement('input');
      newInput.setAttribute('type', 'number');
      newInput.setAttribute('name', `input-${PACKAGES[i]}`);
      newInput.className = 'price-inputs';
      newInput.setAttribute('id', `input-${PACKAGES[i]}-new-${categoryId}`);
      newInput.value = 0;
      newTD.appendChild(newInput);
      currentRow.appendChild(newTD);
    }
    const selectName = document.getElementById(`selectName-${categoryId}`);
    const itemObj = {
      catId: `selectName-${categoryId}`,
      itemId: selectName[selectName.selectedIndex].id,
      itemName: selectName.value,
      updated: false,
    };
    for (let i = 0; i < PACKAGES.length; i++) {
      itemObj[PACKAGES[i]] = 0;
    }
    updatedPrices.push(itemObj);
    buttonSave1.removeAttribute('disabled');
    buttonSave2.removeAttribute('disabled');
    e.target.setAttribute('disabled', true);
    // console.log('updatedPrices : ', updatedPrices);
  } else if (e.target.id.includes('btnDel-')) {
    const delPriceId = e.target.parentNode.id.split('-')[2];
    const response = await fetch('/prices', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceToDelete: delPriceId }),
    });
    const result = await response.json();
    if (result.msg) {
      console.log(result.msg);
      window.location.reload(true);
    } else if (result.error) {
      console.log(result.error);
    } else {
      console.log('Unexpected error on back-end while price deleting');
    }
  }
});

priceTable.addEventListener('change', (e) => {
  if (e.target.type === 'number') {
    e.preventDefault();
    buttonSave1.removeAttribute('disabled');
    buttonSave2.removeAttribute('disabled');

    const packages = e.target.id.split('-')[1];
    let itemId = e.target.id.split('-')[2];

    if (itemId === 'new') {
      const categoryId = e.target.id.split('-')[3];
      const selectName = document.getElementById(`selectName-${categoryId}`);
      const updPriceInd = updatedPrices.findIndex(
        (e) => e.itemName === selectName.value
      );
      if (updPriceInd >= 0) {
        updatedPrices[updPriceInd][packages] = Number(e.target.value);
      }
    } else {
      itemId = Number(itemId);
      const updPriceInd = updatedPrices.findIndex((e) => e.itemId === itemId);
      if (updPriceInd >= 0) {
        updatedPrices[updPriceInd][packages] = Number(e.target.value);
        updatedPrices[updPriceInd].updated = true;
      } else {
        const itemObj = {
          itemId,
          updated: true,
        };
        itemObj[packages] = Number(e.target.value);
        updatedPrices.push(itemObj);
      }
    }
  } else if (e.target.type === 'select-one') {
    const updPriceInd = updatedPrices.findIndex(
      (obj) => 'itemName' in obj && obj.catId === e.target.id
    );
    if (updPriceInd >= 0) {
      updatedPrices[updPriceInd].itemName = e.target.value;
    }
  }
  // console.log('updatedPrices : ', updatedPrices);
});
