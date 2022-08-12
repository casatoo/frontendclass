// const firstbutton = $('.slider > .btns >button').first();
// const lastbutton = $('.slider > .btns >button').last();

// console.log(firstbutton);
// console.log(lastbutton);

// firstbutton.on('click',function(){
//     const target = $('.slides>.active');

//     target.prev().addClass('.active');
//     target.removeClass('.active');

//     $('.active').css('border-color', 'red');
// })

// lastbutton.on('click',function(){
//     const target = $('.slides>.active');

//     target.next().addClass('.active');
//     target.removeClass('.active');

//     $('.active').css('border-color', 'red');
// })

let order =0;
const lastOrder = $('sliders > div').length-1;

$('.btns > button').eq(0).on('click',function(){
    if(order == 0){
        order = lastOrder;
    }else{
        order--;
    }
    $('.slides>div').removeClass('active');

    $('.slides>div').eq(order).addClass('active');
})

$('.btns > button').eq(1).on('click',function(){
    if(order == lastOrder){
        order = 0;
    }else{
        order++;
    }
    $('.slides>div').removeClass('active');

    $('.slides>div').eq(order).addClass('active');
})

