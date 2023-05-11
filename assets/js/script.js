const sapatos = {
    listaSapatos: [
        {
            nome:"Scarpin Vizzano",
            desc:"Salto Alto Bico Fino - Preto",
            categoria:"Sapato de salto",
            preco: 75.99,
            img:"Scarpin-Vizzano.png",
        },
        {
            nome:"Flare",
            desc:"Bota Cano Curto Salto",
            categoria:"Bota",
            preco: 319.90,
            img:"bota1.jpg",
        },
        {
            nome:"Mule Basic",
            desc:"Salto Diferenciado",
            categoria:"Sandália",
            preco:149.90,
            img:"sandalia1.jpg",
        },
        {
            nome:"Nike Waffle Debut",
            desc:"elegantes inspirados no Nike Daybreak",
            categoria:"Tênis esportivo",
            preco: 489.90,
            img:"tenis1.png",
        },
    ],
    remover(sapato){
        for ( let i=0; i < sapatos.listaSapatos.length; i++ ){
            if (sapatos.listaSapatos[i].nome == sapato){
                sapatos.listaSapatos.splice(i,1);
            }
        }

    },
    adcionar(nome,desc,categoria,preco,img){
        sapatos.listaSapatos.push({
            nome:nome,
            desc:desc,
            categoria:categoria,
            preco:preco,
            img:img
        })
    },
    alterar(nome,desc,categoria,preco,img){
        for ( let i=0; i < sapatos.listaSapatos.length; i++ ){
            if (sapatos.listaSapatos[i].nome == nome){
                sapatos.listaSapatos[i].desc = desc;
                sapatos.listaSapatos[i].categoria = categoria;
                sapatos.listaSapatos[i].preco = preco
                sapatos.listaSapatos[i].img = img
            }
        }
    }
}