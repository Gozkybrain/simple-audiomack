import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { Musicfiles } from "./Details";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import logo from "./assets/audiologo.png";

const Searchscreen = () => {
  // for the single player ui
  const singlesong = Musicfiles.filter((item, index) => index === 0);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.nav}>
          <View style={styles.searchrow}>
            <View style={styles.logo}>
              <Image source={logo} />
            </View>
            <Text style={styles.navtext}>SEARCH</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.save}>
              <Entypo name="arrow-up" size={22} color="white" />
            </View>
            <MaterialCommunityIcons name="bell" size={22} color="white" />
            <FontAwesome name="user-circle-o" size={16} color="white" />
          </View>
        </View>
        <View style={styles.inputcontainerwrapper}>
          <View style={styles.inputcontainer}>
            <FontAwesome
              style={styles.searchicon}
              name="search"
              size={20}
              color="#EF7C07"
            />
            <TextInput
              style={styles.input}
              placeholder="Artists, song,album,playlist..."
            />
          </View>
        </View>
        <Text style={styles.recommendedtext}>RECOMMENDED FOR YOU </Text>
        <View>
          <FlatList
            data={Musicfiles}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <View style={styles.musicwrapper}>
                <Image style={styles.img} source={item.pic} />
                <View>
                  <Text style={styles.musicartist}>{item.artist}</Text>
                  <Text style={styles.musictext}>{item.title}</Text>
                  <Text style={styles.musictext}>
                    Feat. <Text style={styles.feature}>{item.feature}</Text>
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.ad}>
          <Text>ADVERTICEMENT</Text>
        </View>
        <View style={styles.playbar}>
          {singlesong.map((item, index) => (
            <View key={index} style={styles.playerwrapper}>
              <View style={styles.playlistrow}>
                <Image style={styles.img} source={item.pic} />
                <View>
                  <Text style={styles.playeratirst}>{item.artist}</Text>
                  <Text style={styles.playertext}>{item.title}</Text>
                </View>
              </View>
              <View style={styles.playlistrow}>
                <AntDesign name="playcircleo" size={28} color="white" />
                <Entypo name="dots-three-vertical" size={28} color="white" />
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Searchscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 5,
  },

  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
  },

  navtext: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    letterSpacing: 0.5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  searchrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  save: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 1,
    borderRadius: 2,
  },

  logo: {
    height: 30,
    width: 65,
    objectFit: "fill",
  },

  recommendedtext: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    color: "#EF7C07",
    letterSpacing: 0.5,
  },

  inputcontainerwrapper: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
  },

  inputcontainer: {
    position: "relative",
    width: "100%",
  },

  searchicon: {
    position: "absolute",
    zIndex: 1,
    top: 12,
    left: 10,
  },

  input: {
    borderColor: "black",
    borderWidth: 0.5,
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
    height: 45,
    paddingLeft: 35,
  },

  musicwrapper: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
    padding: 10,
  },

  img: {
    height: 60,
    width: 60,
  },

  musictext: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  musicartist: {
    color: "white",
    fontSize: 17,
    letterSpacing: 0.5,
    fontWeight: "200",
  },

  feature: {
    color: "#EF7C07",
  },

  playbar: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  playerwrapper: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  playlistrow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  playertext: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
  },

  playeratirst: {
    color: "white",
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: "200",
  },

  ad: {
    height: 70,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    margin: 8,
  },
});
