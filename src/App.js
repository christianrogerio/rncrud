import React from 'react'
import {Text } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserForm from './views/UserForm'
import UserList from './views/UserList'
import { BorderlessButton } from 'react-native-gesture-handler'

import {Button, Icon} from 'react-native-elements'
import {UsersProvider} from './context/UserContext'

import {Lapis} from './src/Lapis'

const Stack = createStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions} >
                    <Stack.Screen name="UserList" component={UserList} 
                    options={({navigation})=> 
                            {
                            return {
                                    title:'Lista de Usuários', 
                                    headerRight: ()=> 
                                    (
                                        <Button type="clear" title="Novo"
                                        onPress={()=>navigation.navigate('UserForm')}
                                        icon={<Icon name="add" size={25} color="white" />}
                                        />    
                                    )
                                }
                            }
                        }
                    />
                    <Stack.Screen name="UserForm" component={UserForm}
                    options={{title:'Formulário de Usuários'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
       </UsersProvider>
    )
}

const screenOptions = {
    headerStyle:{
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}