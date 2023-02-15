import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native'; 
import Conversor from './src/Conversor';

// api usada https://economia.awesomeapi.com.br/json/last/:moedas
// * 1 para usar a requisicao de http no expo tem que se instalar a bibioteca comando npm install axios 
// * 1 depois olhar /service/api.js(sempre minusculo) onde sera inportado a biblioteca axios(para requisição da api)
// * se for numa criacao normal será npm i react-native-axios
// documentacao  https://www.npmjs.com/package/react-native-axios


class App extends Component {

    render(){

      return(
        <View style={styles.container}>
          {/* Compoennte criado e importados com duas props  */}
          <Conversor moedaA='USD' moedaB='BRL'/> 

          <Conversor moedaA='BRL' moedaB='USD'/> 

            
          
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