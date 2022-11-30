

const mainContainer = document.getElementById('wrapper');
const playButton = document.getElementById('play');
mainContainer.classList.add('d-none');


playButton.addEventListener("click", function(){
    mainContainer.classList.remove('d-none');
})



for (let i = 1; i <= 100; i++){
    console.log(i);
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.addEventListener("click", function(){
        newDiv.classList.toggle('click');
    })  
    
    mainContainer.append(newDiv);
    newDiv.append(i);
}




    