//promise - 없는 비동기를 만들기 위해 사용된다.
main();

let complet = [false, false, false, false];

function main() {
    const promises = 
    [
        gugudan(0, 4, "김준일"),
        gugudan(1, 1, "김준이"),
        gugudan(2, 3, "김준삼"),
        gugudan(3, 2, "김준사")

    ];


    // Promise.all(promises).then(result => {console.log(result)});
};

function gugudan(index, time, name) {

    const p = new Promise((resolve, reject) => {
        console.log(`${name}: 구구단 외워와`);
        
        
        setTimeout(() => {
            console.log(`${name}: 다 외웠어요`);
            // complet = complet.map((value, cIndex) => cIndex !== index ? value : true)
            resolve(name);
        }, time * 1000);
        
    });

    return p;
}
