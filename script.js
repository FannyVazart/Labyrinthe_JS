let size = 6;
let ex = 'ex-0';
let antiInifinityLOL = 0;

let labyrinthe = createLab(size, ex);
insertLabDOM(labyrinthe);

let solution = itDFSExit(labyrinthe);
console.log(solution);

function createLab(size, ex) {
    return data[size][ex];
}

function getCell(labyrinthe, x, y) {
    for (let cell of labyrinthe) {
        if (cell.posX == x && cell.posY == y) {
            return cell;
        }
    }
}

function insertLabDOM(labyrinthe) {

    for (let i = 0; i < labyrinthe.length; i++) {

        let div = document.createElement("div");
        div.id = 'case';

        if (labyrinthe[i].entrance) {
            div.style.backgroundColor = 'orange';
        }

        if (labyrinthe[i].exit) {
            div.style.backgroundColor = 'green';
        }

        if (labyrinthe[i].walls[0]) {
            div.style.borderTopColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        if (labyrinthe[i].walls[1]) {
            div.style.borderRightColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        if (labyrinthe[i].walls[2]) {
            div.style.borderBottomColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        if (labyrinthe[i].walls[3]) {
            div.style.borderLeftColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        let labtotal = document.getElementById("labtotal");
        labtotal.appendChild(div);

        labtotal.style.width = size * 50 + 'px';
    }
}

function getAccessibleNeighbors(labyrinthe, posX, posY) {
    let neighbors = [];
    for (let i = 0; i < labyrinthe.length; i++) {
        if (posX === labyrinthe[i]["posX"] && posY === labyrinthe[i]["posY"]) {

            if (labyrinthe[i].walls[0] === false) {
                neighbors.push(getCell(labyrinthe, posX - 1, posY));
            }

            if (labyrinthe[i].walls[1] === false) {
                neighbors.push(getCell(labyrinthe, posX, posY + 1));
            }

            if (labyrinthe[i].walls[2] === false) {
                neighbors.push(getCell(labyrinthe, posX + 1, posY));
            }

            if (labyrinthe[i].walls[3] === false) {
                neighbors.push(getCell(labyrinthe, posX, posY - 1));
            }

        }
    }
    return neighbors;
}

// function isExit() {
//     if (getCell().entrance
// }

function itDFSExit(labyrinthe) {
    let posJX = 0;
    let posJY = 0;
    let currentCell = getCell(labyrinthe, posJX, posJY);
    let stack = [];
    let visited = [];
    let lastElStack = stack[stack.length - 1];
    let exit = getCell(labyrinthe, size - 1, size - 1)

    stack.push(currentCell);
    visited.push(currentCell);

    while (antiInifinityLOL < 100 && stack != []) {
        antiInifinityLOL += 1;

        stack.pop(lastElStack);

        if (stack.indexOf(currentCell) === -1) {
            stack.push(currentCell);

            if (currentCell = exit) {
                return [stack, visited];
            } else {
                getAccessibleNeighbors(labyrinthe, posJX, posJY).forEach((neighbor) => {
                    if (stack.indexOf(neighbor) === -1) {
                        visited.push(neighbor);
                        stack.push(neighbor);
                    }
                })
            }
        }

    }
    return 'Undefined';
}

