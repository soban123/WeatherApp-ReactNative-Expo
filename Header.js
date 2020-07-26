import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const MyComponent = () => {
 

  return (
    <Appbar.Header >
      <Appbar.Content style={styles.headerCon} title="Weather Go" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor:'yellow',
        alignItems:'center'
    } ,
    headerCon:{
        alignItems:'center'
    }
})

export default MyComponent;