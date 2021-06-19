import React, { useState } from 'react'
import {Text} from 'react-native'

export default props => {
    const [user, setUser] = useState(props.route.params?props.route.params:{})
    return (
        <Text>{user.name}</Text>
    )
}