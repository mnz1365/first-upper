
var text1 = "if i write anything in text1 that show up as uppercase that's cool!";
var firstUpper = "";
var word = "";
text1 = text1.split(" ");
for(var i = 0;i<text1.length; i++) {
    
        word = text1[i];
        word = word.split("");
        for(var j =0;j<word.length;j++){
            if(j == 0){
                firstUpper += word[j].toLocaleUpperCase();
            }
            else {
                firstUpper += word[j];
            }
        }
        if(i < text1.length) {
            firstUpper += " ";
        }
    

}



console.log(firstUpper);