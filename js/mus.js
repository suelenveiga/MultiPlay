const input = document.querySelector('input');
const input1 = document.querySelector('#inp1');
const input2 = document.querySelector('#inp2');
const input3 = document.querySelector('#inp3');
button1 = document.querySelector('#bo');
button2 = document.querySelector('#bo2');
button3 = document.querySelector('#bo3');

button1.addEventListener('click', function (e){
    e.preventDefault();
    var input11 =input1.value;
    p=document.createElement('p');
    p.textContent= input11;
    document.getElementById('postagens').innerHTML= input11;

  });

button2.addEventListener('click', function (e){
    e.preventDefault();
    var input12 =input2.value;
    p=document.createElement('p');
    p.textContent= input12;
    document.getElementById('postagens2').innerHTML= input12;
  });

    
button3.addEventListener('click', function (e){
    e.preventDefault();
    var input13 =input3.value;
    p=document.createElement('p');
    p.textContent= input13;
    document.getElementById('postagens3').innerHTML= input13;
  });


  document.addEventListener('DOMContentLoaded', function() {
    const bt = document.querySelector('#button');
    const audio = document.querySelector('audio');
    bt.addEventListener('click', function() {
        audio.play();
    });
  
    const input = document.querySelector('#nput');
    const player = document.querySelector('#player');
    input.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            player.src = reader.result;
            player.play();
        });
        reader.readAsDataURL(input.files[0]);
    });
  });

