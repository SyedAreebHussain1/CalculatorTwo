// Class 15 
// loop


// for(var a = 0;a <= 10;a++){
//     console.log(a) ////0 to 10
// }


// for(var a = 0;a < 10;a++){
//     console.log(a) ////0 to 9
// }


//Topic 41 while loop

// var a = 0;
// while(a <= 10){
//     console.log(a) ////0 to 10
//     a++
// }



// var a = 0;
// while(a < 10){
//     console.log(a) ////0 to 9
//     a++
// }








// Topic 42 do/while loop

// var a = 0;
// do {
//     console.log(a)
//     a++
// } while (a <= 10)  ////0 to 10




// var a = 0;
// do{
//     console.log(a) ////0 to 9
//     a++
// }while(a < 10)



// do while loop ek bar zaor chalata ha value chahy value false he Q na ho

// var c = 0;
// do{
//     console.log(c)////0
//     a++
// }while(c > 10)




// Topic 43 Placing script

// scripts.js
// app.js
// coreJs.js
// main-code.js
// main_code.js
// main.code.js



// Topic 44 commentting 
// ctrl? 




// Topic 45 Event:link

// document.getElementById("")



// function foo(){
//     alert("Hello world")
// }



// function foo(){
//     var a = 2+2
//     alert(a)
// }




// function foo(greet){
//     alert(greet)
// }





// Topic 46 Event button

// function clickBtn(){
//     alert("Click")
// }






// Topic 47 Event:Mouse


// function foo(){
//     alert("Click")
// }




// Topic 48 Event:Fields 




// Topic 49 Redaing Field values

// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
// }



// function getName(){
//     var name = document.getElementById("name");
//     alert(name.value)
// }




// function getName(){
//     var name = document.getElementById("xyz");
//     alert(name.value)
// }



// function getName(){
//     var name = document.getElementById("xyz");
//     console.log(name)
// }



// function getName(){
//     var name = document.getElementById("xyz");
//     console.log(name.value)
// }




// function getName(){
//     var name = document.getElementById("xyz");
//     console.log(name.value)
//     name.value = ""
// }




// Topic 50 setting field values

// function setName(){
//     var names = document.getElementById("set")
//     names.value = "Ghous"
// }
// setName();



// function setPara(){
//     var para = document.getElementById("xyz")
//     para.innerHTML = "Hello This is Example"
// }
// setPara();



// function setParaName(){
//     var a = document.getElementById("nameId");
//     a.value = "Ghous";

//     var b = document.getElementById("paraId")
//     b.innerHTML = "Hello this is Example"; 
// }
// setParaName();




// Calculator

function getNumber(num){
    var result = document.getElementById("result")
    result.value += num
}


function clearBtn(){
    var result = document.getElementById("result")
    result.value = ""
}

function equalTo(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}





// Ascii code in javaScript 

// var a = "A";
// var b = a.charCodeAt()
// console.log(b)



// var a = "a";
// var b = a.charCodeAt()
// console.log(b)


// var a = "B";
// var b = a.charCodeAt()
// console.log(b)



// var a = "b";
// var b = a.charCodeAt()
// console.log(b)


// var a = "H";
// var b = a.charCodeAt()
// console.log(b)


// var a = "z";
// var b = a.charCodeAt()
// console.log(b)


// var a = "?";
// var b = a.charCodeAt()
// console.log(b)



// var a = ".";
// var b = a.charCodeAt()
// console.log(b)




var a = "2";
var b = a.charCodeAt()
console.log(b)











