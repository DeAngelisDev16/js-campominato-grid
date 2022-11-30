

const mainContainer = document.getElementById('wrapper');





for (let i = 1; i <= 100; i++){
    console.log(i);
    const newDiv = document.createElement('div');
    mainContainer.append(newDiv);
    newDiv.classList.add('square');
    
    

}

    