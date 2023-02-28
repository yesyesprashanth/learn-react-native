import { View, Text, StyleSheet, Image } from "react-native";

export default function FancyCard(){
    return<> 
        <View>
            <Text style = {styles.headingText}>Trending Place</Text>
            <View style = {[styles.card, styles.cardElevated]}>
                <Image 
                source={
                   {uri:"https://www.travelandleisure.com/thmb/w1px_CF34KAjs5NXVxo7ZEOmPK8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg"}
                }
                style = {styles.cardImage}
                />
                <View style = {styles.cardBody}>
                    <Text style = {styles.cardTitle}>Taj Mahal</Text>
                    <Text style = {styles.cardLabel}>Agra</Text>
                    <Text style = {styles.cardDescription}>Tajmahal is a symbol of love</Text>
                </View>
                <View style={styles.cardFooter}>
                <Text>12 min</Text>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    headingText:{
        fontWeight:'bold',
        fontSize: 16,
        marginVertical: 10,
    },
    card:{
        width:330,
        height:400,
        borderRadius:12,      
        marginHorizontal:16,   
        overflow:'hidden',          
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180    
    },
    cardBody:{
        padding:10,
        flex:1,
        flexGrow:1,
        justifyContent:'space-between',                
    },
    cardTitle:{fontSize:18, fontWeight:'bold'},
    cardLabel:{color:'green'},
    cardDescription:{
        marginVertical:10,
        flexShrink:1,
    },
    cardFooter:{padding:10, justifyContent:'flex-end'}
})