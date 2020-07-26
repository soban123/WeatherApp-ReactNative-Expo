import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Textinput from './SelectCity'
import Weather from './Weather'




const SelectCity = () => <Textinput  />;

const Weather2 = () => <Weather  />;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'city', title: 'city', icon: 'city' },
    { key: 'weather', title: 'Weather', icon: 'cloud' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    city: SelectCity,
    weather: Weather2,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};



export default MyComponent;