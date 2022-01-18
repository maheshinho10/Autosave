import React from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'

export default function Modalpop(props) {
    
   const closeModal =(bool) =>{
         props.changeModalVisible(bool);
     }

   
    

    return (
       <TouchableOpacity 
       disabled={true}
       style={styles.container}
       >
           <View style={styles.modal}>
              <View>
                  <Text style={{fontWeight:'bold',color:'black',fontSize:20,padding:10,alignSelf:'center'}}>Acknowledge to WO (Cw989887)?</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',padding:10,marginTop:10}}>
               <TouchableOpacity
               onPress={()=> closeModal(false, 'ok')}
               style={{backgroundColor:'green',paddingHorizontal:20,paddingVertical:10}}>
                   <Text style={{color:'white',fontSize:18}}>YES</Text>
                   </TouchableOpacity>


               <TouchableOpacity 
               onPress={()=> closeModal(false, 'cancel')}
               style={{backgroundColor:'red',paddingHorizontal:20,paddingVertical:10}}>
                   <Text style={{color:'white',fontSize:18}}>NO</Text>
                   </TouchableOpacity>
              </View>
           </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        height:150,
        width:350,
        paddingTop:20,
        backgroundColor:'white',
        borderRadius:5
    }
})
