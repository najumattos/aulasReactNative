import { StyleSheet, View } from 'react-native';
import Quadrado from './components/quadrado';
export default function App() {
  return (
    <View style={styles.container}>     
      <Quadrado cor="green"/>
      <Quadrado cor="blue"/>
      <Quadrado cor="yellow"/>
      <Quadrado/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    justifyContent:'flex-start'
  },
});
