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

// const arr1 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// const 모든난장이의합 = arr1.reduce(function add(sum, currValue) {
//   return sum + currValue;
// }, 0);
// const 난장이키의합 = 100;

// const 범인들의키의합 = 모든난장이의합 - 난장이키의합;

// console.log(범인들의키의합);

// function saerch() {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 1; j < arr1.length - 1; j++) {
//       if (범인들의키의합 == arr1[i] + arr1[j]) {
//         console.log(arr1[i]);
//         console.log(arr1[j]);
//       }
//     }
//   }
// }
// saerch();

/**
 * A 를 # 으로
 */
let str = 'BANANA';

let str2 = str.replaceAll('A','#');

console.log(str2);


/**
 * 차량 10부제
 * 3일에 뒷자리가 3인 차는 위반이다.
 * 주어진 배열의 뒷자리를 주어진 숫자로 해당되는 갯수를 찾는다.
 */

const date = 0;
const carNumber = [12,20,54,30,87,91,30];


function 차량10부제(){
  let count =0;
  for( let i of carNumber){
    let str = i.toString();

    if(str.includes(date)){
      count +=1;
    }
  }
  return count;
}

console.log(차량10부제());

/** 문자 찾기
 * 문자열을 입력받고 특정문자를 찾아서 갯수를 출력
 */
let str3 = 'COMPUTERPROGRAMMING';
let saerchStr3 = 'R';

function 문자찾기(){
  let count = 0; 
  let splitStr3 = str3.split('');
  for(let i of splitStr3){
    if(i == 'R'){
      count += 1;
    }
  }
  return count;
} 

console.log(문자찾기());
