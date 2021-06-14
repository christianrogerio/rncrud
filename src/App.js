import React from 'react'
import {Text} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserForm from './views/UserForm'
import UserList from './views/UserList'

const Stack = createStackNavigator()

export default props => {
    return (
       <NavigationContainer>
           <Stack.Navigator initialRouteName="UserList" >
               <Stack.Screen name="UserList" component={UserList} />
               <Stack.Screen name="UserForm" component={UserForm} />
           </Stack.Navigator>
       </NavigationContainer>
    )
}