const powerPelletEaten = false;
const ghosts = 4;

while (ghosts < 4) {
    console.log('Ghosts remaing: ' + ghosts);

    if (powerPelletEaten == false) {
        console.log('Pac-Man eats the power Pellet.');
        powerPelletEaten == true;
    } else if (ghosts > 0) {
        console.log( 'Pac-Man eats a ghost.');
        ghosts --;
    } else {
        break;
    }
};

console.log('Pac-man returns home after a long day in the maze.');