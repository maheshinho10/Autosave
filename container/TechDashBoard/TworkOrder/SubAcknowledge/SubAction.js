import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons' 
import { Modal } from 'react-native'
import PopView from '../../../DashBoardScreen/WorkRequest/PopView'

export default function SubAction({navigation}) {

  const [isModalVisible, setisModalVisible] = useState(false)

  const changeModalVisible = (bool) => {
      setisModalVisible(bool); 
  }
  return (
   <SafeAreaView style={styles.container}>
       <ImageBackground style={styles.image} source={require('../../../assets/images/Extra.png')}>
       <View style={{alignItems:'center',marginTop:10}}>
         <Text style={{fontSize:26,fontWeight:'900',color:'black'}}>ACTION</Text>
     </View>
     <View style={{padding:10}}>
     
     <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
           <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
           COND STATUS:
           </Text>
              
           <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               />
            
             </View> 

             <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
           <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
           CAUSE CODE:
           </Text>
              
           <TextInput
               style={styles.textArea}
               underlineColorAndroid="transparent"
               />
            
             </View> 

             <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
            <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
           CLINIC CODE : 
            </Text>
                
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:15, color:'black'}}>
            PRK030
            </Text>
        </View>

        <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
            <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
           CLINIC NAME : 
            </Text>
                
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:15, color:'black'}}>
            KLINIK KESIHATAN GREENTOWN
            </Text>
        </View>

        <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
            <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
           CLINIC TYPE : 
            </Text>
                
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:15, color:'black'}}>
            KK1
            </Text>
        </View>
           
        <View style={{marginTop:15}}>
            <Text style={{width:'60%',fontSize:20,fontWeight:'bold',textAlign:'right',color:'black'}}>
           CORRECTIVE ACTION : 
            </Text>
                
          
        </View>

       
        <View style={{width:'100%',marginTop:10,flexDirection:'row',}}>
         
              
           <TextInput
               style={styles.textArea1}
               underlineColorAndroid="transparent"
               />
            
             </View> 

            <View style={{marginTop:30,alignSelf:'center'}}>
                <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,backgroundColor:'#E8DDDD',borderRadius:10,flexDirection:'row',borderColor:'black',borderWidth:2}}
                 onPress={()=> changeModalVisible(true)}
                >

             <Modal
                 transparent={true}
                 animationType='fade'
                 visible={isModalVisible}
                 nRequestClose={()=>changeModalVisible(false)}>
                
                
                   <PopView
                       changeModalVisible={changeModalVisible}
                               />
                 </Modal>
                <Icon name = 'save' size={30} color={'black'}/>
                    <Text style={{color:'black',fontSize:20}}> SAVE </Text>
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
