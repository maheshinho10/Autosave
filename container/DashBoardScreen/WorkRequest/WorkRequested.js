import React,{useState} from 'react'
import { View ,Text,TouchableOpacity,TextInput,StyleSheet, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { Modal } from 'react-native'
import PopView from './PopView'


export default function WorkRequested({navigation}) {

  const [isModalVisible, setisModalVisible] = useState(false)

  const changeModalVisible = (bool) => {
      setisModalVisible(bool); 
  }
    return (
        <SafeAreaView style={styles.container}>
             <ImageBackground  style={styles.image} 
             source={require('../../assets/images/Subbackground.png')} >
            <ScrollView>
         <View style={{flexDirection:'row',padding:10}}>
        
        <TouchableOpacity>
          <Icon name = 'arrow-back' size={30} color={'black'}/>
        </TouchableOpacity>

         </View>
         
         <View style={{padding:10}}>
         <View style={{borderWidth:1,borderRadius:15,paddingVertical:20,backgroundColor:'#C5CAC7'}}>
         <View style={{flexDirection:'row',width:'100%'}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              WR NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              WRK01001108
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              WO DATE&TIME :
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              26/10/2021 21:45
              </Text>
          </View>

          <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 ASSET NO :
             </Text>
                
             <TextInput
                 style={styles.textArea}
                 underlineColorAndroid="transparent"
                 placeholder="PRPSPN133"
                 placeholderTextColor="black"
                 />
              
               </View> 

               {/* <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 ASSET LONGDESC:
             </Text>
                
             <TextInput
                 style={styles.textArea1}
                 underlineColorAndroid="transparent"
                 placeholder="Sphymomanmeter
                 Aneroid"
                 placeholderTextColor="black"
                 numberOfLines={2}
                 multiline={true}
                 />/
              
               </View>  */}

             <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
             ASSET LONGDESC:
             </Text>
                
             <TextInput
                 style={styles.textArea1}
                 underlineColorAndroid="transparent"
                 placeholder="Sphymomanmeter
                 Aneroid"
                 placeholderTextColor="black"
                 />
              
               </View> 

               <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 ASSET LOCT :
             </Text>
                
             <TextInput
                 style={styles.textArea}
                 underlineColorAndroid="transparent"
                 placeholder="Porak Tengah"
                 placeholderTextColor="black"
                 />
              
               </View> 

               <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 ORIGINATOR :
             </Text>
                
             <TextInput
                 style={styles.textArea}
                 underlineColorAndroid="transparent"
                 placeholder="HAMIZAN"
                 placeholderTextColor="black"
                 
                 />
              
               </View> 

               <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black',marginTop:10}}>
                 WORK REQ :
             </Text>
                
             <TextInput
                 style={styles.textArea2}
                 underlineColorAndroid="transparent"
                 placeholder="Reading Not Accurate"
                 placeholderTextColor="black"
                 numberOfLines={2}
                 multiline={true}
                 />
               </View> 
               
               <View style={{width:'100%',marginTop:10,flexDirection:'row'}}>
             <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              ASSIGN TECHNICIAN:
             </Text>
                
             <TextInput
                 style={styles.textArea}
                 underlineColorAndroid="transparent"
                 placeholder="MAHESH"
                 placeholderTextColor="black"
                 />
              
               </View> 
              
              
               <View style={{flexDirection:'row',padding:25,justifyContent:'space-between',marginTop:20,marginLeft:20,marginRight:20}}> 
             <TouchableOpacity style={{backgroundColor:'#7AF3A3',paddingHorizontal:10,paddingVertical:10,borderRadius:5,flexDirection:'row',alignItems:'center'}}
               onPress={()=> changeModalVisible(true)}
             >
                   <Icon name = 'checkmark-circle-sharp' size={24} color={'black'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>APPROVE</Text>
                 <Modal
                 transparent={true}
                 animationType='fade'
                 visible={isModalVisible}
                 nRequestClose={()=>changeModalVisible(false)}>
                
                
                   <PopView
                       changeModalVisible={changeModalVisible}
                               />
                 </Modal>
             </TouchableOpacity>

             <TouchableOpacity style={{backgroundColor:'#FA9999',paddingHorizontal:10,paddingVertical:10,borderRadius:5,flexDirection:'row'}}>
             <Icon name = 'close-circle-sharp' size={24} color={'black'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>REJECT</Text>
             </TouchableOpacity>
         </View>
         </View>
         </View>
         </ScrollView>
         </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
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
        height: 70,
        width:180,
        marginLeft:10,
        backgroundColor:'white',
        fontSize:20,
        borderRadius:5
      },
      textArea2: {
        height: 90,
        width:180,
        marginLeft:10,
        backgroundColor:'white',
        fontSize:20,
        borderRadius:5
      },
      image: {
        flex: 1,
      },
})