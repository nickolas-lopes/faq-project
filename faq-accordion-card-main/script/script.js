const questions = document.querySelectorAll('section');
const texts = document.querySelectorAll('p')
for(let i = 0; i < questions.length; i++){
<<<<<<< HEAD
    questions[i].addEventListener('click', function(){
       for(let j = 0; j < texts.length-(texts.length-2); j++){
        
       }
=======
    questions[i].addEventListener('click', function (){
        texts.forEach(text => {
           text.classList.toggle('content')
        }
>>>>>>> a85ade1c0a698188c03e0d43326497a836394f2f
    })
}

