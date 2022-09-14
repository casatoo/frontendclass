

const confirm = {
  email : false,
  password : false,
};

$(document).ready(function () {

  addEevents();
  
})

function makeWarning(target,text) {

  target.next().remove();
  target.next().remove();

  target.after('<i class="fa-solid fa-ban warning"></i>');
  target.after(`<span class="error-text">${text}</span>`);

  target.addClass('warning-input');

}

function removeWarning(target) {

  target.next().remove();
  target.next().remove();
  target.removeClass('warning-input');

}

/**
 * 이벤트 연결 함수
 */
function addEevents () {

  $('.ant-input').on('keyup',function (event) {

    const target = $(event.target);
    const targetName = target.attr('name');

    const email = $('input[name=email]').val();
    const password = $('input[name=password]').val();
    const regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;

    /**
     * 1. 이메일 입력을 받고있는건지 비밀번호를 받는건지 구분 해주기
     * 
     * 
     * 이메일 양식 검증 @ .
     * 비밀번호 길이가 5글자 이상인지 확인
     * 
     * ===========  ===========
     */

    switch(targetName) {

      case 'email' :

      /**
       * targetName : 이메일이면 여기가 실행됩니다
       */

      if (regExp.test(email) === false) {
        
        makeWarning(target,'잘못된 이메일 양식입니다');

        confirm.email = false;

      } else {

        removeWarning(target);

        confirm.email = true;

      }

      break;

      case 'password' :

        if (password.length < 5) {

          makeWarning(target,'잘못된 비밀번호 양식입니다');

          confirm.password = false;

        } else {

          removeWarning(target);

          confirm.password = true;
          
        }

      /**
       * targetName : 패스워드면 여기가 실행됩니다
       */

      break;

    }

    /**
     * && : AND 그리고
     * || : OR 또는
     */
    if (confirm.email && confirm.password) {

      $('.login-btn').attr('disabled',false);

    } else {

      $('.login-btn').attr('disabled',true);

    }

  })
  

}