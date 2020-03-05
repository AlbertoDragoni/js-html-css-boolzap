$(document).ready(function(){
    $('.paper-plane').click(function(){
        messageSent();
        setTimeout(messageReceived, 2000);
    });

    var nomiPresenti = ['Laura', 'Marco', 'Mario', 'Alberto', 'Giacomo']







    function messageSent() {
            var testoInput = $('#text').val();
            $('#text').val('');
            var messaggio = $('.template .second-bubble').clone();
            messaggio.children('.real-chat').text(testoInput);
            messaggio.children('.time-chat').text('05:05');
            $('.screen-chat').append(messaggio);
    };

    function messageReceived() {
            var messaggioRisp = $('.template .third-bubble').clone();
            messaggioRisp.children('.real-chat').text('ok');
            messaggioRisp.children('.time-chat').text('06:06');
            $('.screen-chat').append(messaggioRisp);
    };














});
