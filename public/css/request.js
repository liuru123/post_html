$(document).ready(function () {
    $('#button-ok').click(function () {
        let input = $('#input-code').val();
        if (input === '') {
            $('#error-message').html("please input the code").css("visibility","visible");
        } else {
            sendRequest();
        }
    });
    $('#input-code').focus(function () {
        $('#error-message').css("visibility", "hidden");
        $('#resText').css("visibility", "hidden");
        $('#result-info').addClass("hidden");
    })
});

function sendRequest() {
    let input=$('#input-code').val();
    $.post(
        $("input[type='radio']:checked").val(),
        {code: input})
        .done(function (data) {
            if (data.error === '') {
                $('#result-info').removeClass('hidden');
                $('#resText').html(data.data).css('visibility', 'visible');
                $(`<tr><td>${input}</td><td>${data.data}</td></tr>`).insertAfter($('tr.tr-head'));
            }else{
                $('#error-message').html(data.error).css("visibility","visible");
            }
        }).fail(function (error) {
        $('#error-message').html(error.error).css('visibility', 'visible');
    })
};