// named function
function eatDot(){
    console.log('munch!');
}

//anonymous function
//assighned to a variable
var eatDot = function(){
    console.log('munch!');
}

//Arrow function (also anonymousn)
var eatDot = () => {
    console.log('munch!');
}

const highScores = [];
function addHighSCore(highScoreList, playerInitials, score) {
    const record = {player: playerInitials, score: score};
    highScoreList.push(record);
}

addHighSCore(highScores, 'SDL', 2000);
addHighSCore(highScores, 'JSL', 10000);

console.log(highScores)