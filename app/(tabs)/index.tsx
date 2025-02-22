import { View, Text, StyleSheet } from 'react-native';

export default function Status() {
  return (
    <View style={styles.container}>
      <Text>connection status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});