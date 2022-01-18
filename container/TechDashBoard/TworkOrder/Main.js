import React from 'react'
import { View,Text,SafeAreaView,StyleSheet,ImageBackground,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Badge } from 'react-native-elements'

export default function Main({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
              <ImageBackground style={styles.image} 
              source={require('../../assets/images/Backgrounds.jpg')}
              >
                  
          <TouchableOpacity style={{padding:10}}>
              <Icon name ='arrow-back'size={30}/>
          </TouchableOpacity>
          
       

        <View style={{alignSelf:'center',justifyContent:'center',marginTop:20}} >
        <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="1"
                 status="error"
                 containerStyle={{position:'absolute',zIndex:1,right:0,bottom:80}}
                 />
             <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="1"
                 status="warning"
                 containerStyle={{position:'absolute',zIndex:1,right:30,bottom:80}}
                 />
        <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="2"
                 status="success"
                 containerStyle={{position:'absolute',zIndex:1,right:60,bottom:80}}
                 />
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:75,borderRadius:20,borderColor:'black',borderWidth:1}}
              onPress={()=> navigation.navigate('TechAcknowledge')}
             >
                <Icon name ='person-add' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> Acknowledge</Text>
            </TouchableOpacity>
        </View>

        <View style={{alignSelf:'center',marginTop:30}} >
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
                 value="2"
                 status="warning"
                 containerStyle={{position:'absolute',zIndex:1,right:30,bottom:80}}
                 />
        <Badge 
                 badgeStyle={{height:40,width:40,borderRadius:40}}
                 textStyle={{fontSize:18}}
                 value="2"
                 status="success"
                 containerStyle={{position:'absolute',zIndex:1,right:60,bottom:80}}
                 />
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:100,borderRadius:20,borderColor:'black',borderWidth:1}}
            onPress={()=> navigation.navigate('TechRespond')}>
                <Icon name ='chatbubble' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> Respond</Text>
            </TouchableOpacity>
        </View>
       

        <View style={{alignSelf:'center',marginTop:30}} >
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:90,borderRadius:20,borderColor:'black',borderWidth:1}}>
                <Icon name ='timer-outline' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> InProgress</Text>
            </TouchableOpacity>
        </View>

        <View style={{alignSelf:'center',marginTop:30}} >
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:97,borderRadius:20,borderColor:'black',borderWidth:1}}>
                <Icon name ='checkmark-circle' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> Complete</Text>
            </TouchableOpacity>
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