const sections = document.querySelectorAll('.faq section');
sections.forEach(section => {
    const arrow = section.querySelector('.arrow');
    const content = section.querySelector('.content');
    const questions = section.querySelector('h5');
    section.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.classList.toggle('rotate');
        questions.classList.toggle('weigth');
    });
});