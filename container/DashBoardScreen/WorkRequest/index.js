import React from 'react'
import { SafeAreaView,ImageBackground,StyleSheet,View,TouchableOpacity,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-elements'

export default function index({navigation}) {
    return (
       <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.image}
         source={require('../../assets/images/Backgrounds.jpg')}>
           
              <TouchableOpacity 
              style={{marginLeft:10,padding:10}}>
                  <Icon name = 'arrow-back'size={30} color={'black'}/>
              </TouchableOpacity>
          
         
             <View style={{alignSelf:'center',marginTop:25}}>
             <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="2"
                 status="error"
                 containerStyle={{position:'absolute',zIndex:1,right:0,bottom:80}}
                 />
             <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="3"
                 status="warning"
                 containerStyle={{position:'absolute',zIndex:1,right:30,bottom:80}}
                 />
        <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="3"
                 status="success"
                 containerStyle={{position:'absolute',zIndex:1,right:60,bottom:80}}
                 />
            <TouchableOpacity
            onPress={()=> navigation.navigate('Acknowledged')}
            // onPress={()=> navigation.navigate('WRinprogress')}
             style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:50,borderRadius:25,borderColor:'black',borderWidth:2}}>
             <Icon name='newspaper' size={30} color={'black'}/>
            <Text style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}> NEW WORK REQUEST </Text>
                
            </TouchableOpacity>
             </View>

             <View style={{alignSelf:'center',marginTop:30}}>
             <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="1"
                 status="success"
                 containerStyle={{position:'absolute',zIndex:1,right:0,bottom:80}}
                 />
             {/* <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="4"
                 status="warning"
                 containerStyle={{position:'absolute',zIndex:1,right:30,bottom:80}}
                 />
        <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="5"
                 status="success"
                 containerStyle={{position:'absolute',zIndex:1,right:60,bottom:80}}
                 /> */}
            <TouchableOpacity 
             onPress={()=> navigation.navigate('ReturnWo')}
            style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:38,borderRadius:25,borderColor:'black',borderWidth:2}}>
            <Icon name='return-up-forward' size={30} color={'black'}/>
                <Text  style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}> RETURNED WORK ORDER</Text>
            </TouchableOpacity>

             </View>

             <View style={{alignSelf:'center',marginTop:30}}>
             <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="1"
                 status="success"
                 containerStyle={{position:'absolute',zIndex:1,right:0,bottom:80}}
                 />
            <TouchableOpacity 
              onPress={()=> navigation.navigate('RejectedWo')}
            style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:40,borderRadius:25,borderColor:'black',borderWidth:2}}>
            <Icon name='return-up-forward' size={30} color={'black'}/>
                <Text  style={{fontSize:20,fontWeight:'bold',color:'black',textAlign:'auto'}}> REJECTED WORK ORDER</Text>
            </TouchableOpacity>

             </View>
      
             
            
         </ImageBackground>
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    image: {
        flex: 1,
      },
})