window.addEventListener("scroll", function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});




//toggle question and answer

let question = document.getElementsByClassName('question');
var i;
for (let i = 0; i < question.length; i++) {
    const element = question[i];
    element.addEventListener("click", function(){
        console.log(element);
        var answer = this.nextElementSibling;
        answer.classList.toggle("active");
        console.log(answer)
        if (answer.style.display === "block") {
            answer.style.display === "none"
        } else {
            answer.style.display === "block"
        }
    });
    
}