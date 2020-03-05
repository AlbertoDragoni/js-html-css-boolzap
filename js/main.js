$(document).ready(function(){
    $('.microphone').click(function(){
        var testoInput = $('#text').val();
        $('#text').val('');
        var messaggio = $('.template .messaggio').clone();
        messaggio.children('.testo-messaggio').text(testoInput);
        messaggio.children('.orario').text('05:05');
        $('.screen-chat').append(messaggio);
    });














});
