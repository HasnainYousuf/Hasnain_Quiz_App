let  min = 5;
let  mm=0
let  sec = 0;
let  second = document.getElementById('sec')
let  minute = document.getElementById('min')
let timer;

function count(){
     mm++
     if(mm==100){
         
         sec--
         mm=0
         second.innerHTML=sec
         
 
     }
 
     else if(min > 0 && sec==0){
         min--
         sec = 59
         second.innerHTML=sec
         minute.innerHTML=min
     }
     else if(min==0 && sec==0){
         result()
          clearInterval(countdown)
          sec=00
          min=00
        sec.innerHTML=sec
        minute.innerHTML=min
     }
}

timer = setInterval(count,10)

function start()
{
    window.location.href = "home.html";
}

var question = [
    {
        q: "Ctrl, Shift and Alt are called .......... keys.",
        ans: 1,
        option1: " modifier",
        option2: "function",
        option3: "alphanumeric",
        option4: "adjustment"
    } , 
    {
        q: "MS-Word is an example of _____",
        ans: 3,
        option1: "An operating system",
        option2: "A processing device",
        option3: "Application software",
        option4: "An input device"
    } ,
    {
        q: "A computer cannot boot if it does not have the _____ ",
        ans: 3,
        option1: " Compiler",
        option2: " Loader",
        option3: "Operating system",
        option4: "Assembler"
    }
]

var count = 0;
var score = 0;
var correctAns = 0;

function firstQuestion()
{
var q = document.getElementById("q").innerHTML = question[0].q;
var opt1 = document.getElementById("opt1").innerHTML = question[0].option1;
var opt2 = document.getElementById("opt2").innerHTML = question[0].option2; 
var opt3 = document.getElementById("opt3").innerHTML = question[0].option3;
var opt4 = document.getElementById("opt4").innerHTML = question[0].option4;

// // q.innerHTML = question[0].q;
}
function nextQuestion()
{
    if (count < question.length - 1) {
    
    count++;
    var q = document.getElementById("q").innerHTML = question[count].q;
    var opt1 = document.getElementById("opt1").innerHTML = question[count].option1;
    var opt2 = document.getElementById("opt2").innerHTML = question[count].option2; 
    var opt3 = document.getElementById("opt3").innerHTML = question[count].option3;
    var opt4 = document.getElementById("opt4").innerHTML = question[count].option4;
    check();
    }
    else {
        //disBtn()
        check()
        result()
    }
}

var select = document.getElementsByClassName("select");
//console.log(select);
function check() {
console.log("a")
    for (let i = 0; i < select.length; i++) {
         if (select[i].checked) {
              if (select[i].value == question[count].ans) {
                   score += 10;
                  // correctAns++

                   console.log(score, question[count].ans);
                   select[i].checked = false
                   break

              } else if (select[i].value !== question[count].ans) {
                select[i].checked = false


              }
         }
    }
}

var count = 0;

var score = 0;


let op = document.getElementsByName('option');

var questionCount=1

var qn = document.getElementById('q').innerHTML=questionCount




// ........................FUNCTIONS...................//


// function check() {

//      for (let i = 0; i < op.length; i++) {
//           if (op[i].checked) {
//                if (op[i].value == questions[count].Answer) {
//                     score += 10;
//                     correctAns++

//                     console.log(score, questions[count].Answer);
//                     op[i].checked = false
//                     break

//                } else if (op[i].value !== questions[count].Answer) {
//                     op[i].checked = false


//                }
//           }
//      }
// }


function enableBtn() {
     var btn = document.getElementById('btn')
     btn.disabled = false
}
function disBtn() {
     var btn = document.getElementById('btn')
     btn.disabled = true
}






function nextQues() {
     if (count < questions.length - 1) {
          count++
          show(count)
          check()
          disBtn()
          questionCount++
          qn = document.getElementById('q').innerHTML=questionCount
     } else {
          disBtn()
          check()
          result()


     }
}

function show(c) {
     var quiz = document.getElementById('question').innerHTML = questions[c].question;
     var op1 = document.getElementById('op1').innerHTML = questions[c].option1;
     var op2 = document.getElementById('op2').innerHTML = questions[c].option2;
     var op3 = document.getElementById('op3').innerHTML = questions[c].option3;
     var op4 = document.getElementById('op4').innerHTML = questions[c].option4;
}


function result() {
window.location.href = "result.html";

// var res = document.getElementById("res")
// console.log(res);
    //  var card = document.getElementById('r')
    //  if (score > 60){
    //     //  card.className=('pass')
    //       card.innerHTML= '<div class="card1"> <h1> Congratulations You have passed the test and Your percentage is : ${Math.round(score/110*100)}% <br/> Total Number of Correct Answers is ${correctAns} out of 11</h1> </div>'
    //  }
    //  else if (score < 60){
    //   //    card.className=('fail')
    //       card.innerHTML= '<div class="card2"> <h1> Sorry you have failed the test your correct answers are less than 6! :(<br/> Total Number of Correct Answers is ${correctAns} out of 11</h1> </div>'
    //  }
     
    
}

function finalReslut()
{
    if (score > 60)
    document.write("You have passed");

    else
    {
        document.write("You have Failed")
    }
}