$(document).ready(function(){
    $('.right-footer').click(function(){
        messageSent();
        setTimeout(messageReceived, 2000);
        scroll();
    });

    $('.scrivi-mess input').keydown(function(event){
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

    $('#text').focus(function(){
     $('.fa-microphone-alt').addClass('invisible');
     $('.fa-paper-plane').css('display', 'block');
 }).blur(function(){
     $('.fa-microphone-alt').removeClass('invisible');
     $('.fa-paper-plane').css('display', 'none');
 });

    $(document).on('click', '#destroy', function() {
        $(this).parents('.clearfix').remove();
    });
// inizio handlebars---------------------------------------

function messageSent() {
    var source = $('#messaggio-template1').html();
    var template = Handlebars.compile(source);
    var datiMessaggio = {
        testoMessaggio: $('#text').val()
    };
    var templateMessaggio = template(datiMessaggio);
    $('#text').val('');
    $('.screen-chat.active').append(templateMessaggio);
};

function messageReceived() {
    var source = $('#messaggio-template2').html();
    var template = Handlebars.compile(source);
    var rispMessaggio = {
        testoRisposta: 'ok'
    };
    console.log(rispMessaggio);
    var templateMessaggio = template(rispMessaggio);
    $('.screen-chat.active').append(templateMessaggio);
};

// fine handlebars----------------------------------------------------


    function oraGiusta() {
        var hourMinute = new Date().getHours() + ':' + new Date().getMinutes();
        return hourMinute;
    }
    function scroll(){
        var pixelScroll = $('.screen-chat.active').height();
        $('.screen-chat.active').scrollTop(pixelScroll);
    };

});
