import {View, Text, StyleSheet, Linking, Image, TouchableOpacity} from 'react-native'
export default function ActionCard(){
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }
    return<>
        <View>
            <Text style={styles.headingText}>Action card</Text>
            <View style = {[styles.card, styles.elevated]}>
                <View style = {styles.headingContainer}>
                    <Text style = {styles.headerText}>
                        What's mew om javascript
                    </Text>
                </View>
                <Image 
                    source = {
                        {uri:"https://www.travelandleisure.com/thmb/w1px_CF34KAjs5NXVxo7ZEOmPK8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg"}
                    }
                    style={styles.cardImage}
                />
                <View style = {styles.cardBody}>
                    <Text numberOfLines={3}>
                    Mumtaz Mahal, who died during childbirth. But despite its iconic stature, much of its history is still shrouded in mystery. Here are a few things about the marble-clad marvel you might not have known.
                    </Text>
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity onPress={()=>openWebsite('https://www.travelandleisure.com/attractions/landmarks-monuments/taj-mahal-unique-facts-history')}>
                        <Text>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>openWebsite('https://www.travelandleisure.com/attractions/landmarks-monuments/taj-mahal-unique-facts-history')}>
                        <Text>Check More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    headingText:{
        marginVertical:10,
    },
    card:{
        width:340,
        height:360,
        margin:15,
        paddingTop:5,
        borderRadius:8,
    },
    elevated:{
        backgroundColor:'#ffffff',
        elevation:4,
        shadowOpacity:0.5,
    },
    headingContainer:{
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{color:'blue'},
    cardImage:{height:180},
    cardBody:{padding:10,},
    footer:{
        paddingHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-around'        
    }
})