import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export default function SubMaterial({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../../assets/images/Extra.png')}>
            <View style={{alignItems:'center',marginTop:10}}>
              <Text style={{fontSize:26,fontWeight:'900',color:'black'}}>MATERIAL</Text>
          </View>
          <View style={{padding:5}}>
          
          <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
                <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                STOCK NO:
                </Text>
                   
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    />
                 
                  </View> 
   
                  <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
                <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                DESC:
                </Text>
                   
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    />
                 
                  </View> 
   
                  <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
                <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                STOCK LOCTN:
                </Text>
                   
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    />
                 
                  </View> 
   
                  <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
                <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 QTY NEEDED:
                </Text>
                   
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                  
                    />
                 
                  </View> 
   
                  <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
                <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                CHG CONSTCENTER:
                </Text>
                   
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                   
                    />
                 
                  </View> 
   
                  <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
                <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                CRG ACCOUNT:
                </Text>
                   
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                   
                    />
                 
                  </View> 

                  <View style={{marginTop:30,alignSelf:'center'}}>
                     <TouchableOpacity style={{paddingHorizontal:40,paddingVertical:7,backgroundColor:'#E8DDDD',borderRadius:10,flexDirection:'row',borderColor:'black',borderWidth:2}}
                     
                      >
                     <Icon name = 'add' size={30} color={'black'}/>
                         <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}> ADD ITEM </Text>
                     </TouchableOpacity>
                 </View>
   
                 <View style={{marginTop:30,alignSelf:'center'}}>
                     <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,backgroundColor:'#E8DDDD',borderRadius:10,flexDirection:'row',borderColor:'black',borderWidth:2}}
                     
                      >
                     <Icon name = 'save' size={27} color={'black'}/>
                         <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}> SAVE </Text>
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
           backgroundColor:'white'
       },
       image: {
           flex: 1,
         },
         textArea: {
           height: 50,
           width:180,
           marginLeft:10,
           backgroundColor:'white',
           fontSize:20,
           borderRadius:5
         },
         textArea1: {
           height: 110,
           width:350,
           marginLeft:5,
           backgroundColor:'white',
           fontSize:20,
           borderRadius:5,
           
         }
   })
   
