
//recupero il container generale dal dom
const mainContainer = document.getElementById('wrapper');

//creo un div da inserire nel container generale
const newDiv = document.createElement('div');
mainContainer.append(newDiv);

//attribuisco al div contenuto della classe che voglio
newDiv.classList.add('square');



for (let i = 1; i <= 100; i++){
    console.log(i);
    

}

    