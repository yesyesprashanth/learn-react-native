import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ElevatedCard from './components/ElevatedCard';
import FlatCards from './components/FlatCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';



function App(): JSX.Element {
  return (
    <SafeAreaView> 
      <ScrollView>
        <FlatCards />  
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
        </ScrollView>       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
