$(document).ready(function() {

    // $('#myModal').Modal('show');

    $('#startGame').click() {
        capturaNomeJogadores();
    };

    $("td").click(function() {
        alert('click')
    });
});

startGame = true;

function capturaNomeJogadores() {
    var playerOne = $('input[name="txtJog1"]').val();
    var playerTwo = $('input[name="txtJog2"]').val();
    
    if (playerOne == '') {
        alert("nome necessário");
        startGame = false;
    };
        
    if (playerTwo == '') {
        alert("nome necessário");
        startGame = false;
    };

    if (startGame == true) {
        $('#myModal').Modal('hide');
        preencheNomeJogadores();
        $('#game').show('slow');
    };
};

function preencheNomeJogadores() {
    var playerOne = $('input[name="txtJog1"]').val();
    var playerTwo = $('input[name="txtJog2"]').val();

    $('#playerOne').html(playerOne);
    $('#playerTwo').html(playerTwo);
}
