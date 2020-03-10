init();

function init(){
    for(var r=0; r<12; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace(){
    TweenMax.to("#car1",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:500, y:-320,delay:2, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:-300,delay:3.5, ease:Sine.easeOut});
    TweenMax.to("#car1",1.8,{x:-50, y:-25, delay:5.5, ease:Sine.easeOut});
    TweenMax.to("#car1",1.8,{x:500, y:-25, delay:7, ease:Sine.easeOut});
}
