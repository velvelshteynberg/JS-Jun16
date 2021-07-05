document.addEventListener(("DOMContentLoaded"), () => {
    console.log('greatness');

    let ul = document.querySelector('.ul');
    console.log(ul);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((e) => e.json())
    .then((apidata)=>{
        console.log(apidata);
    })
    

});