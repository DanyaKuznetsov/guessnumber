let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let newGameButton = document.querySelector('#button');
let buttonsDiv = document.querySelector('.buttons');
let clueParagraph = document.querySelector('.start')
let trySpan = document.querySelector('#try');
let tryNumber = 3;
let allButtons = buttonsDiv.querySelectorAll('button');
let audio = new Audio();
let width = window.innerWidth;
let bigFontSize = 36;
let littleFontSize = 24;
console.log(width);
if(width < 500){
    bigFontSize = 24;
    littleFontSize = 16;
}
newGameButton.onclick = function () {
    tryNumber = 3;
    trySpan.innerHTML = 3;
    for(let i = 0;i < allButtons.length; i++){
        allButtons[i].classList.remove('not-active', 'winner');
    }
    newGameButton.classList.add('not-active')
    clueParagraph.innerHTML = 'Чего ждёшь? Пробуй!';
    randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    clueParagraph.style.fontSize = bigFontSize + 'px';
}
buttonsDiv.onclick = function (e) {
    let button = e.target;
    if(button.innerHTML != 'Новая игра'){
        if(button.innerHTML == randomNumber){
            audio.src = 'audio/happy-wheels-z_uk-pobedy.mp3';
            audio.play();    
            clueParagraph.innerHTML = 'Ты угадал!';
            clueParagraph.style.fontSize = bigFontSize + 'px';
            for(let i = 0;i < allButtons.length; i++){
                allButtons[i].classList.add('not-active');
            }
            button.classList.add('winner');
            newGameButton.classList.remove('not-active');
        }else{
            if(randomNumber > button.innerHTML){
                clueParagraph.innerHTML = 'Секретное число больше чем ' + button.innerHTML;
            }else{
                clueParagraph.innerHTML = 'Секретное число меньше чем ' + button.innerHTML;
            }
            button.classList.add('not-active');
            clueParagraph.style.fontSize = littleFontSize + 'px';
            tryNumber = tryNumber - 1;
            if(tryNumber == 0){
                for(let i = 0;i < allButtons.length; i++){
                    allButtons[i].classList.add('not-active');
                }
                // allButtons[0].classList.add('not-active');
                // allButtons[1].classList.add('not-active');
                // allButtons[2].classList.add('not-active');
                // allButtons[3].classList.add('not-active');
                // allButtons[4].classList.add('not-active');
                // allButtons[5].classList.add('not-active');
                // allButtons[6].classList.add('not-active');
                // allButtons[7].classList.add('not-active');
                // allButtons[8].classList.add('not-active');
                // allButtons[9].classList.add('not-active');
                newGameButton.classList.remove('not-active');
                clueParagraph.style.fontSize = 20 + 'px';
                clueParagraph.innerHTML = 'Ты проиграл! Секретное число было ' + randomNumber;
            }            
            trySpan.innerHTML = tryNumber;
        }
    }
}