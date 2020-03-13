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

// ---handlebars con contatti ------------------------
    var sourceContatti = $('#template-aside').html();
    var templateContatti = Handlebars.compile(sourceContatti);


    var contattiAside = [
        {
            dataCodiceUtente: 'Fabio',
            imgAvatar: 'img/avataaars.png',
            nome: 'Fabio',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Andrea',
            imgAvatar: 'img/avataaars(1).png',
            nome: 'Andrea',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Giovanni',
            imgAvatar: 'img/avataaars(2).png',
            nome: 'Giovanni',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Ciccio',
            imgAvatar: 'img/avataaars(3).png',
            nome: 'Ciccio',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Alberto',
            imgAvatar: 'img/avataaars(4).png',
            nome: 'Alberto',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Daniele',
            imgAvatar: 'img/avataaars(5).png',
            nome: 'Daniele',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Elena',
            imgAvatar: 'img/avataaars(6).png',
            nome: 'Elena',
            spoilerChat: 'non so cosa dire'
        },
        {
            dataCodiceUtente: 'Federica',
            imgAvatar: 'img/avataaars.png',
            nome: 'Federica',
            spoilerChat: 'non so cosa dire'
        }
    ];
    for (var i = 0; i < contattiAside.length; i++) {
        var contattiUtente = templateContatti(contattiAside[i]);
        $('.contatti').append(contattiUtente);
    };

// -----fine handlebars con contatti----------------------------------------

    function oraGiusta() {
        var hourMinute = new Date().getHours() + ':' + new Date().getMinutes();
        return hourMinute;
    }
    function scroll(){
        var pixelScroll = $('.screen-chat.active').height();
        $('.screen-chat.active').scrollTop(pixelScroll);
    };

});
