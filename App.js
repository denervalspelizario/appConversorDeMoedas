import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native'; 
import Conversor from './src/Conversor'; // 1 a base será feita no componet Conversor

/* api usada https://economia.awesomeapi.com.br/json/last/:moedas
   para usar a requisicao de http no expo tem que se instalar a bibioteca comando npm install axios 
   1 depois olhar /service/api.js(sempre minusculo) onde sera inportado a biblioteca axios(para requisição da api)
   se for numa criacao normal será npm i react-native-axios
  documentacao  https://www.npmjs.com/package/react-native-axios */


class App extends Component {

    render(){

      return(
        <View style={styles.container}>
          {/* Compoennte criado e importados com duas props pois será dinamico e reutilizáveis  */}
          <Conversor moedaA='USD' moedaB='BRL'/>  

          <Conversor moedaA='BRL' moedaB='USD'/> 
          {/* 5 ao alterar o valor de props(moedaA e moedaB) altera as states(linha 10 e 11 de conversor)
              alterando em cascata as variaves de_para e de_para(linha 21 e 22 de conversor) consequentimente
              alterando a url de busca(api) e a variavel cotacao(leia linha 31 conversor) que especificamente
              neste caso inverte a cotacao de real para dolar ou seja adiciona o valor desejado de real e devolve
              o valor em dolar
          */}

            
          
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
    
});


export default App;