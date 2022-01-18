import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons'

export default function WorkOrder() {
    return (
       <SafeAreaView style={styles.contanier}>
           <View style={{marginTop:10,flexDirection:'row',padding:10,justifyContent:'space-between'}}>
           <TouchableOpacity >
           <Icon name='save' size={35} />
           <Text style={{fontWeight:'bold'}}> Save</Text>
           </TouchableOpacity>

               <Text style={styles.headingText}>
                   WORK ORDER 
               </Text>

           <TouchableOpacity>
               <Icon name='create-sharp' size={35} />
               <Text  style={{fontWeight:'bold'}}> Edit</Text>
               </TouchableOpacity>
           </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                    WO NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    CW0272517
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   ORIGINATOR :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    Kavitha
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   PHONE :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    03478272844
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   WO DATE :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    26/10/2021 21:45
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   WO STATUS :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'20%',marginLeft:20,backgroundColor:'green',borderRadius:10, color:'black'}}>
                    OPEN
              </Text>
          </View>
          {/* picker field */}
          
           
          <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                 BE NO :
             </Text>
                
               <Picker style={styles.picker}>
                 
                <Picker.Item label='PRK000276' value='javas'/>
               </Picker>
               </View> 
               
               <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   BE CATEGORY :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'60%',marginLeft:20, color:'black'}}>
            Cameras, Identification
              </Text>
          </View>
      
          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   DISTRICT :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    Kinta
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   STATE :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    Perak
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
          <Text style={{width:'40%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
                   SM PLANNED :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                    00/00/00
              </Text>
          </View>
       </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    contanier:{
        flex:1,
        backgroundColor:'#BEE2C8',
    },
    headingText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#13BE36',
        alignItems:'center'
    },
    picker:{
        width: 200,
        height:'5%',
        borderColor: 'white',
        borderWidth: 1,
       backgroundColor:'grey',
       marginLeft:20 ,
       marginBottom:10
    }
})
