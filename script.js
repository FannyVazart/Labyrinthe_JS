
function createLab(size, example) {

    for (let i = 0; i < data[size][example].length; i++) {

        let div = document.createElement("div");
        div.id = 'case';

        if (data[size][example][i].entrance){
            div.style.backgroundColor='green';
        }   

        if (data[size][example][i].exit){
            div.style.backgroundColor='red';
        } 

        if (data[size][example][i].walls[0]){
            div.style.borderTopColor='red';
            div.style.borderStyle='solid';
            div.style.borderWidth='1px';
        }
        
        if (data[size][example][i].walls[1]){
            div.style.borderRightColor='red';
            div.style.borderStyle='solid';
            div.style.borderWidth='1px';
        }

        if (data[size][example][i].walls[2]){
            div.style.borderBottomColor='red';
            div.style.borderStyle='solid';
            div.style.borderWidth='1px';
        }

        if (data[size][example][i].walls[3]){
            div.style.borderLeftColor='red';
            div.style.borderStyle='solid';
            div.style.borderWidth='1px';
        }

        console.log(data[size][example][i]);
        let labtotal = document.getElementById("labtotal");
        labtotal.appendChild(div);
        
        labtotal.style.width = size * 50 + 'px';
}
}

createLab(25, "ex-2");



