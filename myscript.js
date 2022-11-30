
const mainContainer = document.getElementById('wrapper');
const newDiv = document.createElement('div');
mainContainer.append(newDiv);



for (let i = 1; i <= 100; i++){
    console.log(i);
    newDiv.append(i);

}

    