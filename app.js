const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
let timerId ;
let timeLeft = 10;

console.log(squares);

let previousIndex = 76;
let currentIndex;


function moveFrog(e){
    switch (e.key) {
        case 'ArrowLeft':
                console.log('Left');
                if(currentIndex % 9 != 0){
                    currentIndex = previousIndex-1;
                    squares[currentIndex].classList.add('frog');
                    squares[previousIndex].classList.remove('frog');

                }
                previousIndex = currentIndex;

            break;

        case 'a':
            console.log('Left');
            if(currentIndex % 9 != 0){
                currentIndex = previousIndex-1;
                squares[currentIndex].classList.add('frog');
                squares[previousIndex].classList.remove('frog');
            }
        
            previousIndex = currentIndex;

            break;            
            
        case 'ArrowRight':
            console.log('Right');
            if(currentIndex % 9 !=8){
                currentIndex = previousIndex+1;
                squares[currentIndex].classList.add('frog');
                squares[previousIndex].classList.remove('frog');

            }
            previousIndex = currentIndex;
        break;


        case 'd':
            console.log('Right');
            currentIndex = previousIndex+1;
            squares[currentIndex].classList.add('frog');
            squares[previousIndex].classList.remove('frog');
            previousIndex = currentIndex;
        break;

        case 'ArrowUp':
            console.log('Up');
            currentIndex = previousIndex-9;
            squares[currentIndex].classList.add('frog');
            squares[previousIndex].classList.remove('frog');
            previousIndex = currentIndex;
            break;

        case 'w':
            console.log('Up');
            currentIndex = previousIndex-9;
            squares[currentIndex].classList.add('frog');
            squares[previousIndex].classList.remove('frog');
            previousIndex = currentIndex;
            break;            

    
        case 'ArrowDown':
            currentIndex = previousIndex+9;
            squares[currentIndex].classList.add('frog');
            squares[previousIndex].classList.remove('frog');
            previousIndex = currentIndex;
            console.log('down');
        break;

        case 's':
            currentIndex = previousIndex+9;
            squares[currentIndex].classList.add('frog');
            squares[previousIndex].classList.remove('frog');
            previousIndex = currentIndex;
            console.log('down');
        break;        

        default:
            break;
    }


}



function autoMoveElements(){
    logsLeft.forEach(logLeft=>logLeftMove(logLeft));
    logsRight.forEach(logRight =>logRightMove(logRight));
    carsLeft.forEach(carLeft => carLeftMove(carLeft));
    carsRight.forEach(carRight => carRightMove(carRight));
    loose();
    win();
    timeLeft--;
    console.log(timeLeft);
    timeLeftDisplay.textContent = timeLeft;
}





function logLeftMove(logLeft){
    switch(true){
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1');
            logLeft.classList.add('l2')
            break;

        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2');
            logLeft.classList.add('l3');
            break;
        case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3');
            logLeft.classList.add('l4')
            break;
    
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4');
            logLeft.classList.add('l5');
            break;

        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5');
            logLeft.classList.add('l1');
            break;
    }
}

function logRightMove(logRight)
{
    switch(true){
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1');
            logRight.classList.add('l5');
            break;

        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2');
            logRight.classList.add('l1');
            break;

        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3');
            logRight.classList.add('l2');
            break;

        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4');
            logRight.classList.add('l3');
            break;

        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5');
            logRight.classList.add('l4');
            break;
    }
}


function carLeftMove(carLeft){

    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1');
            carLeft.classList.add('c2');
            
            break;

        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2');
            carLeft.classList.add('c3');
            
            break;
            
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3');
            carLeft.classList.add('c1');
            
            break;
        default:
            break;
    }
    
}




function carRightMove(carRight){
    
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1');
            carRight.classList.add('c3');
            
            break;

        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2');
            carRight.classList.add('c1');
            
            break;

        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3');
            carRight.classList.add('c2');
            
            break;
        default:
            break;
    }

}

function loose(){
    if(squares[currentIndex].classList.contains('c1') || squares[currentIndex].classList.contains('l4') ||squares[currentIndex].classList.contains('l5s') || timeLeft===1){
        resultDisplay.textContent = "You lose";
        resultDisplay.classList.add('loose');
        console.log("You loose");
        clearInterval(timerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup', moveFrog);
    }
}

function win(){
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = "You win";
        resultDisplay.classList.add('win');
        console.log("You win");
        clearInterval(timerId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener('keyup', moveFrog);
    }
}






startPauseButton.addEventListener('click', ()=>{
    if (timerId) {
        clearInterval(timerId);
        document.removeEventListener('keyup', moveFrog);
    }
    else{
        timerId = setInterval(autoMoveElements, 1000);
        document.addEventListener('keyup', moveFrog);

    }
});



