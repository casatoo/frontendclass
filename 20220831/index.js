
$(document).ready(function(){
    addEvents();
})

 function deleteTodo(event){

    $(event.target).parent().remove();
}

function addEvents(){

    $('#input-todo').on('submit',function(event){
        event.preventDefault();
        const todo = $('.todo-text').val();
        const html = `<li><span>${todo}<button type="button" onclick="deleteTodo(event);" class="btn-delete">삭제</button>
        <button type="button" class="btn-modify">수정</button></li>`;
        $('ul').prepend(html);
        $('.todo-text').val('');
    })
    
    $('.btn-clear').on('click',function(){
        $('ul').empty();
        const clear = '<li><span>go to position class</span></li>';
        $('ul').append(clear);
    })

    $('.btn-delete').on('click',deleteTodo)


}

/**
 * 입력한 todo 기록하기
 * 1. form 으로 감싸서 submit을 이벤트로 받는다.
 * 2. event.????? 로 새로고침을 막는다.
 * 3. 입력한 값 가져오기
 * 4. 입력한 값 위로 쌓아 주기 prepend
 * 5. input 값 없애주기
 * 
 * clear 기능 구현 하기
 * 1. clear 버튼에 onclick 이벤트
 * 2. todo 없애주기
 * 
 * 삭제 기능 구현하기
 * 1. 삭제 버튼에 이벤트
 * 2. 삭제
 * 
 * 수정 기능 구현하기
 * 1. 수정 버튼에 이벤트
 * 2. input으로 바꾸기 전에 text 기억하기
 * 3. form 추가
 */