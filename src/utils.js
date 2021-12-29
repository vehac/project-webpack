function alterText() {
    document.getElementById('myid').innerText = 'Hola Webpack ...';
}

function msg() {
    $('#myid').html("Prueba con jquery ...");
}

module.exports = {
    alterText,
    msg
};