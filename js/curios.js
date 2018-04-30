const textarea = document.querySelector('textarea');
const button = document.querySelector('#postar');

button.addEventListener('click', function(e){
    e.preventDefault();
    let textarea1 =textarea.value;
    p=document.createElement('p');
    p.textContent= textarea1;
    document.getElementById('div').innerHTML= textarea1;
});

let like = document.querySelector('#like');
let span = document.querySelector('span');
let likes = 0;
like.addEventListener('click', function() {
    // ++algo; // é um pré-incremento
    span.textContent = `${++likes} like(s)`;
});
