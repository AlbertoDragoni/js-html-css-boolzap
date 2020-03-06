$(document).ready(function(){
    $('.paper-plane').click(function(){
        messageSent();
        setTimeout(messageReceived, 2000);
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

        $('.screen-chat').each(function(){
            if ($(this).data('codice-utente') == utente) {
                $('.screen-chat').removeClass('active');
                $(this).addClass('active');
            }
        })
    });

    function messageSent() {
            var testoInput = $('#text').val();
            $('#text').val('');
            var messaggio = $('.template .second-bubble').clone();
            console.log(messaggio)
            messaggio.children('.real-chat').text(testoInput);
            messaggio.children('.time-chat').text(oraGiusta);
            $('.screen-chat.active').append(messaggio);
    };

    function messageReceived() {
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
