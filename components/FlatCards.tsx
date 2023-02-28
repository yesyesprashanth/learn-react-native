import { View, Text, FlatList, ListRenderItem, StyleSheet, StatusBar} from "react-native";

export default function FlatCards():JSX.Element{           
        return (          
            <View>
              <Text style = {styles.title}>Flatcards</Text>
              <View style = {styles.container}>
                <View style = {[styles.card, styles.red]}>
                  <Text>Red</Text>
                </View> 
                <View style = {[styles.card, styles.green]}>
                  <Text>green</Text>
                </View>
                <View style = {[styles.card, styles.blue]}>
                  <Text>blue</Text>
                </View>  
                <View style = {[styles.card, styles.blue]}>
                  <Text>blue</Text>
                </View>          
              </View>
            </View>

        )
}

const styles = StyleSheet.create({
  container: {    
    flexDirection:'row',
  },
  card: {        
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,    
    width:'20%',
    height:100,
    margin:8,    
  },
  red:{
    backgroundColor:'red'
  },
  green:{
    backgroundColor:'green'
  },
  blue:{
    backgroundColor:'blue'
  },
  title: {
    fontSize: 32,
    paddingHorizontal:100,    
  },
});      