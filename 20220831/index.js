
$(document).ready(function(){
    addEvents();
})

 function deleteTodo(event){

    $(event.target).parent().remove();

    }

function modifyTodo(event){


}

function addEvents(){

    $('#input-todo').on('submit',function(event){
        event.preventDefault();
        const todo = $('.todo-text').val();
        const html = `<li><span>${todo}<button type="button" onclick="deleteTodo(event);" class="btn-delete">삭제</button>
        <button type="button" onclick="modifyTodo(event);" class="btn-modify">수정</button></li>`;
        $('ul').prepend(html);
        $('.todo-text').val('');
    })
    
    $('.btn-clear').on('click',function(){
        $('ul').empty();
        const clear = '<li><span>go to position class</span></li>';
        $('ul').append(clear);
    })
    
    $('.btn-delete').on('click',deleteTodo)
    
    $('.btn-modify').on('click',modifyTodo)

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
 * 4. target
 * 5. 수정하기 전 값 가져오기 sibling.span
 * 6. input type text value = text() 추가, span remove
 * 7. 다시 입력하는 내용 추가
 * 8. 자식요소의 input 을 찾기 위해 find("input")
 * 9. input에 입력된 값 저장
 * 10. input remove
 * 11. span prepend
 * 12. 수정버튼이 두번 눌려서 input이 두개 생기는 경우 조건문으로 막기 (focus)
 */