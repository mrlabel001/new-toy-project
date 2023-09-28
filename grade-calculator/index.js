function grade(marks){              //function called grade allowing input of marks//
    
    if (marks >79){                 //else if to assign the various grades//
    console.log ("A");
}
else if (marks >=60 && marks <79){
    console.log("B")
}
else if (marks >=49 && marks <60){
    console.log("C")
}
else if (marks >=40 && marks <49){
    console.log("D")
}
else if (marks < 40){
    console.log("E")                   //input only allows marks from 0-100,therefore anything else is marked as invalid//
}              
else console.log("invalid grade")

}
grade(75)                             //call the grade function and input marks to receive grade//