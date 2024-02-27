main();
// main2();

function main() {
    let arr = []

    
    new Promise((resolve) => setTimeout(() => {
        resolve(1),
        new Promise((resolve) => setTimeout(() => {
            resolve(2),
            new Promise((resolve) => setTimeout(() => {
                resolve(3)
            },1000)
            ).then(result => {arr.push(result); console.log(arr);
            })
        }),2000).then(result => {arr.push(result);
        })
    }, 3000)).then(result => {arr.push(result);
    })
    
}

function main2 () {
    let arr = []

    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(1);
        }, 3000);
    }).then(num => {
        arr = [...arr, num];
        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(2);
            }, 2000);
        }).then(num => {
            arr = [...arr, num];
            new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve(3);
                }, 1000);
            }).then(num => {
                arr = [...arr, num]
                console.log(arr);
            })
        })
    })}