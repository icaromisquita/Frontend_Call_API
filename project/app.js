let produtos = []
let endpoint = 'https://raw.githubusercontent.com/icaromisquita/Frontend_Call_API/main/project/produtos.json'
let elementoParaInserirProdutos = document.getElementById('products__list')

buscarProdutosDaAPI()

async function buscarProdutosDaAPI() {
    let res = await fetch(endpoint)
    produtos = await res.json()
    console.log(produtos)
    exibirProdutos(produtos)
}

function exibirProdutos(produtos) {
    produtos.forEach(produto => {
        console.log(produto)
        elementoParaInserirProdutos.innerHTML += `
        <li class="products__list">
            <div class="products__content">
                <img src="${produto.img}">
                <div class="products__info">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <h4>R$ ${produto.valorComDesconto} <s> R$ ${produto.valorSemDesconto}</s></h4>
                    <p>Frete GRÁTIS</p>
                </div>
            </div>
        </li>
        `
    })
}
