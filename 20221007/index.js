/**
 * 자릿수의 합
 * 입력
 * 7
 * 128,460,603,40,521,137,123
 * 출력
 * 137
 * 
 */

const 자릿수의합 = () =>{

  const arrSize = 7;
  const arr = [147,460,603,40,521,138,123];
/**
 * 문자열로 치환한다음 합으로 구성된 배열 생성
 */
  let newArr = arr.map((value,index)=>{
    let sum = 0;
    for(let i of value.toString()){
      sum += parseInt(i);
    }
    return sum;
  });

/**
 * 최대값과 해당하는 index 값 저장
 */
  let maxInt = newArr[0];
  let result = arr[0];
/**
 * 반복문으로 비교해서 값 저장
 */
  newArr.forEach((value,index)=>{
    if(value > maxInt){
      result = arr[index];
      maxInt = value;
    }else if(value == maxInt){
      if(result < arr[index]){
        result = arr[index];
      }
    }
  })
  console.log(result);
}
자릿수의합();

/**
 * 뒤집은 소수
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 100,000를 넘지 않는다.
▣ 출력설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
▣ 입력예제 1
9
32 55 62 20 250 370 200 30 100
▣ 출력예제 1
23 2 73 2 3
 */

console.log(Element.prototype);