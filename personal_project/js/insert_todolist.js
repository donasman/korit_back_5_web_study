async function handleSaveClick() {
    const dateInput = document.querySelector(".date-input").value;
    const checkboxes = document.querySelectorAll(".content-ul input[type='checkbox']:checked");
    
    const selectedItems = [];
    for (let checkbox of checkboxes) {
        const value = checkbox.parentNode.getAttribute('value');
        selectedItems.push(value);
    }

    try {
        const response = await fetch("http://localhost:8080/Todo_project/todo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TodoListDate: dateInput,
                TodoListContent: selectedItems
            })
        });
        
        if (!response.ok) {
            console.log('데이터를 저장하는 중에 오류가 발생했습니다.');
        }
    } catch (error) {
        // 네트워크 오류 등 예기치 않은 오류 처리
        console.error('오류 발생: ', error);
    }
}
    
