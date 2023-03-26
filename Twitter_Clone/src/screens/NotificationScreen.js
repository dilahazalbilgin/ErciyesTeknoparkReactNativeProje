import { StyleSheet, Text,Image, View, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import NotificationCard from '../components/NotificationCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NotificationData } from '../dummydata/DummyData';

const NotificationScreen = ({navigation}) => {
  useEffect(()=>(
    navigation.setOptions({
      headerTitle:"Notifications",
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


  return (
    <View style={styles.container}>
      <ScrollView>
      {NotificationData.map(dat=>
        <NotificationCard id={dat.id} type={dat.type}
          pic={dat.pic}
          title={dat.title}
          desc={dat.desc}
          color={dat.color}
        />
        )}
      </ScrollView>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})