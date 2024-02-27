main();

function main() {
    p1(3, "data1").then((result) => {console.log(result)});
    setTimeout( ()=> p2("data2").then(result => console.log(result)), 4000);
    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));
    p4("data4")
}

function p1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time * 1000);
    })};

async function p2(data) {
    return data;
}
async function p3(data, value) {
    return {
        [data]: value
    }
}
async function p4(data) {
    const r1 = await p2(data); //p2가 리턴을 하면 값을 받아오고
    const r2 = await p3(r1, 200); // p2가 값을 받아오면 p3를 실행시키고 값을 받아와라
    console.log(r2)
}
// async 있으면 return이 promise이다.
// await이 있으면 return값을 가지고 온다.
// 단 p4는 비동기 처리이다.
// async awit를 감싸고있는것은 결국 async이기 때문에 비동기로 처리된다.
// async 단점: reslove를 제어할 수 없어서 함수의 return값으로만 제어해야 한다.