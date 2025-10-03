import { StyleSheet, View, Text } from 'react-native';
import Quadrado from './components/quadrado';
export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Quadrado cor="green" lado={50} />
        <Quadrado cor="blue" lado={50} />
        <Quadrado cor="yellow" lado={50} />
        <Quadrado cor="purple" lado={50} />
        <Quadrado lado={50} />
      </View>

      <View style={styles.principal}>
      <Quadrado cor="green" lado={20}/>
      <Quadrado cor="blue"lado={40}/>
      <Quadrado cor="yellow"lado={60}/>
      <Quadrado cor="purple"lado={80}/>
      <Quadrado lado={100}/>
      </View>

      <View style={styles.rodape}>
      <Quadrado cor="green" lado={20}/>
      <Quadrado cor="blue"lado={40}/>
      <Quadrado cor="yellow"lado={60}/>
      <Quadrado cor="purple"lado={80}/>
      <Quadrado lado={100}/>
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
    justifyContent: 'flex-start'
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
  }
});
