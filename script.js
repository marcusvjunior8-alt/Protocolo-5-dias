document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNCIONALIDADE DO FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const estaAtivo = item.classList.contains('ativo');

                // Fecha outros itens para manter limpo
                faqItems.forEach(outroItem => outroItem.classList.remove('ativo'));

                // Alterna o item clicado
                if (!estaAtivo) {
                    item.classList.add('ativo');
                }
            });
        });
    }

    // 2. RENDERIZAÇÃO DE PRODUTOS (EXECUTADO APENAS SE A DIV EXISTIR)
    renderizarProdutos();
});

function renderizarProdutos() {
    const container = document.getElementById('lista-produtos');
    if (!container) return; // Evita erro no index.html

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
            nome: "Bebida Protocolo 5 Dias (500ml)",
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