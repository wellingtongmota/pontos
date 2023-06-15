function buscarPontos() {
  const valorCpf = document.getElementById('cpfcnpj').value;
  const url = `https://api.dovale.com.br/ConsultaPontos?Cliente=${valorCpf}`;

  fetch(url)
    .then(res => res.json())
    .then(result => {
      exibirRetorno(result)
    });

  function exibirRetorno(data) {
    const dadosResult = document.getElementById('resultado');
    dadosResult.textContent = `${JSON.stringify(data)}`;
  }
}