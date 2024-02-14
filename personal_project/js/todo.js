const addInputBox = document.querySelector(".add-input-box");
const contentUl = document.querySelector(".content-ul");
function handleAddContent() {
    const inputValue = addInputBox.value;
    contentUl.innerHTML += `<li>${inputValue}<input type="checkbox"></li>`
    addInputBox.value = ``
}