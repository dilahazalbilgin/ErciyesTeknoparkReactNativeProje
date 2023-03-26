import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {List, Avatar, Divider, FAB,Portal, Dialog, Paragraph, Button, TextInput, Provider} from "react-native-paper";

const SearchScreen = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  return(
    <View style={styles.container}>
      <FAB
       onPress={() => setIsDialogVisible(true)}
      />
       <List.Item
            title ="Trends For You"
            />
            <Divider/>

            <List.Item
            title ="Türkiye Uzaya Mı Gidiyor?"
            description="16.1K Tweets"
            />
            <Divider/>

            <List.Item
            title ="Almanya Bizi Kıskanıyor Mu"
            description="286K Tweets"
            />
            <Divider/>

            <List.Item
            title ="Seçim Özel Programı"
            description="22K Tweets"
            />
            <Divider/>

            <List.Item
            title ="Yengeç Burçları Dikkat"
            description="3K Tweets"
            />
            <Divider/>
            <List.Item
            title ="Show more"
            color="blue"
            />
            <Divider/>
      <Divider inset />
      <Portal>
    <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)} >
        <Dialog.Title>Search Twitter</Dialog.Title>
        <Dialog.Content >
            <Paragraph></Paragraph>
            <TextInput/>
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
            <Button >Save</Button>
        </Dialog.Actions>
    </Dialog>
</Portal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"white"
  }
})

export default SearchScreen