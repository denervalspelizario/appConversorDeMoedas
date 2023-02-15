import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';  // importando TextInput, touchavleOpacity e o keyboard 
import api from '../service/api';  // importando a api

class Conversor extends Component {

    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA, // 2 state recebe valor via props(leia linha 51 desta pagina e 19 e 21 de app.js)
            moedaB: props.moedaB, // 2 state recebe valor via props(leia linha 51 desta pagina e 19 e 21 de app.js)
            moedaB_valor: 0,  // 2  state que será alterada ao digitar dado (leia linha 57)
            valorConvertido: 0,
            
        }
        this.converter = this.converter.bind(this) // 3  bind para linkar dados da state com a funcao converter
    }

    // 3  async(linha 23) e o await (linha 24) faz com que espere a requisição ser feita  para dar o resultado
    async converter(){
        let de_para = this.state.moedaA + '-' + this.state.moedaB // 3 variavel que sera usada para deixar a url dinimica (leia linha26)
        let de_para2 = this.state.moedaA  + this.state.moedaB   // 3 variavel que sera usada para para deixar o resultado de cotacao(linha 31) dinamica



        const response = await api.get(`json/last/${de_para}`)/* 3 o response recebe todos os dados da url api base + 'json/last/USD-BRL' que é o dado específico (base + especifico)
                                                       que sera todo o conteudo de  https://economia.awesomeapi.com.br/json/last/USD-BRL
                                                       metodo get que retorna um elemento específico
                                                      a variavel de_para serve para alterar a url quando desejado no caso esta USD-BRL (leia linha 19 e 20 de app.js e 21 desta pagina) */  
                                                   
        let cotacao =  response.data[de_para2].high /* 3 puxa somente o valor usado no caso valor do dolar
        //console.log(cotacao)                      sempre olhar os indices dos dados da api neste caso o dolar estava no indice high)*/
        
        let resultadoCotacao = (cotacao * parseFloat(this.state.moedaB_valor)) /* 3 ou seja multiplica o valor da cotação(valor da api jogada na variavel cotacao  linha 31)
                                                                                   com o valor digitado (leia linha 58)
                                                                                  parsefloat sempre retorna um numero em decimal mesmo que ele nao seja */    
        
        //console.log(response.data.USDBRL.high); obs apenas confirmando se a api esta funcionando e puxando o dado   
        this.setState({valorConvertido: resultadoCotacao.toFixed(2)}) // 3 altera o state com o valorCovertido que se inicia com 0 para o resultadoCotacao(linha 34 e 67)     
        Keyboard.dismiss();  // fecha o teclado automaticamente assim   que se clica em outro lugar fora dele                                
    }

    render(){

        const {moedaA, moedaB} = this.props    /* 2 constante que adiciona this.props sobre o valor neste caso vira 
                                                  moedaA(tem valor this.props.moedaA) e moedaB(tem valor this.props.moedaB) */
                                                
      return(
        <View style={styles.container}>
                                    {/* 2 recebe dado dinamico simplificado (**leia linha 10 ,11 e 45)  */}
          <Text style={styles.titulo}>{moedaA} para {moedaB}</Text> 
          

          {/* 2 Input que recebe os dados do user*/}
          <TextInput 
            placeholder='Valor a ser convertido' // texto inicial
            style={styles.areaInput} // estilo
            onChangeText={(moedaB_valor)=> this.setState({moedaB_valor: moedaB_valor}) } // pega o valor digitado(moeadaB_valor) e adicona o valor na state moedaB_valor
            keyboardType='numeric' // tipo de teclado
          />  

          <TouchableOpacity style={styles.botaoArea}  onPress={this.converter}>
            <Text style={styles.botaoTexto}>Converter</Text>
          </TouchableOpacity>

          <Text style={styles.valorConvertido}>
            {/* 4 ternario - se state valorConvertido for igual valor 0 retona vazio senão retorna o valorConvertido (linha 39)*/}
            {(this.state.valorConvertido) === 0 ? '' : this.state.valorConvertido }
          </Text>
            
          
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#CCC',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
    },
    botaoArea: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    botaoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
    
});


export default Conversor;