import axios from 'axios';  // importando a biblioteca axios depois de instalada (olhar linha 7 de app.js)

// base url  = https://economia.awesomeapi.com.br/
// url de requisicao sera json/last/USD-BRL  - dolar para real
// url de requisicao sera json/last/BRL-USD - de real para dolar



// funcao que cria api com a BASE da url que terá os dados e posteriomente (linha 25) será adicionado a baseURL o restante para a requisição dos dados especificos
const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/'  // base da url, pois os dados depois são algum tipo de requisição(pedido, captar as iformações) neste caso queremos ó a base

});

export default api;