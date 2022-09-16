const array1 = [1, 2, 3, 4, 5];
/*
1. array1 에서 최고 값을 찾으시오 (Sperad operator 이용)
*/
console.log(Math.max(...array1));
/*
2.  Destructring 문법을 사용해서 아래 객체와 배열을 분해해주세요
*/
const { name1, age1 } = { name1: "홍길동", age1: 40 };
const [{ name2, age2 }, { name3, age3 }] = [
  { name2: "영수", age2: 20 },
  { name3: "영수", age3: 20 },
];

console.log(name1);
console.log(name2);
console.log(name3);
console.log(age1);
console.log(age2);
console.log(age3);

/*
3. 템플릿 리터럴을 사용해서 아래  console.log를 변경해주세요
*/
const myName = "성민";
console.log(`나의 이름은 ${myName}입니다`);

/*
4. 아래 일반함수를 화살표함수로 변경해주세요 
*/
let 일반함수 = () => {
  alert("화살표 함수로 변환!");
};

일반함수();

/*
5. 아래에 기본값 Default Value를 넣어 함수가 정확히 작동하게 해주세요
*/
function add(a = 20, b = 30) {
  return a + b;
}
console.log(add());

console.log(add(1));

/*
6. 아래 반복문을 forEach,map,for in 형태로 표현해주세요
filter , find , findIndex 
*/
function test_01() {
  const array10 = [1, 2, 3, 4, 5, 6];

  // forEach
  const newArray2 = [];
  array10.forEach((value, index) => {
    // for문에서 continue = return true
    //
    if (value === 1) {
      return true;
    }

    newArray2.push(value + 10);
  });

  // 함수에서 return undefined;

  // map : 리턴이 가능한 반복문
  const newArray = array10.map((value, index) => {
    return value + 10;
  }, []);

  // for in
  for (let key in array10) {
  }
}

test_01();

/*
7. 아래 함수를 실행 시켰을때 티켓 개수가 5개 미만인 회원에게 티켓을 3개씩 주세요
map,forEach 둘다 사용해보세요
*/
function test_02() {
  // depth (깊이) :
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

  /*
  shallow copy : 얕은복사 
  deep copy : 깊은복사
  */

  // ================= shallow copy ===============

  //   // depth : 1
  //   const obj = {
  //     name : '성민',
  //     age : 30
  //   };

  //   // 얕은복사
  //   const obj1 = {...obj};

  //   obj1.name = '길동';

  //   console.log(obj,obj1);

  // ================= shallow copy ===============

  // Javascript 에서 문자열있죠
  // 값이 공유가 안됨

  // JSON 문자열 (깊은 복사)
  const cloneUser = deepCopy(user);
  const cloneUser1 = deepCopy(user);

  const newUser1 = [];

  const newUser = cloneUser.map((value) => {
    if (value.ticket < 5) {
      value.ticket += 3;
    }

    return value;
  });

  cloneUser1.forEach((value) => {
    if (value.ticket < 5) {
      value.ticket += 3;
    }

    newUser1.push(value);
  });
}

test_02();

/*
8. 매개변수로 아이디값을 받아서 해당되는 아이디값만 티켓을 하나 제거해주세요
forEach,map
// deepCopy 깊은복사
*/
function test_03(paramId) {
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

  // filter
  // return 받을 수 있음 (map처럼)
  //   const newUser = user.filter((value) => {
  //     return value.id !== paramId;
  //   })

  //   // find
  //   const findUser = user.find((value) => {
  //     return value.id === paramId;
  //   })

  // findIndex
  const findUserIndex = user.findIndex((value) => {
    return value.id === paramId;
  });
  user[findUserIndex].ticket -= 1;

  console.log(user);
}
test_03(4);

// test_03(3) => id가 3번인[미아] 티켓 하나 제거

/*
9. 매개변수로 아이디값을 받아서 해당되는 아이디값만 배열에서 삭제시켜주세요
filter : 필터링 반복문
*/

// test_03(3) => id가 3번인[미아] 배열에서 제거

/*
10. 티켓이 많은 순서대로 배열을 정렬해주세요
sort 함수
*/

/*
11. 이름이 동명이인일 경우 티켓 개수를 합쳐주세요
sort 함수
*/

// 깊은복사
function deepCopy(value) {
  return JSON.parse(JSON.stringify(value));
}
