import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function AddRecipes({navigation}) {

    function save() {
        
    }
    return(
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar nova receita
            </Text>

            <TouchableOpacity onPress={() => save()} style={style.button}>
                <Text style={style.textButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 28
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'#FF0000',
      textAlign: 'center'
    },
    button:{
        backgroundColor: '#000',
        color: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold'
    }
  })