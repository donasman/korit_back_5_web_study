async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs")
    const product = {
        productName: productInputs[0].value,
        productPrice: parseInt(productInputs[1].value),
        productSize: productInputs[2].value
    };

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)

    };

    try {

        const response = await fetch("http://localhost:8080/product_teacher/product12", option)

        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();

        console.log(responseData);
        alert(`${responseData.successCount}건의 상품 추가 완료`)


    } catch (error) {
        alert(error?.errorMessage);
    }
   

}