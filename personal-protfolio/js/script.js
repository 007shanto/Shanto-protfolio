const texts =['Web-Designer', 'Freelancer','Frontend-Developer',];
var count=0;
var i=0;
var currentText=" ";
var letter =" ";

(function type(){

if(count === texts.length ){
    count =0;
}
currentText =texts[count];
letter =currentText.slice(0, ++i);

document.querySelector(".typing").textContent= letter;
if(letter.length === currentText.length){
    count++;
    i=0;
}
setTimeout(type ,400);


}());