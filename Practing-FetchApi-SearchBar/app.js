document.addEventListener('DOMContentLoaded',(e)=>{ 
    console.log('greatness');

    let form = document.querySelector('.form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let input = document.querySelector('.input').value;
        fetch("http://www.omdbapi.com/?apikey=7bfe611f&s=" + input)
        .then((e) => e.json())
        .then((apidata) => {
            let data = apidata.Search;
            let cardsDiv = document.querySelector('.cards');
                cardsDiv.innerHTML = '';
            data.forEach((movie) => {
                let cardsDiv = document.querySelector('.cards');
                let card = document.createElement('div');
                card.classList.add('card');

                let image = document.createElement('img');
                image.src = "data:image/png;base64,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";
                image.classList.add('icon');
                card.appendChild(image);

                let div = document.createElement('div');

                let title = document.createElement('h3');
                title.innerText = movie.Title;
                div.appendChild(title);

                let year = document.createElement('h3');
                year.innerText = movie.Year;
                div.appendChild(year);

                card.appendChild(div);

                let arrow = document.createElement('img');
                arrow.src = "https://lh3.googleusercontent.com/proxy/kixvistHILmjy11q6WcYPwMASY9cUVjEIeKaaWZRV3tHdpHsRa2dnp-NJd2KbwnO5W91l8wQCF7pRxnRi3PdsdozHSbdz-s";
                arrow.classList.add('icon');
                card.appendChild(arrow);

                
                cardsDiv.appendChild(card);

                arrow.addEventListener('click', (e) =>{
                    
                })
            })
        })
        .catch ((err) => (console.log(err)));
    });

});