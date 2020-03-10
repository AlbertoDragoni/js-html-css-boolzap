$(document).ready(function(){
    $('.paper-plane').click(function(){
        messageSent();
        setTimeout(messageReceived, 2000);
        scroll();
    });
    $('input').keydown(function(event){
        if (event.which == 13) {
            messageSent();
            setTimeout(messageReceived, 2000);
            scroll();
        }
    });

    $('#ricerca').keyup(function(event){
        var carattereFiltro = $(this).val().toLowerCase();
        $('.contatto').each(function(){
            var nomeContatto = $(this).find('#nome').text().toLowerCase();
            if (nomeContatto.includes(carattereFiltro)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    });

    $('.contatto').click(function(){
        var cliccaNome = $(this).find('#nome').text();
        var utente = $(this).data('codice-utente');
        $('.contatto').removeClass('opac');
        $(this).addClass('opac');
        $('.screen-chat').each(function(){
            if ($(this).data('codice-utente') == utente) {
                $('.screen-chat').removeClass('active');
                $(this).addClass('active');
            }
        })
    });

    $('.contatto').click(function(){
        var clickName = $(this).find('#nome').text();
        $('.contact-header').text(clickName);
        var srcImage = $(this).find('.my-avatar img').attr('src');
        $('.header-left .my-avatar img').attr('src', srcImage);
    });

    $(document).on('click', '.fa-angle-down', function() {
        console.log('elemento cliccato', $(this));
        $('.finestra-delete').hide();
         $(this).siblings('.finestra-delete').show();
    });

    function scroll(){
        var pixelScroll = $('.screen-chat.active').height();
        $('.screen-chat.active').scrollTop(pixelScroll);
        console.log(pixelScroll);
    };

    function messageSent() {
            var testoInput = $('#text').val();
            if (testoInput.trim().length > 0) {
                $('#text').val('');
                var messaggio = $('.template .second-bubble').clone();
                messaggio.children('.real-chat').text(testoInput);
                messaggio.children('.time-chat').text(oraGiusta);
                $('.screen-chat.active').append(messaggio);
            }
    };

    function messageReceived() {
        // var testoInput = $('#text').val();
        // if (testoInput.trim().length > 0) {
        //     var messaggioRisp = $('.template .third-bubble').clone();
        //     messaggioRisp.children('.real-chat').text('ok');
        //     messaggioRisp.children('.time-chat').text(oraGiusta);
        //     $('.screen-chat.active').append(messaggioRisp);
        // }
            var messaggioRisp = $('.template .third-bubble').clone();
            messaggioRisp.children('.real-chat').text('ok');
            messaggioRisp.children('.time-chat').text(oraGiusta);
            $('.screen-chat.active').append(messaggioRisp);
    };

    function oraGiusta() {
        var hourMinute = new Date().getHours() + ':' + new Date().getMinutes();
        return hourMinute;
    }


});
