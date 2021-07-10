import React, {useContext, useState} from 'react'
import {Text, View, FlatList, Alert} from 'react-native'
import { ListItem, Avatar , Button, Icon} from 'react-native-elements'
import UsersContext from '../context/UserContext'
//import users from '../data/users'


export default props => {

    const {state} = useContext(UsersContext)

    const [data, setData]=useState(state.users);
    //console.warn(Object.keys(ctx.state.users[0]))


    function deletarUser(user){
        const apagar=user; 
        state.users = state.users.filter(person => person.id != apagar.id);   
        setData(state.users)
        console.warn(JSON.stringify(state.users) )  
        /*
        s=''
        state.users.forEach(function (item, index) {
            if(user.id == item.id){
                state.users.splice(index,1);
                s='removeu '+item.id
            }
        });
        console.warn(s)
        */
    }

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário','Deseja excluir mesmo?',[
            {text: 'Sim',onPress(){
                deletarUser(user)
            }},
            {text:'Não'}
        ])
    }

    function editar(props){
        props.navigation.navigate('UserForm')
    }

    function getActions(user){
        return (
            <>
                <Button type="clear" title="Editar"
                                                onPress={()=>props.navigation.navigate('UserForm', user)}
                                                icon={<Icon name="edit" size={25} color="blue" />}
                                                />    
            </>
        )
    }

    function getUserItem({item:user}){
        return <ListItem  bottomDivider  >
        <Avatar
            title={user.name}
            source={{ uri: user.avatarUrl }}
        />
        <ListItem.Content >
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>

            <ListItem.Chevron
        name="edit"
        size={25}
        color="orange"
        onPress={() => props.navigation.navigate('UserForm', user)}
      />


<ListItem.Chevron
        name="delete"
        size={25}
        color="red"
        onPress={() => confirmUserDeletion(user)}
      />

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
        <FlatList keyExtractor={user=> user.id.toString()} data={data} renderItem={getUserItem} />
    )
}