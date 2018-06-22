document.addEventListener("DOMContentLoaded", function () {
    var clickCount = 0;
    var gameBoard = document.querySelector(".game-board");

    timer = setInterval(function() {
        var figure = document.createElement("div");
        figure.classList.add("figure");

        //losujemy randomowe położenie między 50px a 400px;
        var randomBottom = (Math.random()*(380-50+1)+50);

        //losujemy randomowe skale;
        var randomScaleOne =(Math.random()*(1-0.7+1)+0.7);
        var randomScaleTwo = (Math.random()*(0.7-0.35+1)+0.35);
        var randomScaleThree = (Math.random()*(0.35-0.1+1)+0.1);
        figure.style.bottom = randomBottom + "px";

        //w zaleznosci od polozenia, zmienia się wielkość:
        if (randomBottom >= 50 && randomBottom <= 200 ) {
            figure.style.transform = "scale(" + randomScaleOne +")";
            figure.style.zIndex = "100";
        } else if (randomBottom > 200 && randomBottom <= 300) {
            figure.style.transform = "scale(" + randomScaleTwo +")";
            figure.style.zIndex = "50";
        } else {
            figure.style.transform = "scale(" + randomScaleThree +")";
            figure.style.zIndex = "1";
        }

        var randomSpeed = Math.random()*(10-0.5+1)+0.5;
        figure.style.animationDuration = "0.5s," + randomSpeed+ "s";

        var score = document.querySelector(".score-result");


        function clickCounter(event) {
            clickCount += 1;
            score.innerHTML = clickCount;
            figure.style.display = "none";
        }

        figure.addEventListener("click", clickCounter);

        gameBoard.appendChild(figure);

        figure.addEventListener("animationend", function(event) {
            this.remove();

        })

    }, 1000)




});