import { Text, TouchableOpacity, View } from "react-native";

export default function Home({navigation}) {
    return(
        <View>
            <Text>
                Bem vindo!
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Recipes')}>
                <Text>Ver Receitas</Text>
            </TouchableOpacity>
        </View>
    )
}