const mainDiv = document.querySelector('#container');
const btn = document.querySelector('#btn');
let gridSize = 16;
let gridBox = document.querySelectorAll('.divBox')

runGrid(gridSize);

        btn.addEventListener('click', (e) => {
            
            return runGrid(document.getElementById('gridSize').value);
        })

function getColor(){
    return Math.floor(Math.random() * 255);
}

function runGrid(gridSize){

    while (mainDiv.firstChild) {
      mainDiv.removeChild(mainDiv.lastChild);
    }


    for(let i = 0; i < gridSize; i++){

        let divRow = document.createElement('div');
            divRow.setAttribute('class', 'divRow');

        for(let j = 0; j < gridSize; j++){
            let divBox = document.createElement('div');
                divBox.setAttribute('class', 'divBox');
                    divRow.appendChild(divBox);
        }
            mainDiv.appendChild(divRow);
            
    }
    gridBox = document.querySelectorAll('.divBox')

    gridBox.forEach(box => {
        box.addEventListener("mouseenter", (e) => {

            let alpha = parseFloat(box.style.backgroundColor.split(',')[3]);
            if(isNaN(alpha) && box.style.color != 'red'){
                    alpha = 0;
            } else {
                alpha = alpha * 10;
            }

                if(box.style.color == 'red'){
                    box.style.backgroundColor = `rgba(${getColor()},${getColor()},${getColor()},1)`
                } else if (alpha == 9){
                    box.style.color = 'red';
                } else {

            box.style.backgroundColor = `rgba(${getColor()},${getColor()},${getColor()},${++alpha / 10})`

            }
        });
    
        // box.addEventListener("mouseout", (e) => {
        //     box.setAttribute('class', 'divBox');
        // });
    
    })
}


