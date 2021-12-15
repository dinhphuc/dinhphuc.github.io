
$(document).ready(function () {
    $('input').keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
            login();
            return false;
        }
    });
    $('#btnLogin').click(function (e) {
        e.preventDefault();
        login();
    });
});