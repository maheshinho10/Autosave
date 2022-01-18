import React from 'react'
import { View,Text,SafeAreaView,StyleSheet,ImageBackground,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function index() {
    return (
     <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image}source={require('../../assets/images/Backgrounds.jpg')}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
          <TouchableOpacity>
              <Icon name ='arrow-back'size={30}/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Icon name ='create-sharp'size={30}/>
          </TouchableOpacity>
        </View>

        <View style={{alignSelf:'center',marginTop:10}} >
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:80,borderRadius:20,borderColor:'black',borderWidth:1}}>
                <Icon name ='person-add' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> Acknowledge</Text>
            </TouchableOpacity>
        </View>

        <View style={{alignSelf:'center',marginTop:20}} >
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:100,borderRadius:20,borderColor:'black',borderWidth:1}}>
                <Icon name ='chatbubble' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> Response</Text>
            </TouchableOpacity>
        </View>
         
        <View style={{alignSelf:'center',marginTop:20}} >
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:100,borderRadius:20,borderColor:'black',borderWidth:1}}>
                <Icon name ='checkmark-circle' size={30} color={'black'} />
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'black'}}> Complete</Text>
            </TouchableOpacity>
        </View>


        <View style={{alignSelf:'center',marginTop:20}} >
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#D8F3DC',paddingVertical:30,paddingHorizontal:100,borderRadius:20,borderColor:'black',borderWidth:1}}>
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
        justifyContent:'center',
        alignContent:'center',
    },
    image: {
        flex: 1,
      },
})
