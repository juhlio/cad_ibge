const axios = require('axios');
const uf = require('./uf');
const muni = require('./muni');


//sincroniza o banco
(async () => {
    const database = require('./db');

    try {
        const resultado = await database.sync();
        console.log(resultado);

    } catch (error) {
        console.log(error);

    }
})();

async function getUf() {
    let estados = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    //console.log(estados.data);


    let st = estados.data;
    let i = 0


    while (i < st.length) {
        //console.log(st[i].nome)
        //console.log(st[i].id)
        let ufId = st[i].id
        //verifica se estado existe no bd
        let ufExiste = await uf.findByPk(ufId)
        //cadastra estado no bd
        if (!ufExiste) {
            await uf.create({
                id: ufId,
                sigla: st[i].sigla,
                nome: st[i].nome,
                idRegiao: st[i].regiao.id,
                siglaRegiao: st[i].regiao.sigla,
                nomeRegiao: st[i].regiao.nome,

            })
        }

        municipios(ufId)
        i++

    }

}

async function municipios(uf) {
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    let cidades = await axios.get(url)
    //console.log(cidades.data)

    let ct = cidades.data;
    let n = 0

    while (n < ct.length) {
        let idMuni = ct[n].id;
        let nomeMuni = ct[n].nome;

        /*      const criaMuni = await muni.create({ 
                     id: ct[n].id,
                     nome: ct[n].nome,
                     ufId: ct[n].microrregiao.mesorregiao.UF.id,
                     ufNome: ct[n].microrregiao.mesorregiao.UF.nome,
                     ufSigla: ct[n].microrregiao.mesorregiao.UF.sigla,
                 })
                 console.log(criaMuni); */

        let muniExiste = muni.findByPk(idMuni);

        if (muniExiste) {
            const criaMuni = await muni.create({
                id: ct[n].id,
                nome: ct[n].nome,
                ufId: ct[n].microrregiao.mesorregiao.UF.id,
                ufNome: ct[n].microrregiao.mesorregiao.UF.nome,
                ufSigla: ct[n].microrregiao.mesorregiao.UF.sigla,
            })
            console.log(criaMuni);

        }

        //console.log(`Id da Cidade é => ${ct[n].id}`)
        console.log(`Id da Cidade é => ${idMuni}}`)
        console.log(`Nome da Cidade é => ${nomeMuni}}`)
        // console.log(`Nome da Cidade é => ${ct[n].nome}`)
        n++
    }
    //console.log(`Essa é a url de busca => ${url}`)
    //console.log(`Esse é o código => ${uf}`)

}

getUf()
