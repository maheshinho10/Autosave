import React from 'react'
import { View, Text,StyleSheet ,TextInput,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Action() {
    return (
      <SafeAreaView style={styles.container}>
  <View style={{justifyContent:'space-between',marginTop:10,flexDirection:'row',padding:10}}>

  <TouchableOpacity >
           <Icon name='save' size={30} />
           <Text style={{fontWeight:'bold'}}>Save</Text>
           </TouchableOpacity>

               <Text style={styles.headingText}>
                   ACTION 
               </Text>

               <TouchableOpacity>
               <Icon name='create-sharp' size={30} />
               <Text  style={{fontWeight:'bold'}}>Edit</Text>
               </TouchableOpacity>
                
           </View>
{/* picker  */}
           <View style={{width:'100%',marginTop:40,flexDirection:'row'}}>
             <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                COND STATUS :
             </Text>
                
               <Picker style={styles.picker}>   
                 
                <Picker.Item label='' value=''/>
               </Picker>
               </View> 

               <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 CAUSE CODE :
             </Text>
                
               <Picker style={styles.picker}>
                 
                <Picker.Item label='' value=''/>
               </Picker>
               </View> 
               {/* picker  */}

               <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                    CLINIC CODE : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    PRK030
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                    CLINIC NAME : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    KLINIK KEISHATAN GREENTOWN
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                    CLINIC TYPE : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    KK1
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'60%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                    CORRECTIVE ACTION : 
              </Text>
          </View>
          <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder=""
      placeholderTextColor="black"
      numberOfLines={5}
      multiline={true}
    />
  </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#BEE2C8',
    },
    picker:{
        width: 200,
        height:'5%',
        borderColor: 'white',
        borderWidth: 1,
       backgroundColor:'white',
       marginLeft:20 ,
       marginBottom:10
    },
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#13BE36',
        alignItems:'center'
    },
    textAreaContainer: {
        borderColor: 'grey',
        marginTop:10,
        padding: 5
      },
      textArea: {
        height: 130,
        width:'90%',
        marginLeft:20,
        backgroundColor:'white',
        fontSize:20,
        borderRadius:5
      }
    
})