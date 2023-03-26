import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TweetCard from '../components/TweetCard';
import {DummyData} from '../data/Data'
import {FAB, Portal, Dialog, Paragraph, Button, TextInput} from "react-native-paper";

const HomeScreen = ({navigation}) => {
useEffect(() => {
    navigation.setOptions({
    headerTitleAlign:"center",
    headerTitle:"Home",
    headerLeft: () => (
        <Image 
            style={{height:30,width:30,borderRadius:30,marginLeft:15}}
            source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F236x%2F53%2F00%2Fc2%2F5300c23d5ce9a2586a9f69e37a45f6d9.jpg&tbnid=Cu48JwSOgaay4M&vet=12ahUKEwj28tKX_vb9AhXT_7sIHRauC9MQMygDegUIARDIAQ..i&imgrefurl=https%3A%2F%2Ftr.pinterest.com%2Fseherozyildirim%2Fminik-minik-resimler%2F&docid=BjGfwLIw0BL60M&w=236&h=377&q=minik%20resim&ved=2ahUKEwj28tKX_vb9AhXT_7sIHRauC9MQMygDegUIARDIAQ"}}
        />
    ),
    headerTitle:()=>(
        <FontAwesome5 name='twitter' size={25} color={'#00acee'} />
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
    
})

const [isDialogVisible, setIsDialogVisible] = useState(false);
  return (
    <View style={styles.container}>
        <ScrollView>
        {DummyData.map(dat =>
        <TweetCard 
        prof={dat.prof} id={dat.id} name={dat.name} 
        verified={dat.verified} image={dat.image}
        tweet={dat.tweet} time={dat.time} like={dat.like}
        rt={dat.rt} reply={dat.reply} 
        />
        )}
        </ScrollView>

        <Portal>
    <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)} >
        <Dialog.Title>New Twitt</Dialog.Title>
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

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})