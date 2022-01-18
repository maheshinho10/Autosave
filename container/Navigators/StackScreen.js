//Circle incharge
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../loginScreen/Login';
import DashBoard from '../DashBoardScreen/DashBoard';
import index from '../DashBoardScreen/WorkRequest';
import Acknowledged from '../DashBoardScreen/WorkRequest/Acknowledged';
import WorkRequested from '../DashBoardScreen/WorkRequest/WorkRequested';
import WRinprogress from '../DashBoardScreen/WorkRequest/WRinprogress';
import ReturnWo from '../DashBoardScreen/WorkRequest/ReturnWo';
import RejectedWo from '../DashBoardScreen/WorkRequest/RejectedWo';

//Technician
import TechDashboard from '../TechDashBoard/TechDashboard';
import Main from '../TechDashBoard/TworkOrder/Main';
import TeckAcknowledge from '../TechDashBoard/TworkOrder/TeckAcknowledge';
import TechRespond from '../TechDashBoard/TworkOrder/TechRespond';
import TechOption from '../TechDashBoard/TworkOrder/SubRespond/TechOption';
import Info from '../TechDashBoard/TworkOrder/SubAcknowledge/Info';
import Mtmain from '../TechDashBoard/TmtRequest/Mtmain';
import InfoMt from '../TechDashBoard/TmtRequest/SubMt/InfoMt';






const Stack = createStackNavigator();


export default function stackScreen() {
    return (
        
       <Stack.Navigator
       
       screenOptions={{
        headerStyle: {
          backgroundColor: "#B1DFAC",   
        },
        // headerTintColor: "white",
        headerBackTitle: "Back",}}
       >
           <Stack.Screen name = "Login" component={ Login} options={{headerShown:false}} />
           <Stack.Screen name = "DashBoard" component={ DashBoard} />
           <Stack.Screen name = "index" component = {index}/>
           <Stack.Screen name = "Acknowledged" component = {Acknowledged} />
           <Stack.Screen name = "WorkRequested" component = {WorkRequested} />
           <Stack.Screen name = "WRinprogress" component = {WRinprogress} />
           <Stack.Screen name = "ReturnWo" component={ReturnWo}/>
           <Stack.Screen name = "RejectedWo" component={RejectedWo}/>
           {/* //Technician login */}
           <Stack.Screen name = "TechDashboard" component={TechDashboard}/>
           <Stack.Screen name = "Main" component={Main}/>
           <Stack.Screen name = "TechAcknowledge" component={TeckAcknowledge}/>
           <Stack.Screen name = "TechRespond" component={TechRespond}/>
           <Stack.Screen name = "TechOption" component={TechOption}/>
           <Stack.Screen name = "Info"  component={Info}/>
           <Stack.Screen name = "Mtmain"  component={Mtmain}/>
           <Stack.Screen name='InfoMt' component={InfoMt}/>
           
           
       </Stack.Navigator>

    )
}
