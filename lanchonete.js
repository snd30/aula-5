function calcular(){
    let codigo = Number(document.getElementById("codigo").value)
    let quantidade = Number(document.getElementById("quantidade").value)
    let texto = document.getElementById("texto")
    let total = 0

    //testando os codigos dos lanches
    switch (codigo) {
        case 1:
            total = quantidade * 18.00
            break;
    
        case 2:
            total = quantidade * 15.00
            break;

        case 3:
            total = quantidade * 24.00
            break;

        case 4:
            total = quantidade * 27.00
            break;

        case 5:
            total = quantidade * 70.00
            break;

        case 6:
            total = quantidade * 34.00
            break;

        case 7:
            total = quantidade * 25.00
            break;
    
        default:
            total = 'Código invalido'
            break;
    }
    texto.innerHTML = "R$ " + total 

}