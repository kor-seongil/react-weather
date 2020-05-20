import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "e6513c332453b7d289c7d74adedba8c0";

export default class extends React.Component {
  state = {
    isLoading: true    
  }

  getWeather = async (latitude, longitude) => {
    const { data: {
              main: { temp },
              sys: { country },
              weather
             }
          } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
          );
    //console.log(data);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      country 
    })
  }


  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();            
      //console.log(coords.longitude, coords.latitude);
      //this.setState({ isLoading: false })
      this.getWeather(latitude, longitude)
    }catch(error){
      Alert.alert("Cant't find you", "So Sad");      
    }
    
  }


  componentDidMount(){
    this.getLocation();
  }

  
  render() {
    const { isLoading, temp, condition, country } = this.state;
    //Alert.alert("kkk", condition);
    return isLoading ? <Loading /> : <Weather country={country} temp={Math.round(temp)} condition={condition} />;
  }


}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//     //backgroundColor: '#fff',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow"
//   },
//   blueView:{
//     flex: 1,
//     backgroundColor: "blue"
//   }
// });
