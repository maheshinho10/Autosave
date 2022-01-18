import React from 'react'
import { View ,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export default function TechOption({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

      <TouchableOpacity style={{padding:10}}>
          <Icon name ='arrow-back'size={30}/>
      </TouchableOpacity>
      
    <View style={{padding:20,marginBottom:60}}>
        <TouchableOpacity
         onPress={()=> navigation.navigate('TechOption')}
        style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:45,backgroundColor:'#5FFFDE96'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
             SPARE & SERVICE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:15,paddingVertical:45,marginTop:25,backgroundColor:'#5FFFDE96'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}>
              SERVICE
          </Text>
        </TouchableOpacity>

       
        

       
    </View>
   
   </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    }
})
  
