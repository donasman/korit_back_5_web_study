const addBoxButton = document.querySelector(".add-box-button");
const boxContainer2 = document.querySelector("#box2");




addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    boxContainer.innerHTML += `<div class="box"></div>`;

    const boxList = document.querySelectorAll(".box");
    
    for (const box of boxList) {
        box.onclick = () => {
            let isBlueBox = box.classList.contains("blue-box");
            let isRedBox = box.classList.contains("red-box");
            if (isBlueBox) {
                box.classList.remove("blue-box");
                box.classList.add("red-box");
            } else if (isRedBox) {
                boxContainer.removeChild(box);
                boxContainer2.appendChild(box);

            } else {
                box.classList.add("blue-box");
            }
        };
    }
        
}