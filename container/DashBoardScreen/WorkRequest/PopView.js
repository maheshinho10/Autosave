import React from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'

export default function PopView(props) {
    
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
                  <Text style={{fontWeight:'bold',color:'black',fontSize:18,padding:5,alignSelf:'center',textAlign:'center'}}>ARE YOU SURE YOU NEED TO SAVE THE CHANGES?</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',padding:10,marginTop:10}}>
               <TouchableOpacity
               onPress={()=> closeModal(false, 'ok')}
               style={{backgroundColor:'#2ECC71',paddingHorizontal:15,paddingVertical:10}}>
                   <Text style={{color:'white',fontSize:18}}>YES</Text>
                   </TouchableOpacity>


               <TouchableOpacity 
               onPress={()=> closeModal(false, 'cancel')}
               style={{backgroundColor:'#EC7063',paddingHorizontal:20,paddingVertical:10}}>
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
        height:170,
        width:330,
        paddingTop:25,
        backgroundColor:'white',
        borderRadius:20,
        borderColor:'black',
        borderWidth:2
    }
})
