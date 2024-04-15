function dayfunction(){
    let x = document.getElementById("d").value;
    let y = x / 365;

    console.log(y)

    document.getElementById("d1").innerHTML = y;
}