let n=0;
document.getElementById("p1").value=parseInt('0');
document.getElementById("p2").value=parseInt('0');
function calculate(){
    if(document.getElementById("roll").innerHTML === "Reload"){
        location.reload();
    }
    let random = parseInt(Math.floor(Math.random()*6))+1;
    if(n%2==0){
        document.getElementById("p1").value = parseInt(document.getElementById("p1").value) + random;
    }
    else{
        document.getElementById("p2").value= parseInt(document.getElementById("p2").value) + random;
    }
    n++;
    document.getElementById("dice").value = random;
    if(document.getElementById("p1").value >=30){
        document.getElementById("num").innerHTML = "Player 1 Wins!!!";
        document.getElementById("roll").innerHTML = "Reload";
    }
    else if(document.getElementById("p2").value >= 30){
        document.getElementById("num").innerHTML = "Player 2 Wins!!!";
        document.getElementById("roll").innerHTML = "Reload";
    }
}