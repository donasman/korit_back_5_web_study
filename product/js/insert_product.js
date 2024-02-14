async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs")
    const product = {
        productName: productInputs[0].value,
        productPrice: productInputs[1].value,
        productSize: productInputs[2].value
    };
    const jsonProduct = JSON.stringify(product);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonProduct

    };

    try {

        const response = await fetch("http://localhost:8080/product/product", option)

        if(!response.ok) {
            throw await response.json();
        }
        const json = await response.json();

        console.log(json);
        console.log(product);


    } catch (error) {
        alert(error.errorMessage);
    }
   

}