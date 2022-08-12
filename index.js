$('.page-nav>div').on('click',function(event){
    const target = $(event.target);
    let index = target.index();

    $('.slides > div').removeClass('active');
    $('.slides > div').eq(index).addClass('active');
    $('.page-nav > div').removeClass('active');
    $('.page-nav > div').eq(index).addClass('active');

})
