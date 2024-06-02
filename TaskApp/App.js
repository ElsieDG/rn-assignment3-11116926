import { Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato,Quicksand,Roboto,Saira_Extra_Condensed/Lato/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato,Quicksand,Roboto,Saira_Extra_Condensed/Lato/Lato-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlebar}>
        <View style={styles.textGroup1}>
          <Text style={styles.title}>Hello, Devs  </Text>
          <Text style={styles.subtext}>14 tasks today</Text>
        </View>
        <Image style={styles.person} source={require('./assets/Profile Image.png')}/>
      </View>

      <View style={styles.searchArea}>
        <View style={styles.search}>
          <Image source={require('./assets/Vector.png')}/>
          <TextInput style=
            {styles.search} 
            placeholder='Search'
            > 
          </TextInput>
        </View>
       
        <Image source={require('./assets/Filter.png')}/>
      </View>

      <Text style={{fontSize: "20px", fontFamily: 'Lato-Bold', marginBottom: '35px'  }}>Catergories</Text>

     
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    paddingHorizontal: 20,
  },

  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },

  subtext: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
  },

  textGroup1:{
    display: "flex",
    flexDirection: 'column',
    flex: 1,
  },

  titlebar:{
   top: 62,
   display: 'flex', 
   flexDirection: 'row',
   width: '100%',
   height: 52,
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom:  92,
  },

  title:{
    fontSize: 32,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },

  searchArea: {
    width: '100%',
    display: 'flex', 
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 24,
  },

  search: {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    backgroundColor: "#fff",
    width: '80%',
    borderRadius: 15,
    paddingLeft: 10,
  },

  
});


// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text style={styles.text}>Box 1</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.text}>Box 2</Text>
//       </View>
//       <View style={styles.box}>
//         <Text style={styles.text}>Box 3</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#ff3000',
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });
