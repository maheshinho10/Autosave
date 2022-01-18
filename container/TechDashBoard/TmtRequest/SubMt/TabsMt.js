import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native';
import SubLineitem from './SubLineitem';
import SubMrequest from './SubMrequest';
 
const TabMt = createBottomTabNavigator();


export default function TabsMt() {
    return (
       <TabMt.Navigator
     
        screenOptions={{
            tabBarActiveBackgroundColor:'#A0A8A496',
            tabBarInactiveBackgroundColor:'grey', 
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                height:55,  
            },
        }}>
            <TabMt.Screen name = 'SubMrequest' component={SubMrequest} options={{headerShown:false,tabBarIcon:({focused}) =>(
                    <View>
                      <Text style={{fontWeight:'bold',color:'black',fontSize:16}}>MATERIAL REQUEST</Text>
                    </View>
                )
                }}/>
           <TabMt.Screen name = 'SubLineitem' component={SubLineitem} options={{headerShown:false ,tabBarIcon:({focused}) =>(
                    <View>
                      <Text style={{fontWeight:'bold',color:'black',fontSize:16}}>LINE ITEM</Text>
                    </View>
                )}}/>
           
       </TabMt.Navigator>
    )
}
