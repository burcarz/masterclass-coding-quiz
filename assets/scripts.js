let questionCounter = 0;

let cardEl = document.getElementById("#card");
let getAns1 = document.querySelector("#answer-1");
let getAns2 = document.getElementById("#answer-2");
let getAns3 = document.getElementById("#answer-3");
let getAns4 = document.querySelector("#answer-4");
let ans = document.getElementsByClassName("ans");
let checkAns = document.getElementsByName("checkbox");
let chkAns1 = document.getElementById("#check-1")
let chkAns2 = document.getElementById("#check-2")
let chkAns3 = document.getElementById("#check-3")
let chkAns4 = document.getElementById("#check-4")
let timer = document.getElementById("#timer");


let writeQuestion = function() {
}

let questionSelector = function() {

    let genQ = document.querySelector("#question");

        for (i = 0; i < qArray.length; i++) {
            let question = qArray[Math.floor(Math.random() * qArray.length)];
                if (question.id) {
                    genQ.value = question.question;
                    let answerSelect = [question.ansOne, question.ansTwo, question.ansThree, question.ansFour];
                    for (i = 0; i < answerSelect.length; i++) {
                            ans.value = answerSelect;
                        }
                    }
         }
    }
    // let answerSelect = [question.ansOne, question.ansTwo, question.ansThree, question.ansFour];
    // console.log(answerSelect);


// let createQuestions = function(questionCnt) {
//     let questionEl = document.createElement("textarea");
//     questionEl.className = "question-number";
//     questionEl.setAttribute("question-id", questionCounter);

//     let ans = document.createElement("textarea");
//     ans.className = "answer-number";
//     questionEl.appendChild(ans);

//     questionCnt.id = questionCounter;

//     questionCounter++;
// }

questionSelector();

