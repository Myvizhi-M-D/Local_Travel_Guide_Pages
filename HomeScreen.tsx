import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import { ViewStyle,ScrollView,FlatList,Button,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useRoute } from "@react-navigation/native"
import city from './CityScreen';


//const City =["Mumbai","Delhi","Kolakatta","Banglor","Hyderabad"];

const cities = [
   { 
     id: 1, 
     name: 'Chennai',
     description:'Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church',
     Image:'C:\Users\TLTUser\ReactNative\AwesomeProject\Assets\Mumbai.jpg'
  },
   { id: 2,      
      name: 'Kochi',
      description:'Kochi (also known as Cochin) is a city in southwest India’s coastal Kerala state. It has been a port since 1341, when a flood carved out its harbor and opened it to Arab, Chinese and European merchants. Sites reflecting those influences include Fort Kochi, a settlement with tiled colonial bungalows and diverse houses of worship',
     
   },
   { id: 3, 
      name: 'Delhi',
      description:'Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India,',
    
    },
    { id: 4, 
      name: 'Banglore',
      description:'Bengaluru (also called Bangalore) is the capital of Indias southern Karnataka state. The center of Indias high-tech industry, the city is also known for its parks and nightlife. ',
     },

    { id: 5,      
      name: 'Mumbai',
      description:'Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it’s India’s largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924',
    
    },
];

interface CityListProps {
   navigation: any; // 
 }
 const HomeScreen: React.FC<CityListProps> = ({ navigation }) => {
//const HomeScreen = () =>{
   //const navigation = useNavigation();
   const renderItem = ({ item }: any) => (
    
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('City', { city: item })}>
        <View style={{  padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Image  
                    source={require('C:\Users\TLTUser\ReactNative\AwesomeProject\Assets\Kolkata.jpg')}  
                />
         
  
  </View>
  
        
      </TouchableOpacity>

    );
 
      return (
      <ScrollView> 
      <View style= {styles.headerContainer} >
         <Text style ={styles.headerSubtitle}>View Places</Text>
         <Text style={styles.headerTitle}>THE TRAVEL GUIDE</Text>
         </View>
         
            <FlatList
             data={cities}
             renderItem={renderItem}
             keyExtractor={(item) => item.id.toString()}/> 
         
      
         </ScrollView> 
      );
   };

const styles = StyleSheet.create({
   container:{
      flex:1,
      

   },
   button: {
      flex:1,
      backgroundColor: 'pink', // Change the background color as needed
      padding: 10, // Adjust padding
      borderRadius: 15, // Adjust border radius for rounded corners
       // Center horizontally
      justifyContent: 'center', // Center verticallyflex
      flexDirection:'row',
      alignItems:'flex-start',

    },
   headerContainer:{

      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'space-between',
      paddingHorizontal:20
   },
   headerTitle:{

      fontSize:28,
   },
   headerSubtitle:{

      fontSize:13,
      
   }
}

)


export default HomeScreen;
