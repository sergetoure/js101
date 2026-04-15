const startBtn=document.getElementById('startTest')
const endBtn=document.getElementById('endTest')
const output=document.getElementById('output')
const inputText=document.getElementById('inputText')
const userInput=document.getElementById('userInput')
let testText = ["The quick brown fox jumps over the lazy dog.","The dog is the cleanest shit i have ever seen","Luther King was a great philantrop and he has been missing"];
let startTime, endTime,timeElapsed,typedWordCount,wpm=0;
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 //randInt(1, 6); // simulates a dice roll: 1–6

function startTest(event){
    event.preventDefault()
    console.log('starting...',randInt(0,testText.length-1))
    inputText.value=testText[randInt(0,testText.length-1)]
    userInput.value=""
    userInput.readOnly=false
    userInput.focus()
    output.innerHTML=""
    startTime = new Date().getTime();

}

function endTest(event){
    event.preventDefault()
    console.log('ending...')
    endTime=new Date().getTime()
    userInput.readOnly=true
    timeElapsed = (endTime - startTime) / 1000; // in seconds
    typedWordCount=userInput.value.split(/\s+/).filter(word=>word!=="").length
    if(timeElapsed!==0 && !isNaN(typedWordCount)){
        wpm= Math.round((typedWordCount / timeElapsed) * 60);
    }

    output.innerHTML = `<h2>Typing Test Results:</h2>
                <p>Words Typed: ${typedWordCount}</p>
                <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
                <p>Words Per Minute (WPM): ${wpm}</p>`;


}


startBtn.addEventListener('click',startTest)

endBtn.addEventListener('click',endTest)