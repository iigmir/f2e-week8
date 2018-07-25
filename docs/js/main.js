let resule_score = [0,0,0];
let selection = Array.from( document.querySelectorAll("input") );
let game = Array.from( document.querySelectorAll("body > *:not(script)") );
let result = document.querySelector("#result > h4");

function re_render()
{
    result.innerText = resule_score.toString();
}
function switch_score( event )
{
    let scoreboard = {
        "q1" : 0,
        "q2" : 1,
        "q3" : 2
    };
    resule_score[ scoreboard[ event.target.name ] ] = event.target.value;
    re_render();
}

window.onload = function()
{
    result.innerText = resule_score.toString();
    selection.forEach( x => x.addEventListener( "change" , e => switch_score(e) , false ) );
}
