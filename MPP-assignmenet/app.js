document.addEventListener('DOMContentLoaded', () => {
    console.log('greatness');

    
    const allParties = [];
    let api = [];
    let data = [];
    fetch('https://represent.opennorth.ca/representatives/house-of-commons/?offset=0&limit=336')
    .then((e) => e.json())
    .then((apidata) => {
        apidata.objects.forEach((element) => {
            allParties.push(element.party_name);     
        }) 
        data = new Set(allParties);
        api = apidata;
        something(data, api);
        })   
        .catch((err) => console.log(err));

});

function something(data, apidata){
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
                        let advice = document.createElement('input');
                        advice.classList.add('advice');
                        if (object.advice === undefined){
                        fetch('https://api.adviceslip.com/advice')
                        .then((e) => e.json())
                        .then((data) => {
                            advice.value = data.slip.advice;
                            object.advice = advice.value;
                        })
                        .catch((err) => console.log(err))
                    } else {
                        advice.value = object.advice;
                    }
                    leftDiv.appendChild(advice);
                    button.disabled = true;
                    });
                    top.appendChild(leftDiv);
                });
            parentDiv.appendChild(childDiv);
            }
    });
});
}
