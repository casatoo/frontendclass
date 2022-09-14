function findMAX() {
  const array1 = [1, 2, 3, 4, 5];

  return Math.max(...array1);
}
console.log(findMAX());

function solution() {
  const { name: myname, age: myage } = { name: "홍길동", age: 40 };
  console.log(myname);
  console.log(myage);

  const [{ name2, age2 }, { name3, age3 }] = [
    { name2: "영수", age2: 20 },
    { name3: "영수", age3: 20 },
  ];
  console.log(name2);
  console.log(name3);
  console.log(age2);
  console.log(age3);
}
solution();

function solution2() {
  const myName = "성민";
  console.log(`나의 이름은 ${myName} 입니다`);
}
solution2();

const 화살표함수 = () => {
  alert("화살표함수다!");
};

화살표함수();

function add(a = 20, b = 30) {
  return a + b;
}
console.log(add());

function deleteFunction() {
  const people = {
    name: "철수",
    age: 30,
  };
  delete people.name;
  console.log(people);
}
deleteFunction();
