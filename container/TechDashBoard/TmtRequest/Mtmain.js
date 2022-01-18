import React from 'react'
import { View ,Text ,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Mtmain({navigation}) {
    return (
        <SafeAreaView style={styles.container}> 
        <ImageBackground style={styles.image}
        source={require('../../assets/images/Subbackground.png')}
        >
        <ScrollView>
     <View style={{marginTop:10,padding:20}}>
         <TouchableOpacity style={{alignItems:'center',borderRadius:15,paddingVertical:45,marginTop:15,backgroundColor:'#A0A8A496'}}
         onPress={()=> navigation.navigate('InfoMt')}
         >
           <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
               REQUEST NO : MRE208934
           </Text>
         </TouchableOpacity>

     </View>
     </ScrollView>
     </ImageBackground>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:'center'
    },
    image: {
        flex: 1,
      },
})


