import {View, Text, ScrollView, StyleSheet} from 'react-native'
 export default function ElevatedCard(){
    return(
        <View>
            <Text style = {styles.headingText}>Elevated card</Text>
            <ScrollView style = {styles.container} horizontal={true}>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>Tap</Text>
                </View>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>me</Text>
                </View>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>to</Text>
                </View>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>scroll</Text>
                </View>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>more...</Text>
                </View>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>Smiley</Text>
                </View>
                <View style = {[styles.card, styles.elevated]}>
                    <Text>Smilee</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:16,
        fontWeight:'bold',
    },
    container:{
        padding:8,    
    },
    card:{
        width:100,
        height:100,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:4,
        margin:8,
    },
    elevated:{
        backgroundColor:"#CAD5E2",
        elevation:4,
    }
})