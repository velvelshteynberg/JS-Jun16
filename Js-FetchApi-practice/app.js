document.addEventListener(("DOMContentLoaded"), () => {
    console.log('greatness');

    let ul = document.querySelector('.ul');

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((e) => e.json())
    .then((apidata) => {
            apidata.forEach((element) => {
                const button = document.createElement('button');
                const div = document.createElement('div');
                const li = document.createElement('li');
                const leftSide = document.querySelector('.leftSide');
                button.innerText = element.name;
                button.classList.add('button');
                div.appendChild(button);
                li.appendChild(div);
                ul.appendChild(li);


                button.addEventListener('click', (event) => {
                        const rightSide = document.querySelector('.rightSide');
                        rightSide.append(element);
                });


            });
        })
    .catch((e) => console.log('err', e));


    
        


    });
