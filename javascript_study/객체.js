// 자바스크립트 객체 형태 = { key: value, key: value }
let student = {
    name: "정건희",
    age:31
}

console.log(student);
console.log(typeof(student));
console.log(student.name);

class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let s = new Student();
s.name = "정건이";
s.age = 25;
console.log(s);

let s2 = new Student("정건삼", 26);
console.log(s2);

// 변수명 앞에 #을 붙이면 private가 된다.
class User {
    #username;
    password;

    set setUsername(username) {
        this.#username = username;
    }
    get username() {
        return this.#username;
    }

}

let user = new User();
user.setUsernameusername = "geonhui";
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "gronhui");
dataMap.set("password", "1234");
console.log(dataMap);
console.log(dataMap.get("password"));