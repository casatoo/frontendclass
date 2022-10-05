// /**
//  * 큰 수 출력하기
//  * 자연수 N 주어지고 N개의 정수 입력
//  * 7,9,6,12
//  * 7,3,9,5,6,12
//  */



// /**
//  * 중복문자 제거
//  * 소문자로된 문자열이 입력 중복을 제거하고 출력한다.
//  * 입
//  * ksekkset
//  * 출
//  * kset
//  */

//  const array1 = [1,2,3,4,5];
//  /*
//  1. array1 에서 최고 값을 찾으시오 (Sperad operator 이용)
//  */
 
//  /*
//  2.  Destructring 문법을 사용해서 아래 객체와 배열을 분해해주세요
//  */
//  const people = { name : '홍길동' , age : 40 };
//  const people2 = [{ name : '영수' , age : 20},{ name : '영수' , age : 20}];
 
//  /*
//  3. 템플릿 리터럴을 사용해서 아래  console.log를 변경해주세요
//  */
//  const myName = '성민';
//  console.log(`나의 이름은 성민입니다`);
 
//  /*
//  4. 아래 일반함수를 화살표함수로 변경해주세요 
//  */
//  function 일반함수() {
   
//  }
 
//  /*
//  5. 아래에 기본값 Default Value를 넣어 함수가 정확히 작동하게 해주세요
//  */
//  function add(a,b) {
//    return a+b;
//  }
 
//  // console.log(add(1));
 
//  /*
//  6. 아래 반복문을 forEach,map,for in 형태로 표현해주세요
//  filter , find , findIndex 
//  */
//  function test_01() {
   
//    const array10 = [1,2,3,4,5,6];
//    array10.forEach((i) => {
//     console.log(i)
//    })
//    let array11 = array10.map((i)=>{
//     return i;
//    })
//    console.log(array11);
//    for(let i in array10){
//     console.log(i);
//    }
//    for(let i of array10){
//     console.log(i);
//    }
//    console.log(array10.filter(i => i > 3));
//    console.log(array10.find(i => i > 3 ));
//    console.log(array10.findIndex(i => i > 3));
//  }

//  //test_01();
 
//  /*
//  7. 아래 함수를 실행 시켰을때 티켓 개수가 5개 미만인 회원에게 티켓을 3개씩 주세요
//  map,forEach 둘다 사용해보세요
//  */
//  function test_02() {
   
//    // depth (깊이) : 
//    const user = [{
//      id : 1,
//      name : '철수',
//      ticket : 0,
//    },{
//      id : 2,
//      name : '영희',
//      ticket : 3,
//    },{
//      id : 3,
//      name : '미아',
//      ticket : 12,
//    },{
//      id : 4,
//      name : '길동',
//      ticket : 5,
//    }];

//    user.forEach((value,index)=>{
//      if(value.ticket<5){
//       value.ticket += 3;
//     }
//    })
//    console.log(user);
//  }
 
//  test_02();
 
//  /*
//  8. 매개변수로 아이디값을 받아서 해당되는 아이디값만 티켓을 하나 제거해주세요
//  forEach,map
//  // deepCopy 깊은복사
//  */
//  function test_03(paramId) {
//     const user = [{
//      id : 1,
//      name : '철수',
//      ticket : 0,
//    },{
//      id : 2,
//      name : '영희',
//      ticket : 3,
//    },{
//      id : 3,
//      name : '미아',
//      ticket : 12,
//    },{
//      id : 4,
//      name : '길동',
//      ticket : 5,
//    }];
   
   
//  }
//  test_03(4);
 
//  // test_03(3) => id가 3번인[미아] 티켓 하나 제거
 
//  /*
//  9. 매개변수로 아이디값을 받아서 해당되는 아이디값만 배열에서 삭제시켜주세요
//  filter : 필터링 반복문
//  */
 
 
//  // test_03(3) => id가 3번인[미아] 배열에서 제거
 
//  /*
//  10. 티켓이 많은 순서대로 배열을 정렬해주세요
//  sort 함수
//  */
 
//  /*
//  11. 이름이 동명이인일 경우 티켓 개수를 합쳐주세요
//  sort 함수
//  */
 
 
//  // 깊은복사
//  function deepCopy(value) {
//    return JSON.parse(JSON.stringify(value));
//  }

 const arr = [[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]

 let result = arr.map((value)=>{
 return Math.max(Math.max(...value));
 })
 console.log(result);

 const arr2 = [4,5,1,3];
 const arr3 = [13,27,18,26];
 const arr4 =[...arr2,...arr3];
 const arr5 = arr2.concat(arr3);

 console.log(arr4);
 console.log(arr5);
 console.log(isNaN(Math.max(arr2)));


 /**
  * 등수구하기
  * 입력
  * 87,89,92,100,76
  * 출력
  * 4,3,2,1,5
  * 값을 
  */

 const studentCount = 5;
 const Kor = [87,89,92,100,76];

 function 등수구하기(studentCount,Kor){
  for(let i =0;i<studentCount;i++){
    if(i)
  }

 }
 등수구하기(studentCount,Kor);