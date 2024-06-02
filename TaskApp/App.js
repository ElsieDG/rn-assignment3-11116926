import { Text, View, StyleSheet, Image, TextInput, ScrollView, FlatList } from 'react-native';
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

  const ongoingTasks = [
    { id: '1', category: 'Mobile App Development' },
    { id: '2', category: 'Web Development' },
    { id: '3', category: 'Push Ups' },
    { id: '4', category: 'Planks' },
    { id: '5', category: 'How to use if statments in Javascript' },
    { id: '6', category: "Fibonacci's Sequence" },
    { id: '7', category: 'Buy Fish' },
    { id: '8', category: 'Buy washing detergent' },
    { id: '9', category: 'Meet the Physics group members at 12pm' },
    { id: '10', category: 'Complete Programming assignment' },
    { id: '11', category: 'Watch the new Sarkodie Video' },
    { id: '12', category: 'Internship interview at Sandex Inc.' },
    { id: '13', category: 'Make stew' },
    { id: '14', category: 'Bake cookies' },
    { id: '15', category: 'Post a new streak on SnapChat' },
  ];

  const renderOngoingTask = ({ item }) => (
    <View style={styles.ongoingBox}>
      <View style={styles.categoryName}>
        <Text style={styles.ongoingText}>{item.category}</Text>
      </View>
    </View>
  );

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

      <View>
        <ScrollView horizontal={true} style={styles.scrollView}>

        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Exercise</Text>
            <Text style={styles.subtext}>12 Tasks</Text>
          </View>
          <View>
          <Image style={{height: 160, width: 180, right: 10 }} source={require('./assets/download__1.png')} />
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Study</Text>
            <Text style={styles.subtext}>4 Tasks</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/young woman working at desk.png')} />
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Homework</Text>
            <Text style={styles.subtext}>8 Tasks</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/young woman working online.png')} />
          </View>
        </View>
        
        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Group Meeting</Text>
            <Text style={styles.subtext}>3 Tasks</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/casual-life-3d-young-people-with-gadgets.png')} />
          </View>
        </View>
        
        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Social Media</Text>
            <Text style={styles.subtext}>12 Tasks</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/woman-photo-3d-illustration_785462-283-removebg-preview.png')} />
          </View>
        </View>
        
        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Meetings</Text>
            <Text style={styles.subtext}>1 Task</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/OIP-removebg-preview.png')} />
          </View>
        </View>
        
        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Shopping</Text>
            <Text style={styles.subtext}>3 Tasks</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/3374ae67200979.5b3172ca4871c-removebg-preview (1).png')} />
          </View>
        </View>
        
        <View style={styles.box}>
          <View style={styles.categoryName}>
            <Text style={styles.text}>Cook</Text>
            <Text style={styles.subtext}>5 Tasks</Text>
          </View>
          <View>
          <Image style={styles.catImages} source={require('./assets/download__2.png')} />
          </View>
        </View>
        </ScrollView>
      </View>

      <View>
      <Text style={{fontSize: "20px", fontFamily: 'Lato-Bold', paddingBottom: 25  }}>Ongoing Task</Text>

      <ScrollView>
      <FlatList
          data={ongoingTasks}
          renderItem={renderOngoingTask}
          keyExtractor={item => item.id}
        />
    
        </ScrollView> 
      </View>
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

  ongoingText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
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

  scrollView: {
    marginVertical: 20,
    marginBottom: 30,
  },

  box: {
    width: 186,
    height: 200,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
  },

  ongoingBox: {
    display: 'flex',
    flex: 1,
    width: '100vw',
    height: 200,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    textAlign: 'left',
    justifyContent: 'center',
  },

  categoryName: {
    textAlign: 'left',
    padding: 12,
    position: 'absolute',
    // backgroundColor: 'yellow',
    marginRight: 30,
  },

  catImages: {
    height: 140,
    width: 150,
    // backgroundColor: 'red',
    resizeMode: 'contain',
    bottom: -20,
    right: -15,
  },
});
