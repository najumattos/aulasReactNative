import{View, StyleSheet} from 'react-native'

const Quadrado = (props) => {
    return(
        <View style={{
            width:50,
            height:50,
            backgroundColor: props.cor || "black",            
        }}>

        </View>
    )
}

export default Quadrado;