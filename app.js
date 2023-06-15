let turn = document.getElementById('heading-turn');
let boxes = document.querySelectorAll('.box')
let current_player = 0

startGame()

function startGame() {
    let boxes = document.getElementsByClassName('box');
    let boxesArray = [...boxes];
    
    //console.log(boxes)

    boxesArray.forEach((box) =>  {

        box.addEventListener('click', function () {
            if (box.innerHTML == '') {
                if (current_player % 2 === 0) {
                    box.innerHTML = 'X'
                    turn.innerHTML = "Player O's Turn!"
                    current_player +=  1
                } else {
                box.innerHTML = 'O'
                turn.innerHTML = "Player X's Turn!"
                current_player += 1
                }   
            }
        })
    })


}
