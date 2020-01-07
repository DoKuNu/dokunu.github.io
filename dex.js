window.onload = function()
{
    var showText = function (target, msg, index, interval) {
        if (index < msg.length) {
            $(target).append(msg[index++]);
            setTimeout(function () { showText(target, msg, index, interval); }, interval);
        }
    }
    $(function () {
        setTimeout(function(){
            showText("#name","PERY-KASZA Antoine", 0, 100);
            showText("#phone","  06.69.79.35.54", 0, 80);
            showText("#mail","  antoine.pkza@gmail.com", 0, 80);
            showText("#web"," apekka.github.io", 0, 80);
        }, 2100);
    })
    document.getElementById('logohl').className = "slide";
    document.getElementById('gamepad').className += " slide";
    document.getElementById('phpgauge').className += " slide";
    document.getElementById('htmlgauge').className += " slide";
    document.getElementById('jsgauge').className += " slide";
    document.getElementById('androidgauge').className += " slide";
    document.getElementById('javagauge').className += " slide";
    document.getElementById('kotlingauge').className += " slide";
    document.getElementById('englishgauge').className += " slide";
    document.getElementById('esgauge').className += " slide";
    document.getElementById('jpgauge').className += " slide";

    var photo = document.getElementById('img');
    var overlay = document.getElementById('overlay');
    overlay.addEventListener("mouseover", scroll);
    function scroll(){
        var animation = new TimelineLite();
        animation.to(overlay, 3, {height:"0px"});
    }
    




}

/**
 * Created by DoKuNu on 18/08/2016.
 */
