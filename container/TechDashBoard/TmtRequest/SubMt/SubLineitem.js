import React from 'react'
import { Text, View,StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons' 

export default function SubLineitem({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
      <ImageBackground 
      style={styles.image}
      source={require('../../../assets/images/Backgrounds.jpg')}>
<View style={{alignItems:'center',marginTop:20}}>
           <Text style={{fontSize:26,fontWeight:'900',color:'black'}}>LINE ITEM</Text>
       </View>
    
    <View style={{padding:22}}>
    <View style={{flexDirection:'row',width:'100%'}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              STOCK NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              stk128934
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
             STOCK LOCN : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:15, color:'black'}}>
              PRK-001-0001
              </Text>
          </View></View>
      </ImageBackground>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        flex: 1,
      },
})