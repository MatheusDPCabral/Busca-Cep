function getCidades(uf) {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios")
    .then((res) => { return res.json() })
    .then((cidades) => {
      console.log(cidades)
      let cidadesList = $("#cidades-list") // peguei o select pra inserir options
      let cidadesOptions = '<option value="0" disabled selected>Escolha uma cidade</option>'
      // ler todos estados
      for (let cidade of cidades) {
        cidadesOptions += `<option value="${cidade.nome}">${cidade.nome}</option>`
      }

      cidadesList.html(cidadesOptions)
      $('select').formSelect();
    })
}