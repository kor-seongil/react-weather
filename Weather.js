import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title: "구름 많음",
        subtitle: "민디야!!!!!!!!!!!!!!!!!!!!!!!!!"
    },
    Clear: {
        iconName: "weather-cloudy",
        gradient: ["#005AA7","#FFFDE4"],
        title: "맑음",
        subtitle: "민디야!!!!!!!!!!!!!!!!!!!!!!!!!"
    }
};

export default function Weather({ temp, condition, country }) {
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>        
            <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.location}>국가 : {country}</Text>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
    )
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired,    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    location: {
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10,
        color: "white"        
    },
    title: {
        fontSize: 34,
        fontWeight: "300",
        marginBottom: 10,
        color: "white"        
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 24,
        color: "white"
    },
    textContainer: {
        paddingHorizontal: 20
    }
})