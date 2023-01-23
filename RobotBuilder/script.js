var pL = 0; //power level
var tP = 0; //top speed
var sI = 0; //structural integrity
var scanner = false;
var dS = false; //defensive system
var powerType = "No Power Installed"; //1 = hydro, 2 = nuclear, 3 = solar

function initialize(){
    scan.innerHTML = "OFF";
    defensive.innerHTML = "OFF";
    display();
}
function addOne(id){
    if(id == 1){
        pL++;
    }
    if(id == 2){
        tP++;
    }
    if(id == 3){
        sI++;
    }
    display();
}

function subtractOne(id){
    if(id == 1 && pL >0){
        pL--;
    }
    if(id == 2 && tP > 0){
        tP--;
    }
    if(id == 3 && sI > 0){
        sI--;
    }
    display();
}

function toggle(id){
    if(id == 1){
        scanner = !scanner; 
        if(scanner){
            scan.innerHTML = "ON";
        }
        else{
            scan.innerHTML = "OFF";
        }
    }
    if(id == 2){
        dS = !dS
        if(dS){
            defensive.innerHTML = "ON";
        }
        else{
            defensive.innerHTML = "OFF";
        }
    }
    display();
}

function selectPower(id){
    if(id == 1){
        powerType = "Hydro";
    }
    if(id == 2){
        powerType = "Nuclear";
    }
    if(id == 3){
        powerType = "Solar";
    }
    display();
}

function changeImage(_src){
    var currentImage = document.getElementById("curImg");
    currentImage.src = _src;
    // if(id == 1){
    //     currentImage.src = "images/robot1.png";
    //     console.log(2);
    // }
    // if(id == 2){
    //     currentImage.src = "images/robot2.png";
    // }
    // if(id == 3){
    //     currentImage.src = "images/robot3.png";
    // }
    // if(id == 4){
    //     currentImage.src = "images/robot4.png";
    // }
    // if(id == 5){
    //     currentImage.src = "images/robot5.png";
    // }
}

function final(){
    document.getElementById('a').style.display = 'none';
    document.getElementById('ab').style.display = 'none';
    document.getElementById('b').style.display = 'none';
    document.getElementById('bc').style.display = 'none';
    document.getElementById('c').style.display = 'none';
    document.getElementById('d').style.display = 'none';
    document.getElementById('e').style.display = 'none';
    document.getElementById('f').style.display = 'none';
    document.getElementById('g').style.display = 'none';
    document.getElementById('h').style.display = 'none';
    document.getElementById('i').style.display = 'none';
}
function display(){
    powerLevel.innerHTML = pL;
    topSpeed.innerHTML = tP;
    structInt.innerHTML = sI;

    pT.innerHTML = powerType;
}