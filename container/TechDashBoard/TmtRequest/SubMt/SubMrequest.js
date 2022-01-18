import React from 'react'
import { Text, View,StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons' 

export default function SubMrequest({navigation}) {
    return (
      <SafeAreaView style={styles.container}> 
      <ImageBackground style={styles.image}
      source={require('../../../assets/images/Backgrounds.jpg')}>
<View style={{alignItems:'center',marginTop:20}}>
           <Text style={{fontSize:26,fontWeight:'900',color:'black'}}>MATERIAL REQUEST</Text>
       </View>
    
    <View style={{padding:22}}>
    <View style={{flexDirection:'row',width:'100%'}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              REQUEST NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              MRE208934
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
             ASSET NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:15, color:'black'}}>
              PRK601360
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              COST CENTER : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              PRK353-P-KNA
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              ACCOUNT : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              MATERIAL
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              ORG DATE : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              02/12/2021 00:00
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              REQUESTOR : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              KNABME1
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              WO NO : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              CW0275359
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              STATUS : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              W
              </Text>
          </View>

          <View style={{flexDirection:'row',width:'100%',marginTop:15}}>
              <Text style={{width:'45%',fontSize:20,fontWeight:'bold',textAlign:'right', color:'black'}}>
              BUDGET BALANCE : 
              </Text>
                  
              <Text style={{fontSize:20,fontWeight:'bold',textAlign:'left',width:'50%',marginLeft:10, color:'black'}}>
              -6568
              </Text>
          </View>

          <View style={{flexDirection:'row',padding:20,justifyContent:'space-between',marginTop:20,marginLeft:20,marginRight:20}}> 
           <TouchableOpacity style={{backgroundColor:'#7AF3A3',paddingHorizontal:10,paddingVertical:10,borderRadius:5,flexDirection:'row',alignItems:'center'}}>
           <Icon name = 'checkmark-circle-sharp' size={20} color={'black'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}> APPROVE </Text>
           </TouchableOpacity>
           
           <TouchableOpacity style={{backgroundColor:'#FA9999',paddingHorizontal:10,paddingVertical:10,borderRadius:5,flexDirection:'row'}}>
             <Icon name = 'close-circle-sharp' size={20} color={'black'}/>
                 <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}> DISAPPROVE </Text>
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
        
    },
    image: {
        flex: 1,
      },
})