// console.clear();

// function add(a,b){
//     return a+b;
// }

// const sum = add(10,20);

// console.log(sum);

/*
함수의 인자로 넣을 수 있는것.
1. String "    "
2. Number 1234
3. object  { a : b }
4. Array [a,b]
5. function 실행시킨 함수a()
*/

/* 
함수의 종류
1. 일반함수 선언 function
2. 화살표 함수 = () => { }
*/

const div1 =$('.div-01');

div1.css('background-color','green');

const divs2 = $('#div-02');

divs2.css('background-color','green');

/*
적용 순서 html -> js -> css

html, css 에서 값을 가져오는 방법 $('');
값을 변수로 가져와서 .파일형식('인자값');
*/

const div = $('.div-01,#div-02');

div.css('background-color','red');

/*
여러가지 엘리먼트를 같이 적용 하는 방법
번수 하나에 , 로 구분해서 작성
*/

/*
기본 선택자
1. .
2. #
3. div
4. ,
*/

/*
계층선택자
1. >
*/

const div3 =$('section>.div-01');
div3.css('background-color','blue');

const input = $('input[type=text]');
/*
속성선택자
1. [type=속성값과 맞춰줘야 함]
*/
input.css('background-color','blue');

/*
클릭이벤트 추가 
*/

$('.div-01').on('click',function(){
    alert('안녕');
});

$('#div-02').on('click',()=>{
    alert('div-02 안녕~!');
});

$('input[type=text]').on('keyup',function(){
    console.log('입력');
})
/*
html 파일의 준비가 끝나면 실행 시킴
*/
$(document).ready(function(){
    alert('준비 끝');
});

/*
클릭 이벤트로 class 삭제 추가
removeClass 클레스 삭제
addClass 클래스 추가
hasClass 값을 가지고 있으면 참 없으면 거짓
*/

$('.div-01').on('click',function (){
    $('.last').removeClass('last');
    $('.test-01').addClass('last');

    if($('.last').hasClass('test-01')){
        console.log("가지고 있음");
    }else{
        console.log("없음");
    }
})

// 좌 우 클릭으로 이동하는 border
// 이벤트라는 것으로 나 자신의 값을 정의
$('.div-01').on('click',function (event){
const target = $(event.target);
target.css('background-color','red');
})