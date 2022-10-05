// const str1 ='dddcccddd';
// function 회문문자열(str){
//   let str2 = str.toLowerCase();
//   let reverse = str2.split("").reverse().join(""); 
//   if(str2==reverse){
//       console.log('YES');
//   }
//   else{console.log('NO');
//   }
// }
// 회문문자열(str1);

// const strArr = ['teacher','time','student','beautiful','good'];
// function 가장긴문자열(strArr) {
//   let longStr = strArr[0];
//   for(let str of strArr){
//     if (str.length >longStr.length){
//       longStr = str;
//     } 
//   }
//   console.log(longStr);
// }
// 가장긴문자열(strArr);


// const str2 = 'KKHSSSSSSSE'
// function 문자열압축(str){
//   let pressStr = '';
//   let count =1;
//   for(let i = 0;i <str.length;i++){
//     if(str[i]==str[i+1]){
//       count++;
//     }
//     else{
//       pressStr+= str[i];
//       if(count > 1){
//       pressStr+= String(count);
//       }
//       count = 1;
//     }
//   }
//   console.log(pressStr);
// }
// 문자열압축(str2);
/**
 * 문자열을 순회하면서 앞뒤로 비교한다.
 * 뒤랑 똑같을경우 숫자를 늘려서 저장
 * 뒤가 다를경우 문자랑 숫자 + 하고 count 초기화
 */

/**
 * 숫자만 추출
 * 문자랑 숫자랑 섞여있는 문자열
 * 숫자만 추출해서 자연수로 만듬
 * 
 */

const str4 = 'tge0a1h205er';

function 숫자만추출(str){
  let strArr = str.split("");
  let num = '';
  for(let i of strArr){
    if(!isNaN(i)){
      num +=i;
    }
  }
  console.log(parseInt(num));
}
숫자만추출(str4);

const num1 = 987650.123;

function 뒤집어진숫자(num){
  let reverse = num.toString().split("").reverse().join("");
  console.log(parseFloat(reverse));
}
뒤집어진숫자(num1);

/**
 * 짧은 문자거리
 * 문자열 하나 문자 하나 입력
 * 문자열을 탐색하면서 숫자를 저장한다.
 * 앞이나 뒤로 가까운 쪽을 선택해야 한다.
 * 해당문자는 0이 된다.
 * 함수로 적용할 수 있는 부분은?
 * 없는거같다.
 */
const str5 = 'teachermode';
const str6 = 'e';

function 짧은문자거리(str5,str6){
  let count ='';
  1 = 1
  2 = 11
  3 = 121
  4 = 1221
  5 = 12321
}
짧은문자거리(str5,str6);