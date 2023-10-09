import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// 프로젝트 시작
export default function App() {
  return (
    <View style={styles.container}>
      <Text>@O@!</Text>
      <StatusBar style="auto" />
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
});
