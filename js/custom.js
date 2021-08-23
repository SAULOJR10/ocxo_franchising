function abrir_modal(x){
    if(x == 'Harmonização'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Harmonização Facial');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_1.png">');
    }
    if(x == 'Preenchimento'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Preenchimento Labial');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_2.png">');
    }
    if(x == 'botox'){
        $('#titulo_apresentar').empty();
        $('#titulo_apresentar').append('Botox');
        $('#img_modal').empty();
        $('#img_modal').append('<img src="img/card_fa_3.png">');
    }
    $('.bd-example-modal-lg').modal('show');
}

function exit_modal(){
    $('.bd-example-modal-lg').modal('hide');
}