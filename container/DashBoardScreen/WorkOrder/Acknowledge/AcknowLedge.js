import React,{useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { Modal } from 'react-native'
import Modalpop from './Modalpop'

export default function AcknowLedge() {
 
    const [isModalVisible, setisModalVisible] = useState(false)

    const changeModalVisible = (bool) => {
        setisModalVisible(bool); 
    }

    return (
       <SafeAreaView style={styles.container}>
         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <TouchableOpacity>
                 <Icon name ='chevron-back' size={35} color={'black'}/>
             </TouchableOpacity>


             <TouchableOpacity
             onPress={()=> changeModalVisible(true)}
              style={{flexDirection:'row',backgroundColor:'#7AF3A3',paddingHorizontal:15,paddingVertical:5,borderRadius:5}}>
                 <Icon name ='checkmark-circle' size={25} color={'black'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,padding:3,fontWeight:'bold',color:'black'}}>ACKNOWLEDGE</Text>
                 <Modal
                 transparent={true}
                 animationType='fade'
                 visible={isModalVisible}
                 nRequestClose={()=>changeModalVisible(false)}>
                   <Modalpop
                       changeModalVisible={changeModalVisible}
                               />
                 </Modal>
             </TouchableOpacity>

             
             <TouchableOpacity>
                 
                 <Icon name ='chevron-forward' size={35} color={'black'}/>
             </TouchableOpacity>
         </View>

         {/* textarea? */}
         <View style={{marginTop:20,padding:10}}>

          <TouchableOpacity>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>

              <Text style={{backgroundColor:'grey',paddingHorizontal:5,paddingVertical:25,fontSize:17,flexWrap:'wrap',borderRadius:10,color:'black',fontWeight:'bold'}} >WR NO:CW0272517</Text>

              <Text style={{backgroundColor:'grey',paddingHorizontal:5,paddingVertical:25,fontSize:17,flexWrap:'wrap',borderRadius:10,color:'black',fontWeight:'bold'}} >WR NO:CW0272517</Text>
              </View>
              <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'60%', fontSize:20, fontWeight:'bold', marginLeft:10, color:'black'}}>
                    WR DATE AND TIME : 
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'80%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                   RESPONSE DATE&TIME : 
              </Text>
                  
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    ORIGINATOR : 
              </Text>
                  
              
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'50%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                  ACKNOWLEDGE : 
              </Text>
                  
             
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'60%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    
                   PHONE: 
              </Text>
                  
              
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    BE NO: 
              </Text>
                  
              
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    DISTRICT: 
              </Text>
                  </View>
              <View style={{flexDirection:'row',width:'100%',marginTop:10}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    CIRCLE: 
              </Text>
              
          </View>

          </TouchableOpacity>
         </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D8F3DC'
    }
})