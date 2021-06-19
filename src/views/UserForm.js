import React, { useState } from 'react'
import {Text, TextInput, View, StyleSheet, Button} from 'react-native'

export default props => {
    const [user, setUser] = useState(props.route.params?props.route.params:{})
    return (
        <View>
            <Text>Nome</Text>
            <TextInput style={styles.campo} onChangeText={name => setUser({...user,name})} placeholder="Informar Nome" value={user.name} />

            <Text>Email</Text>
            <TextInput style={styles.campo} onChangeText={email => setUser({...user,email})} placeholder="Informar Email" value={user.email} />

            <Text>URL do Avatar</Text>
            <TextInput style={styles.campo} onChangeText={avatarUrl => setUser({...user,avatarUrl})} placeholder="Informar URL" value={user.avatarUrl} />  

            <Button title="Salvar" onPress={()=>{
                props.navigation.goBack()
            }
            } />

        </View>
    )
}

const styles = StyleSheet.create({
    campo :{color:'blue', borderBottomColor:'black', borderBottomWidth: 1}

})