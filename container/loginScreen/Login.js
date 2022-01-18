import React,{ useState } from 'react'
import { View,Text,StyleSheet, ImageBackground,Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput,Button } from 'react-native-paper';
import { style } from 'dom-helpers';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { Input } from 'react-native-elements/dist/input/Input';



export default function Login({navigation}) {

    const [text, setText] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [isSecureEntry, setIsSecureEntry] = useState(true)

    return (
    <SafeAreaView style={styles.container}>
       <ImageBackground
       source={require('../assets/images/Backgrounds.jpg')}
       resizeMode='cover'
       style={styles.image}
      > 
        <View style={{marginTop:40}}>
         <Image
          style={{
            width:'80%',
            height:115  ,
            alignSelf:'center',
            resizeMode:'cover',
            marginBottom:20
            }}
       source={require('../assets/images/qubesLogo.png')}
      />
      </View>
      <View style={{padding:10,marginBottom:2}} >
      <Input
      style={styles.textinput}
      label="Email"
      placeholder="User Id"
      keyboardType="email-address"
      value={text}
      onChangeText={text => setText(text)}
    />
   
     
    <Input
    style={styles.textinput}
      label="Password"
      value={password} 
      placeholder="Enter Password"
      secureTextEntry={isSecureEntry}
      rightIcon={<TouchableOpacity onPress={()=>{
        setIsSecureEntry((prev) => !prev)
      }}>
        <Text>  {isSecureEntry ? "Show" : "Hide"}</Text>
      
        </TouchableOpacity>}
      onChangeText={password => setpassword(password)}
    />
       </View>
     <View>
      <TouchableOpacity
      onPress={()=> {
        if(text === 'Cincharge' && password === '12345') {
          navigation.navigate('DashBoard')
        }else if(text === 'Technician1' && password === '12345') {
          navigation.navigate('TechDashboard')
        } else {
          alert("Enter Valid username and password")
        }
      }}
      
      style={styles.loginButton} >
       <Text 
       style={{color:'white'}}>
         LOGIN</Text>
      </TouchableOpacity>
      
     </View>

     <View>
       <TouchableOpacity>
         <Text style={styles.forgotpassword}>
           Forgot Password?
         </Text>
       </TouchableOpacity>
     </View>

     <View  style={{alignItems:'center',marginTop:90}}>
       <Text style={{fontSize:17}}>Copyrights {'.\u00A9'} Qubes System</Text>
       <Text style ={{fontSize:17,flexWrap:'wrap'}}> All Rights Reserved</Text>
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
    textinput:{
          // marginTop:10,
          // borderRadius:10
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    loginButton:{
      
      alignSelf: 'center',
      backgroundColor: 'green',
      borderColor: 'white',
      borderRadius: 5,
      borderWidth: 2,
      elevation: 3,
      minWidth: 10,
      paddingVertical: 10,
      alignItems:'center',
      paddingHorizontal:40,
      marginBottom:10
    },
    forgotpassword:{
      fontSize:17,
      fontWeight:'bold',
      alignSelf:'center',
    }
})

