const inputButton = document.querySelector(".input-data-button");
let num = 1;

// 이벤트 속성
inputButton.onclick = () => {
   const inputData = document.querySelectorAll(".input-data");
   const dataList = document.querySelector(".data-list");
   
   dataList.innerHTML += `
        <tr>
            <td>${num}</td>
            <td>${inputData[0]}</td>
            <td>${inputData[1]}</td>
            <td>${inputData[2]}</td>
        </tr>
    `;

   num ++;

    for(let input of inputData) {
        input.vlaue = "";
    }
    
}