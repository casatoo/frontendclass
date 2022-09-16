function gugudan() {
  for (let i = 2; i <= 9; i++) {
    console.log(`==`, i, `단`, `==`);
    for (let j = 1; j <= 9; j++) {
      console.log(i, `*`, j, `=`, i * j);
    }
  }
}
gugudan();

const a = [100, 200, 1, 4, 10, 219];
let max = a[0];
let min = a[0];

for (let i = 0; i <= a.length; i++) {
  if (a[i] < a[i + 1]) {
    max = a[i + 1];
  }
  if (a[i] > a[i + 1]) {
    min = a[i + 1];
  }
}

console.log(max);
console.log(min);

/** 티켓을 비교해서 가장 많이 갖고있는  사람의 배열 순서 로 객체를 저장하면 될듯.. */
const user = [
  {
    id: 1,
    name: "철수",
    ticket: 0,
  },
  {
    id: 2,
    name: "영희",
    ticket: 3,
  },
  {
    id: 3,
    name: "미아",
    ticket: 12,
  },
  {
    id: 4,
    name: "길동",
    ticket: 5,
  },
];

let maxticket = user[0];
let minticket = user[0];
for (let i = 0; i < user.length; i++) {
  if (maxticket.ticket < user[i].ticket) {
    maxticket = user[i];
  }
  if (minticket.ticket > user[i].ticket) {
    minticket = user[i];
  }
}
console.log(maxticket.name);
console.log(minticket.name);

/**  일곱난장이  array splice
 *
 * 키의 합이 100
 * 아홉 난장이 키가 주어지면 일곱난장이를 찾아야 함
 * 예 20,7,23,19,10,15,25,8,13
 *
 * 이중 for 문을 사용해서 두개씩 제거해보면서 나머지를 더해본다 100이 되면 제거한 두개를 추출
 *
 * 아홉명을 다 더해서 100에서 얼마나 차이나는지 확인하고
 * 이중 for문을 사용해서 두개씩 합쳐보면서 차잇값이 같으면 그 두개를 확인해서 제거 출력하고 다음으로 계속 넘어감
 */
