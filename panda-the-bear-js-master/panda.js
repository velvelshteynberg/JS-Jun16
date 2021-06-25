console.log('hello')

document.addEventListener('DOMContentLoaded', function(e){
    console.log('This is an assignment');

    profileImage = document.querySelector('.profile-image');
        console.log('The old picture source was ' + profileImage.src);
        console.log('');
    profileImage.src = "https://placebear.com/400/400"
        console.log("The new profile picture is " + profileImage.src);
        console.log('');

    randomPicture = document.querySelector('.photography');
    randomPicture.src = 'https://placebear.com/325/225';
    console.log('The new random photo is ' + 'https://placebear.com/325/225');

    title = document.querySelector('h1');
    title.innerText = "Velvel Shteynberg";
    console.log('The title now has the name ' + title);

    titles = document.querySelectorAll('div > h3');
    console.log(titles);
    titles[1].innerHTML = "Absolutely Crazy";
    console.log('IT now states ' + titles);

    body = document.querySelector('body');
    body.style.backgroundColor = "red";

    highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element){
        return element.style.backgroundColor = 'Blue';
    });
    console.log(highlightedElements);

    let font = document.querySelector('h1');
    font.style.fontFamily = 'monospace';
    font.style.backgroundColor = 'yellow';
    console.log(font);

    var icons = document.querySelectorAll('.action-icon-bg');
    console.log(icons);
    icons.forEach(function(icon){
        icon.style.backgroundColor = 'pink';
    });

   let inputs = document.querySelectorAll('input');
   inputs[0].placeholder = 'identify yourself';
   document.getElementById("message").placeholder = 'state your business';
   inputs[0].setAttribute('value', 'your nemesis');
   inputs[1].setAttribute('value', 'koalathebear@gmail.com');
   inputs[2].value = "En garde!";
   inputs[2].setAttribute('disabled', '');
   console.log(inputs);
    
   let values = document.querySelectorAll('.bio-info-value');
   console.log(values);
    values.forEach(function(value){
        return value.remove();
    });
    
    

    
    
    
    
    
});




