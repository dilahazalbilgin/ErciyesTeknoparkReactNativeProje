import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const TweetCard = ({id,name,verified,tweet,image,prof,time,like,rt,reply}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, margin: 8 }}
          source={{
            uri: prof,
          }}
        />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText}>{name}</Text>
            {verified&&<MaterialIcons
              name="verified"
              color="#2f81c2"
              size={20}
            />}
            <Text style={styles.idText}>@{id}</Text>
            <Text style={styles.idText}>· {time}</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="black"
              size={20}
            />
          </View>
        </View>
        <View style={styles.tweetCont}>
          <Text style={styles.tweetText}>
            {tweet}
          </Text>
          {image&&<Image
            style={{
              
              height: 300,
              width: "100%",
              borderRadius: 10,
              marginTop: 10,
            }}
            source={{
              uri: image,
            }}
          />}
        </View>
        <View style={styles.actionCont}>
          <View style={styles.iconCont}>
            <MaterialCommunityIcons
                  name="message-reply-outline"
                  color="black"
                  size={20}
                />
            <Text style={styles.idText}>{reply}</Text>
          </View>
          <View style={styles.iconCont}>
            <AntDesign
              name="retweet"
              color="black"
              size={20}
            />
            <Text style={styles.idText}>{rt}</Text>
            
          </View>
          <View style={styles.iconCont}>
            <MaterialCommunityIcons
              name="heart-outline"
              color="black"
              size={20}
            />
            <Text style={styles.idText}>{like}</Text>
            
          </View>
            <MaterialCommunityIcons
              name="share-variant-outline"
              color="black"
              size={20}
            />
        </View>
      </View>
    </View>
  );
};

export default TweetCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom:5,
    borderBottomColor:"#2A2E30",
    borderBottomWidth:1,
  },
  rightCont: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 5,
    marginLeft: 5,
    flexDirection: "column",
  },
  nameCont: {
    flexDirection: "row",
  },
  actionCont:{
    marginTop:10,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    marginRight:15
  },
  iconCont:{
    flexDirection:"row"
  },
  topCont: {
    flex: 1,
  },
  text: {
    color: "white",
  },
  nameText: {
    color: "#000000",
    fontWeight: "bold",
    marginRight: 5,
  },
  idText: {
    marginLeft: 5,
    color: "#000000",
  },
  tweetText: {
    color: "#000000",
  },
  topCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetCont: {
    paddingRight: 15,
  },
});
