function inserir(num) {
    var numero = document.getElementById('visor').innerHTML;

    document.getElementById('visor').innerHTML = numero + num;

}

function calcular() {
    document.getElementById('visor').innerHTML = eval(document.getElementById('visor').innerHTML)
}