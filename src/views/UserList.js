import React from 'react'
import {Text, View, FlatList} from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import users from '../data/users'

export default props => {
    function getUserItem({item:user}){
        return <ListItem>
        <Avatar
            title={user.name}
            source={{ uri: user.avatarUrl }}
        />
        <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
        </ListItem.Content>
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