
const button = document.getElementById("oblicz");


button.onclick = function ileprocent(){
    let og = document.getElementById("OG").value;
    let fg = document.getElementById("FG").value;
    let procenty = (og - fg) * 131.25;
    document.getElementById("wynik").innerHTML = procenty.toFixed(2) + "%";
    }

