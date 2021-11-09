// SI Calculation...
function calcSimpleInterest(){

    let p = document.getElementById("amount").value;
    let r = document.getElementById("interest-rate").value;
    let t = document.getElementById("years").value;

    let si = (p*r*t)/100;

    document.getElementById("si").innerHTML = `Simple Interest: ${ (p * r * t) / 100 }`;
    document.getElementById("ta").innerHTML = `Total Amount: ${ ((100 * si) / (r * t)) + si }`;

}

// Array operations..
function arrOperations(opr){

    const colors = ["RED", "GREEN", "BLUE", "ORANGE"];
    
    switch (opr) {

        case "PUSH":
            colors.push("KIWI");
            document.getElementById("color-result").innerHTML = colors;                   
        break;

        case "POP":
            colors.pop("GREEN");
            document.getElementById("color-result").innerHTML = colors;      
        break;

        case "SHIFT":
            colors.shift();
            document.getElementById("color-result").innerHTML = colors;
        break;

        case "UNSHIFT":
            colors.unshift("VIOLET","GREY");
            document.getElementById("color-result").innerHTML = colors;
        break;

   
        default:
            document.getElementById("color-result").innerHTML = colanimals;
            break;
    }
}

// Array animal, operations..
function animalOperations(opr){

    const animals = ["TIGER", "RABBIT", "COW", "GOAT"];
    
    switch (opr) {

        case "ADD1ANIM":
            animals.splice(3, 0, "PARROT");
            document.getElementById("animal-result").innerHTML = animals;
        break;

        case "ADD3ANIM":
            animals.splice(2, 0, "SNAKE", "DOG", "CROW");
            document.getElementById("animal-result").innerHTML = animals;
        break;

        case "REM2ANIM":
            animals.splice(2, 2);
            //animals.sort();
            document.getElementById("animal-result").innerHTML = animals;
        break;
    
        default:
            document.getElementById("animal-result").innerHTML = animals;
            break;
    }
}