import React from 'react'
import { View,Text ,StyleSheet, TextInput,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Details() {
    return (
       <SafeAreaView style={styles.container}>

           {/* heading */}

           <View style={{justifyContent:'space-between',marginTop:10,flexDirection:'row',padding:10}}>

           <TouchableOpacity >
           <Icon name='save' size={35} />
           <Text style={{fontWeight:'bold'}}> Save</Text>
           </TouchableOpacity>

               <Text style={styles.headingText}>
                   DETAILS 
               </Text>

               <TouchableOpacity>
               <Icon name='create-sharp' size={35} />
               <Text  style={{fontWeight:'bold'}}> Edit</Text>
               </TouchableOpacity>
           </View>
       
          {/* picker  */}
          <View style={{width:'100%',marginTop:40,flexDirection:'row'}}>
             <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                PROBLEM CD :
             </Text>
                
               <Picker style={styles.picker}>
                 
                <Picker.Item label='' value=''/>
               </Picker>
               </View> 

               <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 ASSIGN TO :
             </Text>
                
               <Picker style={styles.picker}>
                 
                <Picker.Item label='PRK000276' value='javas'/>
               </Picker>
               </View> 
{/* pickerclose  */}
               <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                    MGF : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    NA
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   MODEL : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    NA
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'red'}}>
                    WO REQUESTED  : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'40%',marginLeft:20, color:'black'}}>
                    02061
              </Text>
          </View>
{/* textinput  */}
           
           <View style={styles.textAreaContainer} >
    <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Testing 1"
      placeholderTextColor="black"
      numberOfLines={5}
      multiline={true}
    />
  </View>
           
       </SafeAreaView>
    )   
}

const styles = StyleSheet.create({
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
        height: 100,
        width:'95%',
        marginLeft:10,
        backgroundColor:'white',
        fontSize:20,
        borderRadius:5
      }
})