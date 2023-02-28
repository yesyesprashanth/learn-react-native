import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Color(): JSX.Element {
 
  return (
    <SafeAreaView>
      <View style = {styles.container}>
        <Text style={styles.red}>Just Red</Text>
        <Text style = {[styles.big, styles.blue]}>Just big Blue</Text>
        <Text style = {[styles.big, styles.red]}>bigBlue, then red</Text>
        <Text style = {[styles.big, styles.blue]}>red, then big Blue</Text>
      </View>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  },
  red:{
    color:'red',
  },
  blue:{
    color:'blue',
  },
  big:{
    fontSize:30,
    fontWeight:'bold',    
  },
});

export default Color;
