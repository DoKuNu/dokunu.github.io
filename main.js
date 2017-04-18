//TODO : REGLER SOUCI D'OVERLAY / ANIMATION DE LA BALL / FICHE POKEDEX SUR UNE AUTRE PAGE
// HTML ET EN MODE HTML/CSS POUR PERMETTRE C/C

window.onload = function()
{
    //définition des variables
    var turn = 0;
    var attackbtn = document.getElementById('attackbox');
    attackbtn.addEventListener("click", attack);
    var itembtn = document.getElementById('itembox');
    itembtn.addEventListener("click", ballthrow);
    var note = document.getElementById('note');
    var ball = document.getElementById('ball');
    var secondball = document.getElementById('secondball');
    var showText = function (target, msg, index, interval) {
        if (index < msg.length) {
            $(target).append(msg[index++]);
            setTimeout(function () { showText(target, msg, index, interval); }, interval);
        }
    }
    //fonction de départ
    $(function () {
        showText("#text","Antoine PERY-KASZA apparaît !", 0, 10);
        setTimeout(function(){
            showText("#subtext","Que doit-faire Pikachu?", 0, 10);
        }, 650);
    })
    //cache les boutons pour attirer l'attention sur l'écran
    function hide() {
        document.getElementById("attackbox").className += " hide";
        document.getElementById("itembox").className += " hide";
        setTimeout(function(){
            document.getElementById("attackbox").className = document.getElementById("attackbox").className.replace
            ( /(?:^|\s)hide(?!\S)/g , '' );
            document.getElementById("itembox").className = document.getElementById("itembox").className.replace
            ( /(?:^|\s)hide(?!\S)/g , '' )
        }, 1360);
    }
    function longhide() {
        document.getElementById("attackbox").className += " hide";
        document.getElementById("itembox").className += " hide";
    }
    //animation du pikachu
    function jump() {
        $("#ally").animate({right: "-=15",}, 200, function() {
            $("#ally").animate({right: "+=15",}, 200)
        });
    }
    //animation de l'appat
    function move() {
        var pos = 0;
        var id = setInterval(frame, 1);
        function frame() {
            //quand la note atteint le coin haut-droit de l'écran
            if (pos == 350) {
                clearInterval(id);
                $("#doku").fadeOut(100).fadeIn(100);
                // divers events selon le tour
                switch(turn) {
                    case 1:
                        document.getElementById("dokubar").style.width = "110px";
                        document.getElementById("text").innerHTML = "";
                        document.getElementById("subtext").innerHTML = "";
                        showText("#text","Pikachu montre l'activité de l'entreprise ! ", 0, 10);
                        setTimeout(function(){
                            showText("#subtext","Antoine est assez impressionné.", 0, 10);
                        }, 650);
                        break;
                    case 2:
                        document.getElementById("dokubar").style.width = "75px";
                        document.getElementById("dokubar").style.backgroundColor = "yellow";
                        document.getElementById("text").innerHTML = "";
                        document.getElementById("subtext").innerHTML = "";
                        showText("#text","Pikachu montre l'ambiance dans l'entreprise !", 0, 10);
                        setTimeout(function(){
                            showText("#subtext","Antoine est plutôt impressionné!", 0, 10);
                        }, 650);
                        break;
                    case 3:
                        document.getElementById("dokubar").style.width = "31px";
                        document.getElementById("dokubar").style.backgroundColor = "red";
                        document.getElementById("text").innerHTML = "";
                        document.getElementById("subtext").innerHTML = "";
                        showText("#text","Pikachu montre le salaire reversé !", 0, 10);
                        setTimeout(function(){
                            showText("#subtext","Antoine est TOTALEMENT impressionné!!!", 0, 10);
                        }, 650);
                        break;
                }

                note.style.opacity = 0;
                note.style.top = 0;
                note.style.left = 0;

            } else {
                pos++;
                pos++;
                note.style.top = -pos + 'px';
                note.style.left = pos + 'px';
            }
        }
    }

    //fonction clic sur appat
    function attack() {
        switch(turn) {
            case 0:
                hide();
                jump();
                note.style.opacity = 100;
                move();
                turn++;
                document.getElementById("attackPP").innerHTML = "PP 2 / 3";
                break;
            case 1:
                hide();
                jump();
                note.style.opacity = 100;
                move();
                turn++;
                document.getElementById("attackPP").innerHTML = "PP 1 / 3";
                break;
            case 2:
                hide();
                jump();
                note.style.opacity = 100;
                move();
                turn++;
                document.getElementById("attackPP").innerHTML = "PP 0 / 3";
                break;
            case 3:
                hide();
                document.getElementById("text").innerHTML = "";
                document.getElementById("subtext").innerHTML = "";
                showText("#text","Plus de PP pour attaquer !", 0, 10);
                setTimeout(function(){
                    showText("#subtext","C'est le moment d'utiliser la Contrat Ball pour recruter Antoine!", 0, 10);
                }, 650);
                break;
        }
        console.log(turn);
    }
    //fonction quand on utilise la ball
    function ballthrow() {
        if(turn < 3) {
            hide();
            document.getElementById("text").innerHTML = "";
            document.getElementById("subtext").innerHTML = "";
            showText("#text","Contrat Ball inutilisable !", 0, 10);
            setTimeout(function(){
                showText("#subtext","Il faut d'abord appâter Antoine !", 0, 10);
            }, 650);
        } else {
                longhide();
            document.getElementById("text").innerHTML = "";
            document.getElementById("subtext").innerHTML = "";
            showText("#text","Vous lancez la Contrat Ball pour recruter Antoine !", 0, 10);
            setTimeout(function(){
                showText("#subtext","", 0, 10);
            }, 650);
                var ballpos = 0;
                var ballid = setInterval(ballframe, 1);
                function ballframe() {
                    //quand la ball atteint la tete
                    if (ballpos == 300) {
                        clearInterval(ballid);
                        ballframebis();
                    } else {
                        ball.style.opacity = 100;
                        ballpos++;
                        ballpos++;
                        ball.style.top = -ballpos + 'px';
                        ball.style.left = ballpos + 'px';
                    }
                }
            function godex(){
                window.location.replace('dex.html');
            }
            function tick(){
                console.log("tick");
                secondball.style.opacity = "0";
                thirdball.style.opacity= "100";
                document.getElementById("text").innerHTML = "";
                document.getElementById("subtext").innerHTML = "";
                showText("#text","Antoine PERY-KASZA est attrapé !", 0, 10);
                setTimeout(function(){
                    showText("#subtext","Vous avez maintenant accès à sa fiche Pokédex ! Cliquez ici", 0, 10);
                }, 650);
                document.getElementById('textbox').className+= " pointer";
                document.getElementById('textbox').addEventListener("click", godex);

            }
            }
            function ballframebis() {
                if (ballpos == 30) {
                    clearInterval(ballid);
                } else {
                    console.log("zbeub");
                    $("#ball").fadeOut(120);
                    $("#doku").fadeOut(100);
                    secondball.style.opacity = "100";
                    var animation = new TimelineLite({onComplete:tick});
                    animation.to(secondball, .2, {top:"-5px"})
                        .to(secondball, .2, {top:"5px"})
                        .to(secondball, .2, {top:"-5px"})
                        .to(secondball, .2, {top:"5px"})
                        .to(secondball, .2, {top:"-5px"})
                        .to(secondball, .2, {top:"5px"})
                        .to(secondball, .3, {rotation:20})
                        .to(secondball, .3, {rotation:-20})
                        .to(secondball, .3, {rotation:0})
                        .to(secondball, .3, {rotation:20})
                        .to(secondball, .3, {rotation:-20})
                        .to(secondball, .3, {rotation:0})
                        .to(secondball, .3, {rotation:20})
                        .to(secondball, .3, {rotation:-20})
                        .to(secondball, .3, {rotation:0});

                }

            }
        }
    }
;

