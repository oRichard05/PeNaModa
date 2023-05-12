const sapatos = {
    listaSapatos: [
        {
            nome: "Scarpin Vizzano",
            desc: "Salto Alto Bico Fino - Preto",
            categoria: "Sapato de salto",
            preco: 75.99,
            img: "assets/img/Scarpin-Vizzano.png",
        },
        {
            nome: "Flare",
            desc: "Bota Cano Curto Salto",
            categoria: "Bota",
            preco: 319.90,
            img: "assets/img/bota1-removebg-preview.png",
        },
        {
            nome: "Mule Basic",
            desc: "Salto Diferenciado",
            categoria: "Sandália",
            preco: 149.90,
            img: "assets/img/sandalia1-removebg-preview.png",
        },
        {
            nome: "Nike Waffle Debut",
            desc: "elegantes inspirados no Nike Daybreak",
            categoria: "Tênis esportivo",
            preco: 489.90,
            img: "assets/img/nike-removebg-preview.png  ",
        },
    ],
    remover(sapato) {
        for (let i = 0; i < sapatos.listaSapatos.length; i++) {
            if (sapatos.listaSapatos[i].nome == sapato) {
                sapatos.listaSapatos.splice(i, 1);
            }
        }
        init()
    },
    adicionar(nome, desc, categoria, preco, img) {
        sapatos.listaSapatos.push({
            nome: nome,
            desc: desc,
            categoria: categoria,
            preco: preco,
            img: img
        })
        init()
    },
    alterar(sapato, nome, desc, categoria, preco, img) {
        for (let i = 0; i < sapatos.listaSapatos.length; i++) {
            if (sapatos.listaSapatos[i].nome == sapato) {
                sapatos.listaSapatos[i].nome = nome;
                sapatos.listaSapatos[i].desc = desc;
                sapatos.listaSapatos[i].categoria = categoria;
                sapatos.listaSapatos[i].preco = preco
                sapatos.listaSapatos[i].img = img
            }
        }
        init()
    }
}

criar = document.getElementById('criar')
criar.addEventListener("submit", function (event) {
    event.preventDefault();
    let form = new FormData(this)
    let nome = form.get('nome')
    let desc = form.get('desc')
    let categoria = form.get('categoria')
    let preco = form.get('preco')
    let imagem = form.get('imagem')
    sapatos.adicionar(nome, desc, categoria, preco, imagem)
    console.log(sapatos.listaSapatos)
})

alterar = document.getElementById('alterar')
alterar.addEventListener("submit", function (event) {
    event.preventDefault();
    let form = new FormData(this)
    let nome = form.get('nome')
    let novo = form.get('new')
    let desc = form.get('desc')
    let categoria = form.get('categoria')
    let preco = form.get('preco')
    let imagem = form.get('imagem')
    sapatos.alterar(nome, novo, desc, categoria, preco, imagem)
    console.log(sapatos.listaSapatos)
})

init = () => {
    var container = document.getElementById('product')
    container.innerHTML = ""
    sapatos.listaSapatos.map((val) => {
        container.innerHTML += `
        <div class="mostrarP product"> 
            <img onclick="maisInfo(this)" src="`+ val.img + `"/>
            <p>`+ val.nome + `</p>
            <p> R$`+ val.preco + `</p>
            <button class="excluir" onclick="deletar(this)" >Excluir</button>
        </div>    
        `
    })
}

init()

function deletar(item) {
    sapato = item.previousElementSibling.previousElementSibling.innerHTML
    sapatos.remover(sapato)
}

function maisInfo(item) {
    console.log("teste")
}

modal = () =>{
    var paimodal = document.getElementById('main')
    paimodal.innerHTML = ""
}
