import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import plotter from './plotter';
import status from './status';
import history from './history';

const renderScene = SceneMap({
  status: status,
  plotter: plotter,
  history: history,
});

const routes = [
  { key: 'status', title: 'Connection Status' },
  { key: 'plotter', title: 'Plotter' },
  { key: 'history', title: 'Motion Detection Status' },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}