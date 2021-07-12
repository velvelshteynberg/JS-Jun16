document.addEventListener('DOMContentLoaded', () => {
    console.log('greatness');

    
    const allParties = [];
    fetch('https://represent.opennorth.ca/representatives/house-of-commons/?offset=0&limit=336')
    .then((e) => e.json())
    .then((apidata) => {
        apidata.objects.forEach((element) => {
            allParties.push(element.party_name);     
        }) 
        let data = new Set(allParties);
        data.forEach((element) => {
            let parentDiv = document.querySelector('.bottomDiv');

            let childDiv = document.createElement('div');
            let title = document.createElement('h2');
            title.innerText = element; 
            childDiv.appendChild(title);

            apidata.objects.forEach((object) => {
                if (object.party_name === element){
                    let mpp = document.createElement('h4');
                    mpp.innerText = object.name;
                    childDiv.appendChild(mpp);

                    mpp.addEventListener('click', () => {
                        let top = document.querySelector('.topDiv');
                        top.innerHTML = '';
                        let rightDiv = document.createElement('div');
                        rightDiv.classList.add('rightDiv');
                        let leftDiv = document.createElement('div');
                        leftDiv.classList.add('leftDiv');

                        let image = document.createElement('img');
                        image.src = object.photo_url;
                        image.classList.add('image');

                        let button = document.createElement('button');
                        button.innerText = 'Advice';

                        rightDiv.appendChild(image);
                        rightDiv.appendChild(button);
                        top.appendChild(rightDiv);

                        button.addEventListener('click', () => {
                            fetch('https://api.adviceslip.com/advice')
                            .then((e) => e.json())
                            .then((data) => {
                                let advice = document.createElement('input');
                                advice.value = data.slip.advice;
                                advice.classList.add('advice');
                                leftDiv.appendChild(advice);
                                button.disabled = true;
                            })
                            .catch((err) => console.log(err))
                        })
                       

                        top.appendChild(leftDiv);
                    })
                parentDiv.appendChild(childDiv);
                }
        })

        
    })
    .catch((err) => console.log(err))
})
})