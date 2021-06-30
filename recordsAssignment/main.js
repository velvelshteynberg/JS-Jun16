document.addEventListener('DOMContentLoaded', (e) => {
    console.log("greatness")
    let counter = 0;
    let form = document.querySelector('.infoForm');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('recordDiv');
        newDiv.id = "newDiv" + counter;
        counter ++;

        let img1 = document.createElement("img");
        img1.src = './images/vinyl.png';
        img1.classList.add('recordImage');
        let img1Div = document.createElement('div');
        img1Div.classList.add('img1Div');
        img1Div.appendChild(img1)
        newDiv.appendChild(img1Div);

        let img2 = document.createElement("img");
        img2.src = './images/close.png';
        img2.classList.add('img2');
        let img2Div = document.createElement('div');
        let input = document.createElement('input');
        input.type = 'hidden';
        input.value = newDiv.id;
        img2Div.classList.add('img2Div')
        img2Div.appendChild(input);
        img2Div.appendChild(img2)

        let img3 = document.createElement("img");
        img3.src = './images/love.png';
        img3.classList.add('img3');
        img2Div.appendChild(img3);
        newDiv.appendChild(img2Div);


        let miniDiv = document.createElement('div');
        miniDiv.classList.add('miniDiv')
        let plusSign = document.createElement('h3');
        plusSign.innerText = '+';
        plusSign.classList.add('plusSign');
        miniDiv.appendChild(plusSign);

        let artist = document.createElement('h3');
        let artistic = document.querySelector('.artist').value;
        artist.innerText = artistic;
        artist.classList.add('artist');
        miniDiv.appendChild(artist);

        let genre = document.createElement('h3');
        let theGenre = document.querySelector('#genre').value;
        genre.innerText = theGenre;
        genre.classList.add('genre');
        miniDiv.appendChild(genre);

        newDiv.appendChild(miniDiv);

       let parentDiv = document.querySelector('.rightSide');
       parentDiv.append(newDiv);


       img2.addEventListener('click', (e) =>{
                let parent = e.target.parentNode.firstChild.value;
                let parentDiv = document.querySelector(`#${parent}`);
                parentDiv.remove();
            });

    });
      

   

   

});