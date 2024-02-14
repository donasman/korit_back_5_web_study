async function handleAddClick() { //이벤트 함수들은 비동기로 동작해도 됨
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData

    };
    try {

        const response = await fetch ("http://localhost:8080/insert_and_select2/data/addition", option)
        
        if(!response.ok) {
            throw await response.json();
        }

        const json = response.json();

        console.log(json);

        console.log("test");

 
    } catch(error) {
        alert(error.errorMessage);
    }

    
    // fetch ("http://localhost:8080/insert_and_select2/data/addition", option)
    // .then((response) => {
    //     response.json() //프로미스
    //     .then((json) => {
    //         console.log(json);
    //         
    //     });
    // });
}