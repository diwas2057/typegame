window.addEventListener('load',init);
//Globals

//Levels
const levels={
    easy:5,
    medium:3,
    hard:2
}
//To change levels
const currentLevel=levels.medium;
let time=currentLevel;
let score=0;
let isPlaying;

const scoreDisplay=document.querySelector('#score');
//DOM elements
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words=[
    'hilly',
    'mountain',
    'rainy',
    'heaven',
    'horrifying',
    'terrible',
    'amazing',
    'superstition',
    'walking',
    'difference',
    'pointing',
    'surreal',
    'passenger',
    'javascript',
    'foolish',
    'running',
    'hungry',
    'excercise',
    'eggplant',
    'temple',
    'developer',
    'definition',
    'fragile',
    'occupation',
    'superman',
    'spiderman',
    'november',
    'activation',
    'woderful',
    'awesome',
    'different',
    'beautiful'
];

//Initalize game
function init(){
    seconds.innerHTML=currentLevel;
    //Load word from array 
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input',startMatch);
    //call countdown every second
    setInterval(countdown,1000);
    //check game status
    setInterval(checkStatus,50);
}
//start match
function startMatch(){
    if(matchWords()){
       isPlaying=true;
       time=currentLevel+1;
       showWord(words);
       wordInput.value='';
       score++;
    }
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }else{
    scoreDisplay.innerHTML=score;
    }
}
//match current word to word input
function matchWords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML='Correct!!!';
        return true;
    }
    else{
        message.innerHTML='';
        return false;
    }
}
//Pick% & show random word
function showWord(words){
    //Generate random array Index
    const randIndex=Math.floor(Math.random()*words.length);
    //Output random word
    currentWord.innerHTML=words[randIndex];
}
//Countdown Timer
function countdown(){
    //Make sure time is not run  out
    if(time>0){
        //Decrement
        time--;
    }
    else if(time===0){
         isPlaying= false;
    }
    timeDisplay.innerHTML=time;
}
//check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML="Game over !!!"
        score=-1;
    }
}