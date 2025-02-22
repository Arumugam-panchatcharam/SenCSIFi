import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Connection Status',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="link" color={color} />,
        }}
      />
      <Tabs.Screen
        name="plotter"
        options={{
          title: 'CSI Data Plotter',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bar-chart" color={color} />,
        }}
        />
      <Tabs.Screen
        name="history"
        options={{
          title: 'Motion Detection History',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />,
        }}
      />
    </Tabs>
  );
}
