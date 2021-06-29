document.addEventListener('DOMContentLoaded', (e) => {
    console.log("greatness")

    let button = document.querySelector('.submitButton');
    button.addEventListener("click", (e) => {
        e.preventDefault();
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('recordDiv');

        let img1 = document.createElement("img");
        img1.src = 'https://www.google.com/search?q=picture+of+vinyl+record&rlz=1C1CHBF_enUS873US873&sxsrf=ALeKk01XGsEgETlPMRXQOSURgqkdcPoMGA:1624978164807&tbm=isch&source=iu&ictx=1&fir=OVMv_kIWA7ZWDM%252Cd_7BYFWreTebAM%252C_&vet=1&usg=AI4_-kSLvrAjwCKOYVz06hn5gbZ5q_b7wg&sa=X&ved=2ahUKEwjBoJ-yi73xAhXDGs0KHZYBA1EQ9QF6BAgPEAE#imgrc=OVMv_kIWA7ZWDM';
        img1.classList.add('recordImage');
        let img1Div = document.createElement('div');
        img1Div.classList.add('img1Div');
        img1Div.appendChild(img1)
        newDiv.appendChild(img1Div);

        let img2 = document.createElement("img");
        img2.src = 'https://files.slack.com/files-pri/T01EGJP1MPA-F026960EESJ/love.png';
        img2.classList.add('img2');
        let img2Div = document.createElement('div');
        img2Div.classList.add('img2Div')
        img2Div.appendChild(img2)

        let img3 = document.createElement("img");
        img3.src = 'https://files.slack.com/files-pri/T01EGJP1MPA-F026CTAT9AR/close.png';
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
        artist.innerText = 'Ed Sheeran';
        artist.classList.add('artist');
        miniDiv.appendChild(artist);

        let genre = document.createElement('h3');
        genre.innerText = 'pop';
        genre.classList.add('genre');
        miniDiv.appendChild(genre);

        newDiv.appendChild(miniDiv);

       let parentDiv = document.querySelector('.rightSide');
       parentDiv.append(newDiv);
    });
   

});