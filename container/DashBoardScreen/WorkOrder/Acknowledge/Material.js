import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Material() {
    return (
       <SafeAreaView style={styles.contanier}>
           {/* heading */}
             <View style={{justifyContent:'space-between',marginTop:10,flexDirection:'row',padding:10}}>

             <TouchableOpacity >
           <Icon name='save' size={30} />
           <Text style={{fontWeight:'bold'}}>Save</Text>
           </TouchableOpacity>

               <Text style={styles.headingText}>
                   MATERIAL 
               </Text>

               <TouchableOpacity>
               <Icon name='create-sharp' size={30} />
               <Text  style={{fontWeight:'bold'}}>Edit</Text>
               </TouchableOpacity>
                

           </View>
 
      {/* subtitle  */}
      <View style={{flexDirection:'row',width:'100%',marginTop:50}}>
              <Text style={{width:'40%', fontSize:20, fontWeight:'bold', marginLeft:10, color:'black'}}>
                    STOCK NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                  
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    DESC : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                  
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    STK LOCN : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                  
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                   QTY NEEDED : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                  
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'60%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    
                   CHG CONSTCENTER: 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                  
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    PETTY CASH: 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:20, color:'black'}}>
                  
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:30}}>
              <Text style={{width:'40%',fontSize:20,fontWeight:'bold',marginLeft:10, color:'black'}}>
                    CRG ACCOUNT : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
                  
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
        color:'#13BE36'
    }
})
