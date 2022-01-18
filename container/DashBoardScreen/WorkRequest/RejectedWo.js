import React from 'react'
import { View ,Text ,TouchableOpacity,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RejectedWo() {
    return (
        <SafeAreaView style={styles.container}> 
            <ScrollView>
         <View style={{marginTop:10,padding:20}}>
             <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:15,backgroundColor:'#AFFFCF'}}>
               <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                   WO NO : CWO239103
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
         
         justifyContent:'center'
     }
 })