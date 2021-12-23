var stress=0;
var anxiety=0;
var depression=0;

const questiondb = [{
        question: "I found it hard to wind down ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 's',
        qc:1
    },

    {
        question: "I was aware of dryness of my mouth ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'a',
        qc:2
    },

    {
        question: "I couldn’t seem to experience any positive feeling at all  ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'd',
        qc:3
    },

    {
        question: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id :'a',
        qc:4
    },

    {
        question: "I found it difficult to work up the initiative to do things ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id :'d',
        qc:5
    },

    {
        question: "I tended to over-react to situations ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 's',
        qc:6
    },

    {
        question: "I experienced trembling (e.g. in the hands)",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'a',
        qc:7
    },

    {
        question: "I felt that I was using a lot of nervous energy",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 's',
        qc:8
    },
    {
        question: "I was worried about situations in which I might panic and make a fool of myself",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'a',
        qc:9
    },

    {
        question: "I felt like I had nothing to look forward to",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'd',
        qc:10
    },
    {
        question: "I found myself getting agitated",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id :'s',
        qc:11
    },
    {
        question: "I found it difficult to relax",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id :'s',
        qc:12
    },
    {
        question: "I felt down-hearted and blue ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'd',
        qc:13
    },
    {
        question: "I was intolerant of anything that kept me from getting on with what I was doing",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 's',
        qc:14
    },
   
    {
        question: "I felt I was close to panic",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id :'a',
        qc:15
    },
    {
        question: "I was unable to become enthusiastic about anything ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'd',
        qc:16
    },
    {
        question: "I felt I wasn’t worth much as a person ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'd',
        qc:17
    },
    {
        question: "I felt that I was rather touchy",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id :'s',
        qc:18
    },
    {
        question: "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat) ",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'a',
        qc:19
    },
    {
        question: "I felt scared without any good reason",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'a',
        qc:20
    },
    {
        question: "I felt that life was meaningless",
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        id : 'd',
        qc:21
    }



];

const question= document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll('.answer');

let questionCount=0;

const loadQuestion =( )=>{
    const questionList= questiondb[questionCount];
 question.innerText=questionList.question;
 option1.innerText=questionList.a;
 option2.innerText=questionList.b;
 option3.innerText=questionList.c;
 option4.innerText=questionList.d;
}

loadQuestion();

getCheckAnswer=()=>{
    let answer;
answers.forEach((curAnsEle)=>{
    if(curAnsEle.checked){
        answer=curAnsEle.id;
    }

    
})
return answer;

};

submit.addEventListener('click', ()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(questiondb[questionCount].qc,checkedAnswer);

    if(questiondb[questionCount].id=='s'){
        if(checkedAnswer=='a2'){
            stress++;
        }
        else if(checkedAnswer=='a3'){
            stress=stress+2;
        }
        else if(checkedAnswer=='a4'){
            stress=stress+3;
        }
    }

    if(questiondb[questionCount].id=='d'){
        if(checkedAnswer=='a2'){
            depression++;
        }
        else if(checkedAnswer=='a3'){
            depression=depression+2;
        }
        else if(checkedAnswer=='a4'){
            depression=depression+3;
        }
    }

    if(questiondb[questionCount].id=='a'){
        if(checkedAnswer=='a2'){
            anxiety++;
        }
        else if(checkedAnswer=='a3'){
            anxiety=anxiety+2;
        }
        else if(checkedAnswer=='a4'){
            anxiety=anxiety+3;
        }
    }

    questionCount++;

    if(questionCount<questiondb.length){
        loadQuestion();
    }else{
        console.log("s",stress);
        console.log("a",anxiety);
        console.log("d",depression);
        
    }
});