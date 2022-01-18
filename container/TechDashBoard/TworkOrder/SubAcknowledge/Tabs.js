import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import SubAction from './SubAction';
import SubDetail from './SubDetail';
import SubMaterial from './SubMaterial';
import SubWorkorder from './SubWorkorder';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function Tabs() { 
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveBackgroundColor:'#BEE2C8',
            tabBarInactiveBackgroundColor:'white',
            tabBarStyle:{
                position:'absolute',
                height:55,
            },
        }}
        >
            <Tab.Screen name='SubWorkorder' component={SubWorkorder} options={{headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View>
                        <Icon
                        name='document-text-sharp'
                        size={35}
                        
                        />
                    </View>
                )
                }}
                 />

            <Tab.Screen name='SubDetail' component={SubDetail} options={{headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View>
                        <Icon
                        name='newspaper'
                       
                        size={35}
                        />
                    </View>
                )
                }}/>
            <Tab.Screen name='SubAction' component={SubAction} options={{headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View>
                        <Icon
                        name='ios-construct'
                        size={35}
                        
                        />
                    </View>
                )
                }}/>
            <Tab.Screen name='SubMaterial' component={SubMaterial} options={{headerShown:false,
                tabBarIcon:({focused}) =>(
                    <View>
                        <Icon
                        name='layers-sharp'
                        size={35}
                       
                        />
                    </View>
                )
                }}/>
        </Tab.Navigator>
       
    )
}