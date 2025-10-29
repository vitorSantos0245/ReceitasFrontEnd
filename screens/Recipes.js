import { Text, TouchableOpacity, View } from "react-native";

export default function Receitas({navigation}) {
 return(
        <View>
            <Text>
                Receitas
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}