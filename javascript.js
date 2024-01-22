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
        box.addEventListener("mouseover", (e) => {

            if(!box.alpha){
            box.alpha = 0;
            }

            box.style.backgroundColor = `rgb(${getColor()-box.alpha},${getColor()-box.alpha},${getColor()-box.alpha})`

               if(box.alpha < 256){     
                box.alpha += 25.6;
               }
        });
    
    })
}


