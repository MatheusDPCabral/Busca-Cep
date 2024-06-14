function getDate() {
  const dataAtual = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const dataFormatada = dataAtual.toLocaleString('pt-BR', options);
  return dataFormatada
}