

// $('#input-form').on('submit', function (event) {
//     /** 새로고침 되지않게 함 */
//     event.preventDefault();

//     /** 입력된 메세지를 가져옴 */
//     const message = $('#text-input').val();
    
//     // 템플릿 리터럴 문법
//     const html = `<div class='chat-message mine'>
//     <section><i class='fa fa-user'></i></section>
//     <span>홍길동</span>
//     <div>${message}</div>
//     </div>`;
    
//     /** 메세지 박스에 요소를 추가*/
//     $('.message-box > .message-group').last().append(html);
    
//     /** 입력된 값 삭제 */
//     $('#text-input').val('');
    
// })


/**
 * 라디오가 뭐가 선택 되있는지 알아야 함
 * 값을 잘 가져왔는지 확인 alert() or console.log()
 * 왼쪽 메세지 양식 찾기
 * 체크한 쪽에 따라 값을 변경
*/


$('#input-form').on('submit', function (event) {
    /** 새로고침 되지않게 함 */
    event.preventDefault();

    /** 입력된 메세지를 가져옴 */
    const message = $('#text-input').val();
    
    /** 체크여부 확인 */
    const checkedValue =  $('input[name=me]:checked').val();
    
    /** other 인지 mine 인지 */
    const role = checkedValue === '엄마' ? 'mine' : 'other';
    const name = checkedValue === '엄마' ? '홍길동' : '아들';
    
    const html = `<div class='chat-message ${role}'>
    <section><i class='fa fa-user'></i></section>
    <span>${name}</span>
    <div>${message}</div>
    </div>`;

    /** 메세지 박스에 요소를 추가*/
    $('.message-box > .message-group').last().append(html);
    
    /** 입력된 값 삭제 */
    $('#text-input').val('');
    
});