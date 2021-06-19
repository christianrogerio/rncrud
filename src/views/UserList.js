import React from 'react'
import {Text, View, FlatList} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function editar(props){
        props.navigation.navigate('UserForm')
    }

    function getUserItem({item:user}){
        return <ListItem bottomDivider onPress={ ()=> {editar(props)} }  >
        <Avatar
            title={user.name}
            source={{ uri: user.avatarUrl }}
        />
        <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
        </ListItem> ;       
        /*
        return <ListItem 
        leftAvatar={{source: {uri: user.avatarUrl, size:"small"}}}
        />
        */
       // return <Text>{user.name} - {user.email}</Text>
    }
    return (
        <FlatList keyExtractor={user=> user.id.toString()} data={users} renderItem={getUserItem} />
    )
}