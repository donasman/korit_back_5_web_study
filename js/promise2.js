main();

function main() {
    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4),
            resolve(100);
        }, 3000);
        
    }).then((result) => {
        console.log("then실행");
        console.log(result);
    });
    console.log(3)

}