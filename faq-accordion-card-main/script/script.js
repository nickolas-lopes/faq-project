const content = document.querySelectorAll('section');
const text = document.querySelectorAll('content')
for(let i = 0; i < content.length; i++){
    content[i].addEventListener('click', function(){
        console.log(content[i].children)
        if(content[i].children[1].classList.contains('content')){
            this.classList.remove('content')
            this.classList.add('active')
        }else{
            this.classList.add('content')
            this.classList.remove('active')
        }
    })
}
