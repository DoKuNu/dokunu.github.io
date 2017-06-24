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
            showText("#home"," 10 rue de la place, 77410 Claye-Souilly", 0, 80);
            showText("#phone","  06.69.79.35.54", 0, 80);
            showText("#mail","  dokunu@gmail.com", 0, 80);
            showText("#web","  dokunu.github.io", 0, 80);
        }, 2100);
    })
    document.getElementById('mmilogo').className = "slide";
    document.getElementById('logohl').className = "slide";
    document.getElementById('gamepad').className += " slide";
    document.getElementById('englishgauge').className += " slide";
    document.getElementById('esgauge').className += " slide";
    document.getElementById('jpgauge').className += " slide";
    document.getElementById('psgauge').className += " slide";
    document.getElementById('prgauge').className += " slide";
    document.getElementById('idgauge').className += " slide";
    document.getElementById('phpgauge').className += " slide";
    document.getElementById('htmlgauge').className += " slide";
    document.getElementById('jsgauge').className += " slide";
    document.getElementById('androidgauge').className += " slide";

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
