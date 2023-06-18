let turn = document.getElementById('heading-turn');
let boxes = document.querySelectorAll('.box')
let restartBtn = document.getElementById('restart')
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
                    winner()
                    current_player +=  1
                } else {
                    box.innerHTML = 'O'
                    turn.innerHTML = "Player X's Turn!"
                    winner()
                    current_player += 1
                    }   
                }
        })
    })
}

function winner() {
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let box4 = document.getElementById('box4');
    let box5 = document.getElementById('box5');
    let box6 = document.getElementById('box6');
    let box7 = document.getElementById('box7');
    let box8 = document.getElementById('box8');
    let box9 = document.getElementById('box9');

    if (box1.innerHTML !=='' && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML) {
        let winner = box1.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box4.innerHTML !=='' && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML) {
        let winner = box4.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box7.innerHTML !=='' && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML) {
        let winner = box7.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box1.innerHTML !=='' && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML) {
        let winner = box1.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box2.innerHTML !=='' && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) {
        let winner = box2.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box3.innerHTML !=='' && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) {
        let winner = box3.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box1.innerHTML !=='' && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) {
        let winner = box1.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
    if (box3.innerHTML !=='' && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML) {
        let winner = box3.innerHTML
        turn.innerHTML = `${winner} is the winner!`
        turn.classList.add('win')
    }
}

restartBtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerHTML = ''
        turn.innerHTML = 'Start'
        turn.classList.remove('win')
    })
})

