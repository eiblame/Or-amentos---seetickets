let itens = JSON.parse(localStorage.getItem('orc_db')) || [];
const autenticado = localStorage.getItem('orc_auth');

function irPara(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('sec-' + id).classList.add('active');
}

function realizarLogin(e) {
    e.preventDefault();
    const email = document.getElementById('l-email').value;
    const senha = document.getElementById('l-senha').value;

    if(email === "admin@email.com" && senha === "123456") {
        localStorage.setItem('orc_auth', 'true');
        document.getElementById('menu').style.display = 'flex';
        irPara('home');
    } else {
        alert("Acesso negado!");
    }
}

function deslogar() {
    localStorage.removeItem('orc_auth');
    location.reload();
}

function trocarTema() {
    document.getElementById('body').classList.toggle('dark-mode');
}

function adicionarItem(e) {
    e.preventDefault();
    const novo = {
        d: document.getElementById('desc').value,
        c: document.getElementById('cat').value,
        q: Number(document.getElementById('qtd').value),
        v: parseFloat(document.getElementById('valor').value)
    };
    itens.push(novo);
    e.target.reset();
    renderizar();
}

function remover(index) {
    itens.splice(index, 1);
    renderizar();
}

function renderizar() {
    const corpo = document.getElementById('tabela-corpo');
    corpo.innerHTML = '';
    let total = 0, somaV = 0, maior = 0;

    itens.forEach((it, i) => {
        const sub = it.q * it.v;
        total += sub;
        somaV += it.v;
        if(it.v > maior) maior = it.v;

        corpo.innerHTML += `
            <tr>
                <td>${it.d}</td>
                <td>${it.c}</td>
                <td>${it.q}</td>
                <td>R$ ${sub.toFixed(2)}</td>
                <td><button class="btn-del" onclick="remover(${i})">X</button></td>
            </tr>
        `;
    });

    document.getElementById('total').innerText = `R$ ${total.toFixed(2)}`;
    document.getElementById('caro').innerText = `R$ ${maior.toFixed(2)}`;
    const media = itens.length ? somaV / itens.length : 0;
    document.getElementById('media').innerText = `R$ ${media.toFixed(2)}`;
    
    localStorage.setItem('orc_db', JSON.stringify(itens));
}

if(autenticado === 'true') {
    document.getElementById('menu').style.display = 'flex';
    irPara('home');
}

renderizar();