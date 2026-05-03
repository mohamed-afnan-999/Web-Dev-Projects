let container = document.createElement('div');
container.style.width = '100%';
container.style.height = '960px';

const body = document.querySelector('body');

// 16 x 16 grid of square divs
function createGrid(n) {
    for (let i = 1; i <= n; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');
        // gridRow.style.height = '54.25';
        // gridRow.style.width = `${59.8125 * 16}`;

        for (let j = 1; j <= n; j++) {
            let gridCell = document.createElement('div');
            // gridCell.style.height = '54.25';
            // gridCell.style.width = '59.8125';
            gridCell.style.flex = '1';

            // gridCell.style.color = 'white';
            gridCell.classList.add('cell');

            gridRow.appendChild(gridCell);
        }
        gridRow.style.display = 'flex';
        gridRow.style.flex = '1';
        // gridRow.style.justifyContent = 'space-around';
        container.appendChild(gridRow);
    }
    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    body.appendChild(container);

    const cells = document.querySelectorAll('.cell');
    for (let cell of cells) {
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('hover-on');
        });
    }
}

function removeGrid() {
    // remove existing grid
    container.innerHTML = "";
}

// default grid
createGrid(100);


const btn = document.createElement('button');
btn.textContent = 'Gridify';
btn.onclick = () => {
    let n = parseInt(prompt('Enter number of squares per side in the grid: '));
    if (n)
    {
        if(n>100)
            n = 100;

        //update the grid
        removeGrid();
        createGrid(n);    
    }
}

body.insertBefore(btn, body.firstChild)