const questions = document.querySelectorAll('section');
const texts = document.querySelectorAll('p')
for(let i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', function (){
        texts.forEach(text => {
           text.classList.toggle('content')
        }
    })
}

