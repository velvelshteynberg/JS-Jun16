function addScore(currentScore, eaten) {
    switch (eaten){
        case 'dot':
            scoreToAdd = 10;
            break;
            case 'powerPellet':
                scoreToAdd = 50;
                break;
                case 'firstGhost':
                    scoreToAdd = 200;
                    break;
                    case 'secondGhost':
                        scoreToAdd = 400;
                        break;
    }
    return currentScore + scoreToAdd
}

let score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
//score = addScore(score, 'firstGhost');
console.log('Your score: ' + score)