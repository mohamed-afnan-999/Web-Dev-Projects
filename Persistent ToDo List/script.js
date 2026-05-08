const inputBox = document.getElementById('input-box');
const addItemBtn = document.getElementById('add-item');

const itemsList = document.getElementById('items');

let itemsEntered = [];      // list to save entered items

function renderItems() {
    itemsList.innerHTML = '';

    if (itemsEntered.length > 0) {
        // render items to the screen
        itemsEntered.forEach((itemEntered, i) => {
            const container = document.createElement('div');

            let item = document.createElement('p');
            item.style.display = 'inline';
            item.textContent = itemEntered;
            container.appendChild(item);

            const btn = document.createElement('button');
            btn.textContent = 'delete';
            btn.onclick = () => removeItem(i);
            container.appendChild(btn);

            itemsList.append(container);
        });
    }
}

function addItem() {
    const itemEntered = inputBox.value.trim();
    if (itemEntered) {
        // add entered item to the list
        itemsEntered.push(itemEntered);
        inputBox.value = '';
        renderItems();
        saveItems();
    }
    else
        alert('ENter an item to add..');
}

function saveItems() {
    const stringItem = JSON.stringify(itemsEntered);
    localStorage.setItem('items', stringItem);
}

function loadItems() {
    const oldItems = localStorage.getItem('items');
    if (oldItems)
        itemsEntered = JSON.parse(oldItems);
    renderItems();
}

document.addEventListener('DOMContentLoaded', loadItems);  // add any items to the list when the page is re-loaded

addItemBtn.addEventListener('click', addItem);

function removeItem(i) {
    itemsEntered.splice(i, 1);
    saveItems();
    renderItems();
}
