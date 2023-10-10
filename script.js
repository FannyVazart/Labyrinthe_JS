
function createLab(size, example) {

    for (let i = 0; i < data[size][example].length; i++) {

        let div = document.createElement("div");
        div.id = 'case';

        if (data[size][example][i].entrance) {
            div.style.backgroundColor = 'orange';
        }

        if (data[size][example][i].exit) {
            div.style.backgroundColor = 'green';
        }

        if (data[size][example][i].walls[0]) {
            div.style.borderTopColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        if (data[size][example][i].walls[1]) {
            div.style.borderRightColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        if (data[size][example][i].walls[2]) {
            div.style.borderBottomColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        if (data[size][example][i].walls[3]) {
            div.style.borderLeftColor = 'red';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px';
        }

        let labtotal = document.getElementById("labtotal");
        labtotal.appendChild(div);

        labtotal.style.width = size * 50 + 'px';
    }
}

createLab(6, "ex-0");

function findExit(size, example) {



    // posPersoX >= 0;
    // posPersoX < size;
    // posPersoY >= 0;
    // posPersoY < size;

    let posPersoX = 3;
    let posPersoY = 4;

    // while (posPersoX != size && posPersoY != size) {


    let cellInfo = data[size][example];
    let positions = [];

    //  if (data[size][example][i].entrance) {
    //     posPersoX = data[size][example][i].posX;
    //     posPersoY = data[size][example][i].posY;
    // }

    for (let i = 0; i < data[size][example].length; i++) {

        if (posPersoX === cellInfo[i]["posX"] && posPersoY === cellInfo[i]["posY"]) {

            // let pion = document.createElement("div");
            // pion.id = 'pion';
            // document.getElementById("case").appendChild(pion);

            console.log(cellInfo[i]);

            if (cellInfo[i].walls[0] === false) {
                posPersoX = posPersoX - 1;
            }

            else if (cellInfo[i].walls[3] === false) {
                posPersoY = posPersoY - 1;
            }

            else if (cellInfo[i].walls[1] === false) {
                posPersoY = posPersoY + 1;
            }

            else if (cellInfo[i].walls[2] === false) {
                posPersoX = posPersoX + 1;
            }

        }
    }

    // "posX": 3,
    // "posY": 4,
    // "walls": [
    //     false,
    //     false,
    //     true,
    //     true
    // ]
    console.log(posPersoX, posPersoY);

}
// }

findExit(6, "ex-0");

