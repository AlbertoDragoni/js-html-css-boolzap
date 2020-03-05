$(document).ready(function(){
    $('.paper-plane').click(function(){
        var testoInput = $('#text').val();
        $('#text').val('');
        var messaggio = $('.template .second-bubble').clone();
        messaggio.children('.real-chat').text(testoInput);
        messaggio.children('.time-chat').text('05:05');
        $('.screen-chat').append(messaggio);
        //messaggi risposta
        var messaggioRisp = $('.template .third-bubble').clone();
        messaggioRisp.children('.real-chat').text('ok');
        messaggioRisp.children('.time-chat').text('06:06');
        $('.screen-chat').append(messaggioRisp);
    });

    function messageSent() {
        $('.paper-plane').click(function(){
            var testoInput = $('#text').val();
            $('#text').val('');
            var messaggio = $('.template .second-bubble').clone();
            messaggio.children('.real-chat').text(testoInput);
            messaggio.children('.time-chat').text('05:05');
            $('.screen-chat').append(messaggio);
        });
    };

    function messageReceived() {
        $('.paper-plane').click(function(){
            var messaggioRisp = $('.template .third-bubble').clone();
            messaggioRisp.children('.real-chat').text('ok');
            messaggioRisp.children('.time-chat').text('06:06');
            $('.screen-chat').append(messaggioRisp);
        });
    };














});
