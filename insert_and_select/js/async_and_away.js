//비동기 처리로 동작
// promise에서 resolve(매개변수)를 호출해야 then을 사용 할 수 있다.




async function fx1() {
    console.log("fx1 비동기 호출");
    // throw new Error();
    return 10;
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + " 출력");
}

async function fx3() {
    let arg = 0;
    let fx1Result = await fx1(); // await 비동기를 동기로 바꿔줌, async함수 안에서만 사용 가능
    arg = fx1Result;
    fx2(arg);
    
}

function handleSubmitClick2() {
    fx3();
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        // resolve(); // resolve 호출에 대한 정의가 then이다.
        reject(); // reject 호출에 대한 정의가 catch이다.
    }); 

    p1.then(() => {
        console.log("p1 then 실행");
        return 10;
    }).then((num) => {
        console.log(num); //return 값이 num 매개변수에 대입 됨
    }).then(() => {
        console.log("세번째 then")
    }).catch(() => {
        console.log("오류");
    });; // 비동기 처리 안에서 동기처리를 함 -> then이 순서대로 진행되기 때문

    

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");
}