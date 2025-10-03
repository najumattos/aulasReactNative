import {Text, StyleSheet, View } from 'react-native';
import Componente from './components/Componente';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>teste</Text>
      <View style={styles.cabecalho}>
          <View style={styles.maior}></View>        
          <View style={styles.menor}></View>        
      </View>

      <View style={styles.principal}>
      </View>

      <View style={styles.rodape}>
          <Componente cor="green" lado={20}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    flex: 1,
    flexDirection: 'row',    
    justifyContent: 'space-evenly',
    backgroundColor: '#fbebaf',
    width: '100%'
  },
  principal: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#74bf9d',
    width: '100%'
  },
  rodape: {
    flex: 1,    
    backgroundColor: '#56a292',
    width: '100%'
  },
  maior:{

  },
  menor:{}
});
