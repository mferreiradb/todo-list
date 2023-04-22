import { StatusBar, StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  
  return (
    <View style={styles.app}>
      <StatusBar
        barStyle="light-content"
        translucent
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#6b6b6b',
    flex: 1
  }
})