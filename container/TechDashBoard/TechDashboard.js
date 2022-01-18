import React from 'react'
import { View ,Text,StyleSheet,ImageBackground,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function TechDashboard({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
              <ImageBackground style={styles.image}
              source={require('../assets/images/Backgrounds.jpg')}>
                <View style={{alignContent:'center'}}>
       <View style={{flexDirection:'row',alignContent:'space-around'}}>
           <TouchableOpacity
           style={{width:165,height:165,padding:20,marginLeft:20}}
           
           >
               <Image
               source={require('../assets/images/Asset.png')}
               />
           </TouchableOpacity>

           <View
          
            style={{width:165,height:165,padding:20,marginLeft:20}}>
               <Image
               source={require('../assets/images/WorkReqTech.png')}
               />
          </View>
       </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Main')}
             style={{width:165,height:165,padding:20,marginLeft:20}}>
               <Image
               source={require('../assets/images/WorkOrdTech.png')}
               />
           </TouchableOpacity>

           <TouchableOpacity
             style={{width:165,height:165,padding:20,marginLeft:20}}>
               <Image
               source={require('../assets/images/Grn.png')}
               />
           </TouchableOpacity>
       </View>
       <View style={{flexDirection:'row'}}>
           <TouchableOpacity
            onPress={()=> navigation.navigate('Mtmain')}
             style={{width:165,height:165,padding:20,marginLeft:20}}>
               <Image
               source={require('../assets/images/MtRequest.png')}
               />
           </TouchableOpacity>

           <TouchableOpacity
             style={{width:165,height:165,padding:20,marginLeft:20}}>
               <Image
               source={require('../assets/images/Pmwo.png')}
               />
           </TouchableOpacity>
       </View>
       <View>
           <TouchableOpacity
             style={{width:165,height:165,padding:10,alignSelf:'center',marginBottom:10 }}>
               <Image
               source={require('../assets/images/Personel.png')}
               />
           </TouchableOpacity>
       </View>
        
</View>
                  
              </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
      },
})
