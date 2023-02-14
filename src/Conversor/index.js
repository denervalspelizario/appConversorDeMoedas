import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 




class Conversor extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){

      return(
        <View style={styles.container}>
          <Text style={styles.titulo}>{this.props.moedaA} para {this.props.moedaB}</Text>
          <TextInput 
            placeholder='Valor a ser convertido'
            style={styles.areaInput}
            onChangeText={()=>{}}
            keyboardType='numeric'
          />  

          <TouchableOpacity style={styles.botaoArea}>
            <Text style={styles.botaoTexto}>Converter</Text>
          </TouchableOpacity>

          <Text style={styles.valorConvertido}>
            10.90
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