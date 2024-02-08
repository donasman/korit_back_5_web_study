let dataList = [];

window.onload = () => {
    getDataList();

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.value;

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            // [ {id: 1,content: inputValue}, {id: 2,content: inputValue}, {id: 3,content: inputValue} ]

            const dataObj = {
                id: lastId + 1,
                content: inputValue
            }

            dataList = [ ...dataList, dataObj ];
            
            addInput.value = "";

            getDataList();
        }
    }
}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += `
            <li>
                <span>${dataObj.id}번 </span> 
                <span>${dataObj.content}</span>
                <input type="text" class="edit-inputs" value="${dataObj.content}">
                <button>수정</button>
                <button>삭제</button>
            </li>
        `;
    }
}