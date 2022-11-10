const buttonEl = document.getElementById("start");
let bombs;

//funzione griglie

buttonEl.addEventListener("click", function () {
    const options = document.getElementById("nGrid");
    let numGrid = parseInt(options.value);
    let totalGrid = (numGrid * numGrid);
    console.log(totalGrid)
    const level = totalGrid;
    bombs = generateBombsList( +level );



    const gridContainerEl = document.querySelector(".gridContainer");
    gridContainerEl.innerHTML = "";

    //Funzione/a finalmente

    for (let i = 1; i <= totalGrid; i++) {
        
        const newCell = document.createElement("div");
        gridContainerEl.append(newCell);
        newCell.style.flexBasis = 100 / numGrid + "%";
        newCell.innerHTML = `${i}`;
        newCell.classList.add("cell");
        


        newCell.addEventListener("click", function () {
            this.classList.toggle("bg-primary");
            console.log("Numero cella: " + newCell.textContent);
        })

    }
})

function onCellClick () {
    // questo è il problema
    const numCella = parseInt (totalGrid.textContent);
  
    // controllo se il numero corrisponde ad una delle bombe
    if ( bombs.includes( numCella ) ) {
      // badaboom
      alert( "Game Over!" );
    }
  }

function generateRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }

function generateBombsList (level ) {
    const bombsList = [];
    console.log(bombsList)
  
   
    while ( bombsList.length < 16 ) {
      
      const num = generateRandomNumber( 1, level );
  
      
      if ( !bombsList.includes( num ) ) {
        
        bombsList.push( num );
      }
    }
  
    return bombsList;
  }