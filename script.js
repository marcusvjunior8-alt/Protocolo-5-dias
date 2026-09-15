// AGUARDA O CARREGAMENTO COMPLETO DO DOM
document.addEventListener('DOMContentLoaded', () => {

    // 1. LÓGICA DO FAQ (ACCORDION)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Verifica se o item clicado já está aberto
            const estaAtivo = item.classList.contains('ativo');
            // Se não estava ativo, abre o clicado
            if (!estaAtivo) {
                item.classList.add('ativo');
            }else{
                item.classList.remove('ativo');
            }
        });
    });

    // 2. RENDERIZAÇÃO DOS PRODUTOS (CASO ESTEJA NA PÁGINA DE PRODUTOS)
    renderizarProdutos();
});

// FUNÇÃO PARA INJETAR OS CARDS NA GRADE
function renderizarProdutos() {
    const container = document.getElementById('lista-produtos');
    
    // Se a div #lista-produtos não existir nesta página, ignora para não dar erro
    if (!container) return;

    const produtos = [
        {
            nome: "Protocolo 5 Dias - Kit Completo",
            preco: "R$ 35,00",
            imagem: "./imgs/kit_protocolo_5_dias.png"
        },
        {
            nome: "Bebida Equilíbrio Mais (500ml)",
            preco: "R$ 7,00",
            imagem: "./imgs/equilibrio.png"
        },
        {
            nome: "Bebida Protocolo 5 dias (500ml)",
            preco: "R$ 8,00",
            imagem: "./imgs/protocolo_5_dias.png"
        },
        {
            nome: "Kit 5 Bebidas Equilíbrio",
            preco: "R$ 35,00",
            imagem: "./imgs/kit_equilibrio.png" 
        }
    ];

    container.innerHTML = '';

    produtos.forEach(produto => {
        const cardHTML = `
            <div class="card-produto">
                <div class="foto-produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <h3>${produto.nome}</h3>
                <p class="preco">${produto.preco}</p>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}