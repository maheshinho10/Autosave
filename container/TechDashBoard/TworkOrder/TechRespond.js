import React from 'react'
import { View ,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export default function TechRespond({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
             
          <TouchableOpacity style={{padding:10}}>
              <Icon name ='arrow-back'size={30} />
          </TouchableOpacity>
        
          
        <View style={{padding:20,marginBottom:60}}>
            <TouchableOpacity
             onPress={()=> navigation.navigate('TechOption')}
            style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,backgroundColor:'#AFFFCF'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : CW01001108
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#AFFFCF'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : CW01001114
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#FFBB65'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : CW01001125
              </Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#FFBB65'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : CW01001123
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#F99696'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : CW01001125
              </Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:35,marginTop:25,backgroundColor:'#F99696'}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
                  WR NO : CW01001123
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
    }
})
  

