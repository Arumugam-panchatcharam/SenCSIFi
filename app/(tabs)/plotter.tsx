import { View, Text, Button, StyleSheet } from 'react-native';

export default function Plotter() {
  return (
    <View style={styles.container}>
      <Text>Graph</Text>
      <Button
        title="history"
        onPress={() => {
          console.log(Date.now());
        }}
      />
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