const addInputBox = document.querySelector(".add-input-box");
const contentUl = document.querySelector(".content-ul");
function handleAddContent() {
    const inputValue = addInputBox.value;
    contentUl.innerHTML += `<li value="${inputValue}">${inputValue}<input type="checkbox"></li>`
    addInputBox.value = ``;
}
function handleRemoveContent() {
    let selected = confirm("정말로 삭제하시겠습니까?");
    if(!selected) {
        return;
   }
   const checkboxes = document.querySelectorAll(".content-ul input[type='checkbox']:checked");
   for (let i = 0; i < checkboxes.length; i++) {
       const checkbox = checkboxes[i];
       const listItem = checkbox.closest("li");
       listItem.remove();
   }
}
