const jog1 = document.querySelector('#jog1');
const jog2 = document.querySelector('#jog2');
const vitx = document.querySelector('#vitx');
const vito = document.querySelector('#vito');
const emp = document.querySelector('#emp');
const tabuleiro = document.querySelector('#tabuleiro');
const funcao = document.querySelector('#funcao');
const win = document.querySelector('#win');
let cont = 0;

tabuleiro.addEventListener('click', function(e) {
    win.textContent = '';
    const jogada = document.querySelector('#' +e.srcElement.id);
    if (jogada.textContent !== 'X' && jogada.textContent !== 'O') {
        if (cont % 2 === 0) jogada.textContent = 'X';
        else jogada.textContent = 'O';
        cont++;
        if (verificar() === true) {
            if (cont%2 === 1) {
                vitx.textContent++;
                win.textContent = 'X GANHOU!';
            }
            if (cont%2 === 0) {
                vito.textContent++;
                win.textContent = 'O GANHOU!';
            }
            reset();
        }
        if (cont === 9) {
            reset();
            emp.textContent++;
            win.textContent = 'EMPATOU!';
        }
    }
});
funcao.addEventListener('click', function(e) {
    win.textContent = '';
    const opcao = e.target.id;
    if (opcao === 'breset') {
        reset();
    }
    if (opcao === 'bnew') {
        reset();
        vito.textContent = 0;
        vitx.textContent = 0;
        emp.textContent = 0;
        jog1.textContent = 0;
        jog2.textContent = 0;
    }
});
function verificar() {
    const a1 = document.querySelector('#a1').textContent;
    const a2 = document.querySelector('#a2').textContent;
    const a3 = document.querySelector('#a3').textContent;
    const b1 = document.querySelector('#b1').textContent;
    const b2 = document.querySelector('#b2').textContent;
    const b3 = document.querySelector('#b3').textContent;
    const c1 = document.querySelector('#c1').textContent;
    const c2 = document.querySelector('#c2').textContent;
    const c3 = document.querySelector('#c3').textContent;
    let vitoria = false;
    if (a1 === a2 && a2 === a3 && a1 !== ' ') vitoria = true;
    if (a1 === b1 && b1 === c1 && a1 !== ' ') vitoria = true;
    if (a1 === b2 && b2 === c3 && a1 !== ' ') vitoria = true;
    if (a2 === b2 && b2 === c2 && a2 !== ' ') vitoria = true;
    if (a3 === b3 && b3 === c3 && a3 !== ' ') vitoria = true;
    if (a3 === b2 && b2 === c1 && a3 !== ' ') vitoria = true;
    if (b1 === b2 && b2 === b3 && b1 !== ' ') vitoria = true;
    if (c1 === c2 && c2 === c3 && c1 !== ' ') vitoria = true;
    return vitoria;
}
function reset() {
    document.querySelector('#a1').textContent = ' ';
    document.querySelector('#a2').textContent = ' ';
    document.querySelector('#a3').textContent = ' ';
    document.querySelector('#b1').textContent = ' ';
    document.querySelector('#b2').textContent = ' ';
    document.querySelector('#b3').textContent = ' ';
    document.querySelector('#c1').textContent = ' ';
    document.querySelector('#c2').textContent = ' ';
    document.querySelector('#c3').textContent = ' ';
    cont = 0;
}
