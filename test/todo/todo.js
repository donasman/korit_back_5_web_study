let contentList = [];
const insertContent = document.querySelector(".insert-content");
const mainContent = document.querySelector(".main-content");
const mainContentList = document.querySelector(".main-content-list");

let lastContentId = 0; // 초기 lastContentId 설정

insertContent.onkeydown = (e) => {
    if(e.keyCode === 13) {
        mainContent.value = insertContent.value;
        console.log(mainContent.value);

        insertContent.value = null;

        let dataObject = {
            id: ++lastContentId, // 새 항목 추가 시 id 업데이트
            content: mainContent.value
        };
        contentList.push(dataObject); // 배열에 추가

        console.log(contentList[contentList.length - 1]); // 배열의 마지막 요소를 콘솔에 출력
        getContentList(); // getContentList 호출
    }
}

function getContentList() {
    mainContentList.innerHTML = ""; // 기존 리스트 초기화
    for(let i = 0; i < contentList.length; i++) {
        mainContentList.innerHTML += `
            <li class="main-content-list">
                <span class="list-index">${contentList[i].id}번</span>
                <span class="main-content">${contentList[i].content}</span>
                <input type="text">
                <button class="edit-bttton">수정</button>
                <button class="remove-button">삭제</button>
            </li>
            `;
    }
}
function editgetContentList() {

}












