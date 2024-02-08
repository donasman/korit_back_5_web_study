//spread 연산

// let array = [1,2,3,4];

// array = [...array, 5, 6, ...array];
// console.log(array);

// 비구조할당

// let obj = {
//     id: 1,
//     name: "정건희",
//     age:25
// }

// let {id, name, age} = obj;

let contentList = [];

window.onload = () => {
    getContentList(); 

    const insertContent = document.querySelector(".insert-content");
   
    insertContent.onkeydown = (e) => {
        if(e.keyCode === 13) {
            const mainContent = insertContent.value;
           
            const lastContentId = contentList.length === 0 ? 0 : contentList[contentList.length - 1].id;

            let dataObject = {
                id: lastContentId + 1, // 항목 추가 시 id 업데이트
                content: mainContent
            };

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(dataObject)
            });

            // contentList.push(dataObject); 배열에 추가
            contentList = [...contentList, dataObject];

            insertContent.value = ""; // 첫 인풋박스 빈칸만들기
            
            getContentList(); // getContentList 호출
        }
    }

}

function getContentList() {
    const mainContentList = document.querySelector(".main-content-list");

    mainContentList.innerHTML = ""; // 기존 리스트 초기화

    for(let dataObject of contentList) {
        mainContentList.innerHTML += ContentData(dataObject);
    }

    // for(let i = 0; i < contentList.length; i++) {
    //     mainContentList.innerHTML += `
    //         <li>
    //             <span>${contentList[i].id}번</span>
    //             <span>${contentList[i].content}</span>
    //             <input type="text" class="edit-inputs" value ="${contentList[i].content}">
    //             <button onclick="editData(${contentList[i].id})">수정</button>
    //             <button onclick="removeData(${contentList[i].id})">삭제</button>
    //         </li>
    //         `;
    // }
}

function removeData(id) {
    // filter로 새로운 배열 만들어 삭제 할 id를 제외하고 나머지 배열 만들기
    contentList = contentList.filter((dataObject) => dataObject.id !== id);
    // 새로만든 배열 get
    getContentList();
}

function editData(id) {

    let findIndex = -1;

    // index를 for반복문으로 찾음
    // 장점, 배열을 처음부터 끝까지 찾지않고 index값을 찾는순간 for문 종료
    // 단점, 코드가 김
    // for(let i = 0; i < contentList.length; i++) {
    //     if(contentList[i].id === id) {
    //         findIndex = i;
    //         break;
    //     }
    // }


    // filter를 이용한 index 값 찾기

    // let findObject = contentList.filter((dataObject) => dataObject.id === id)[0];
    // findIndex = contentList.indexOf(findObject);
    
    // 위의 코드를 한줄로 만듬
    findIndex = contentList.indexOf(contentList.filter((dataObject) => dataObject.id === id)[0]);


    // 해당 id에 해당하는 데이터를 찾기
    // const index = contentList.findIndex((dataObject) => dataObject.id === id);

    // 해당 id에 해당하는 데이터가 없다면 종료
    if (findIndex === -1) {
        return;
    }

    // 수정할 내용 입력받기
    const editContent = document.querySelectorAll(".edit-inputs");

    // 해당 id에 해당하는 데이터의 content를 수정
    contentList[findIndex].content = editContent[findIndex].value;

    // 값 업데이트
    getContentList();
    
}

function ContentData({ id, content }) {
    return `
        <li>
            <span>${id}번</span>
            <span>${content}</span>
            <input type="text" class="edit-inputs" value ="${content}">
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
        `;
}









