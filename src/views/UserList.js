import React from 'react'
import {Text, View, FlatList} from 'react-native'
import users from '../data/users'

export default props => {
    function getUserItem({item:user}){
        return <Text>{user.name} - {user.email}</Text>
    }
    return (
        <FlatList keyExtractor={user=> user.id.toString()} data={users} renderItem={getUserItem} />
    )
}