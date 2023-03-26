import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import MailCard from '../components/MessagesCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { ChatData, DummyData } from '../data/Data'
import {FAB, Portal, Dialog, Paragraph, Button, TextInput} from "react-native-paper";

const MailScreen = ({navigation}) => {
  useEffect(()=>(
    navigation.setOptions({
      headerTitle:"Messages",
      headerRight:() =>(
      <MaterialIcons name='settings' color={"white"} size={25} style={{marginRight:15}} />
    ),
    headerStyle:{
      backgroundColor:"black",
      color:"white",
      borderBottomWidth:0,
    },
    headerTitleStyle:{
      color:"white"
    }
    })
  ))

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <View style={styles.container}>
      {ChatData.map(dat=>
        <MailCard 
        prof={dat.prof} id={dat.id} name={dat.name} 
        verified={dat.verified} image={dat.image}
        msg={dat.msg} time={dat.time}
        />
        )}

<Portal>
    <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)} >
        <Dialog.Title>New Messages</Dialog.Title>
        <Dialog.Content >
            <Paragraph>This is simple dialog</Paragraph>
            <TextInput/>
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
            <Button >Save</Button>
        </Dialog.Actions>
    </Dialog>
</Portal>

        <FAB
             icon="plus"
             size={10}
             style={{position: "absolute" , bottom:16, right:16}}
             onPress={() => setIsDialogVisible(true)}
            />


    </View>
  )
}

export default MailScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})