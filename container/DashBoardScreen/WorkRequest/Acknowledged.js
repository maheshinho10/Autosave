import React from 'react'
import { View ,Text ,TouchableOpacity,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function Acknowledged({navigation}) {
    return (
       <SafeAreaView style={styles.container}>
           <ScrollView>
        <View style={{marginTop:10,padding:20}}>
            <TouchableOpacity
             onPress={()=> navigation.navigate('WorkRequested')}
            style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:15,backgroundColor:'#AFFFCF'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001108
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#AFFFCF'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001114
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#FFBB65'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001125
              </Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#FFBB65'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001123
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#F99696'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001002
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#FFBB65'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001003
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#AFFFCF'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001119
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#F99696'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : WRK01001020
              </Text>
            </TouchableOpacity>



            


        </View>
        </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    }
})