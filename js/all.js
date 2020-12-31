
$('document').ready(function(){
    // mobile版nav
    $('#navbar-btn').click(function(){
        $('#nav-mobile').slideToggle();
    })

    //member頁nav會員下拉選單
    $('#dropdown').click(function(){
        $('.dropdown-menu').slideToggle();
    })

    //開啟預約modal
    $('#reservation-modal').click(function(){
        $('#modalToggle').show();
    })

    //關閉modal
    $('.modal').click(function(){
        $('#modalToggle').hide();
    })

    //modal按鈕
    var step = 1;
    $('.modalNext').click(function(){
        if(step == 1){
            $('.reservation').hide();
            $('.information').show();
            $('.modalBack').show();
            $('#reservation-step1').removeClass('schedule-action');
            $('#reservation-step2').addClass('schedule-action');
            step = step + 1;
        }else if(step == 2){
            $('.information').hide();
            $('.payment').show();
            $('#reservation-step2').removeClass('schedule-action');
            $('#reservation-step3').addClass('schedule-action');
            step = step + 1;
        }else{
            $('.modal-content').hide();
            $('.modalEnd').show();
        }
    })

    $('.modalBack').click(function(){
        if(step == 2){
            $('.information').hide();
            $('.reservation').show();
            $('.modalBack').hide();
            $('#reservation-step1').addClass('schedule-action');
            $('#reservation-step2').removeClass('schedule-action');
            step = step - 1;
        }else if(step == 3){
            $('.information').show();
            $('.payment').hide();
            $('#reservation-step2').addClass('schedule-action');
            $('#reservation-step3').removeClass('schedule-action');
            step = step - 1;
        }
    })

})