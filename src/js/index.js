// Captura o input
const upload = document.querySelector('.upload');
const previewImg = document.querySelector('.preview_img');
const preview = document.querySelector('.preview');

// Faz o preview abrir o seletor de arquivos
preview.addEventListener('click', () => {
    upload.click();
});

// Quando o usuário escolher uma imagem
upload.addEventListener('change', function () {
    const file = this.files[0]; // pega o primeiro arquivo
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImg.src = e.target.result; // coloca a imagem no quadro
            preview.style.border = "none"; // tira as bordas
        }
        reader.readAsDataURL(file);
    }
});

// Botão para mostrar a lista de elementos
const botaoPrincipal = document.getElementById('Elemento');
const lista = document.querySelector('.lista_elemento');
const botoesLista = document.querySelectorAll('.lista_elemento button');

// Mostra/esconde a lista ao clicar no botão principal
botaoPrincipal.addEventListener('click', () => {
    if (lista.style.display === 'none' || lista.style.display === '') {
        lista.style.display = 'flex';
    } else {
        lista.style.display = 'none';
    }
});

// Ação ao clicar em cada botão da lista
botoesLista.forEach(botao => {
    botao.addEventListener('click', () => {
        console.log("Você escolheu:", botao.textContent);
        // Aqui você pode colocar outra lógica, ex.: atualizar texto do botão principal
        botaoPrincipal.textContent = botao.textContent;
        lista.style.display = 'none'; // fecha a lista depois da escolha
    });
});
