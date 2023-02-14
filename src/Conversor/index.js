import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 
import api from '../service/api';  // importando a api




class Conversor extends Component {

    constructor(props){
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,  // state altera ao digitar dado (leia linha 31)
            valorConvertido: 0,
            
        }
        this.converter = this.converter.bind(this) // bind para linkar dados da state com a funcao converter
    }

    // 1  async(linha 23) e o await (linha 24) faz com que espere a requisição ser feita  para dar o resultado
    async converter(){
        let de_para = this.state.moedaA + '-' + this.state.moedaB
        let de_para2 = this.state.moedaA  + this.state.moedaB  



        const response = await api.get(`json/last/${de_para}`)//  o response recebe todos os dados da url api base + 'json/last/USD-BRL' que é o dado específico (base + especifico)
                                                    //   que sera todo o conteudo de  https://economia.awesomeapi.com.br/json/last/USD-BRL
                                                    //   metodo get que retorna um elemento específico
                                                    // a variavel de_para serve para alterar a url quando desejado no caso esta USD-BRL (leia linha 19 de app.js e 13 e 14 desta pagina)
        
        let cotacao =  response.data[de_para2].high // puxa somente o valor usado no caso valor do dolar
        //console.log(cotacao)  
        
        let resultadoCotacao = (cotacao * parseFloat(this.state.moedaB_valor)) // ou seja multiplica o valor da cotação com o valor digitado (leia linha 53)
                                                                               // parsefloat sempre retorna um numero em decimal mesmo que ele nao seja    
        
        //console.log(response.data.USDBRL.high); obs apenas confirmando se a api esta funcionando e puxando o dado                                            
    }

    render(){

        const {moedaA, moedaB} = this.props    

      return(
        <View style={styles.container}>
          <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
          <TextInput 
            placeholder='Valor a ser convertido'
            style={styles.areaInput}
            onChangeText={(moedaB_valor)=> this.setState({moedaB_valor: moedaB_valor}) } // pega o valor digitado e adicona na state moedaB_valor
            keyboardType='numeric'
          />  

          <TouchableOpacity style={styles.botaoArea}  onPress={this.converter()}>
            <Text style={styles.botaoTexto}>Converter</Text>
          </TouchableOpacity>

          <Text style={styles.valorConvertido}>
            {this.state.valorConvertido}
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