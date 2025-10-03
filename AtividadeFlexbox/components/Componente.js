import{View} from 'react-native'

const Componente = (props) => {
    return(
        <View style={{
            width: props.lado || 50,            
            backgroundColor: props.cor || "white",
        }}>            
        </View>
    )
}

export default Componente;