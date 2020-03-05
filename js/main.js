$(document).ready(function(){
    $('.paper-plane').click(function(){
        var testoInput = $('#text').val();
        $('#text').val('');
        var messaggio = $('.template .second-bubble').clone();
        messaggio.children('.real-chat').text(testoInput);
        messaggio.children('.time-chat').text('05:05');
        $('.screen-chat').append(messaggio);
    });














});
