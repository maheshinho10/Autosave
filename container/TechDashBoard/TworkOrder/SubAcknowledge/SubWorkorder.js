import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export default function SubWorkorder({navigation}) {
    return (
       <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image}
      source={require('../../../assets/images/Extra.png')}>
       <View style={{alignItems:'center',marginTop:20}}>
           <Text style={{fontSize:26,fontWeight:'900',color:'black'}}>WORK ORDER</Text>
       </View>
    
    <View style={{padding:20}}>
    <View style={{flexDirection:'row',width:'100%'}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              WO NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              CW01001108
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
             ORIGINATOR : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:15, color:'black'}}>
              Kavitha
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              PHONE : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              0342781236
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              WO DATE&TIME: 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              26/10/2021 21:45
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              WO STATUS : 
              </Text>
                  
              <Text style={{fontSize:17,width:'35%',marginLeft:20, fontWeight:'bold',color:'white',backgroundColor:'#089252',borderRadius:10,textAlign:'center',alignItems:'center',marginTop:3}}>
              OPEN
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              BE NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              PRK000276
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              BE CATEGORY : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              Cameras, Identification
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              DISTRICT : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              Kinda
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              STATE : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              PERAK
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              SM PLANNED : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              00/00/00
              </Text>
          </View>

          <View style={{flexDirection:'row',padding:20,justifyContent:'space-between',marginTop:20,marginLeft:20,marginRight:20}}> 
           <TouchableOpacity style={{backgroundColor:'#23B433',paddingHorizontal:10,paddingVertical:10,borderRadius:5,flexDirection:'row',alignItems:'center'}}>
           <Icon name = 'checkmark-circle-sharp' size={20} color={'#FFFFFF'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'#FFFFFF'}}> APPROVE </Text>
           </TouchableOpacity>
           
           <TouchableOpacity style={{backgroundColor:'#F35353',paddingHorizontal:10,paddingVertical:10,borderRadius:5,flexDirection:'row'}}>
             <Icon name = 'close-circle-sharp' size={20} color={'#FFFFFF'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'#FFFFFF'}}> REJECT </Text>
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
})

