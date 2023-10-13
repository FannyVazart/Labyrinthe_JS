let size = 5;
let ex = 'ex-2';
let antiEndlessLoop = 0;

let labyrinthe = createLab(size, ex);
insertLabDOM(labyrinthe);

// let solutionDFS = DFSExit(labyrinthe);
let solutionBFS = BFSExit(labyrinthe);

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

function getAllVisited(data) {
    return data.filter(cell => cell.visited);
}

function DFSExit(labyrinthe) {
    let currentCell = getCell(labyrinthe, 0, 4);
    currentCell.id = 'curcel';
    let stack = [];
    let path = [];

    stack.push(currentCell);

    while (antiEndlessLoop < 500 && stack.length > 0) {
        antiEndlessLoop += 1;

        currentCell = stack.pop();
        path.push(currentCell);

        if (currentCell.exit) {
            console.log("RESOLUUUU", currentCell, path);
            return [stack, getAllVisited(labyrinthe), path];
        }

        if (!currentCell.visited) {
            currentCell.visited = true;

            let neighbors = getAccessibleNeighbors(labyrinthe, currentCell.posX, currentCell.posY);
            neighbors.forEach(neighbor => {
                if (!neighbor.visited) {
                    stack.push(neighbor);
                }
            })

        }

    }
    return 'Undefined';
}

function BFSExit(labyrinthe) {
    let currentCell = getCell(labyrinthe, 0, 4);
    currentCell.id = 'curcel';
    let queue = [];
    let path = [];

    queue.push(currentCell);
    path.push(currentCell);

    while (antiEndlessLoop < 5000 && queue.length > 0) {
        antiEndlessLoop += 1;

        currentCell = queue.shift();

        if (currentCell.exit) {
            console.log("RESOLUUUU", currentCell, getAllVisited(labyrinthe));
            return [queue, getAllVisited(labyrinthe), path];
        }

        if (!currentCell.visited) {
            currentCell.visited = true;

            let neighbors = getAccessibleNeighbors(labyrinthe, currentCell.posX, currentCell.posY);
            neighbors.forEach(neighbor => {
                if (!neighbor.visited) {
                    queue.push(neighbor);
                }
            })

        }

    }
    return 'Undefined';
}

// function pathDOM(path) {
//     for (let i = 0; i < path.length; i++) {

//         let activCell = document.createElement("div");
//         div.id = 'activeCell';
        
//         activCell = path[i];

//         let labtotal = document.getElementById("labtotal");
//         labtotal.appendChild(activCell);
//     }
// }