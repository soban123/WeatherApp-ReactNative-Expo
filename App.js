import React , {useReducer , useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header' ;
import BottomNav from './BottomNav'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export   const  MyContext = React.createContext({});

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#07233b',
    accent: 'white',
  },
};

export default function App() {

  
  const [city,setCity] = useState('Karachi');
 const reducer = (state, action) => {
    const { payload } = action; 
    switch (action.type) {
      case "Change_City":
       return payload;
      default:
       return state;
  }};

  const [globalState, dispatch] = useReducer(reducer , city);

  return (
      <PaperProvider theme={theme}>
        <MyContext.Provider value={{ globalState, dispatch }}>
       <Header />
       <BottomNav />
       </MyContext.Provider>
      </PaperProvider>
      
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
