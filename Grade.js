console.log("Enter Score Grade");
let stdin3 = process.openStdin();
stdin3.addListener("data",function(str3){
    let score = parseInt(str3);
    if(score < 50){
        console.log("Grade : E");
    }
    if(score >= 50 && score < 55){
        console.log("Grade : D");
    }
    if(score >= 55 && score < 60){
        console.log("Grade : D+");
    }
    if(score >= 60 && score < 65){
        console.log("Grade : C");
    }
    if(score >= 65 && score < 70){
        console.log("Grade : C+");
    }
    if(score >= 70 && score < 75){
        console.log("Grade : B");
    }
    if(score >= 75 && score < 80){
        console.log("Grade : B+");
    }
    if(score >= 80){
        console.log("Grade : A");
    }
    if(score == ""){
        console.log("Input Score");
    }
    stdin3.destroy();
});