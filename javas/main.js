const buttonEl = document.getElementById("start");

//funzione griglie

buttonEl.addEventListener("click", function () {
    const options = document.getElementById("nGrid");
    let numGrid = parseInt(options.value);
    let totalGrid = (numGrid * numGrid);
    console.log(totalGrid)

    const gridContainerEl = document.querySelector(".gridContainer");

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
