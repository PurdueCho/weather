import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import propTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: 'weather-rainy',
    },
    Clear: {
        colors: ['#FEF253', "#FF7300"],
        title: "Sunny as Fuck",
        subtitle: "Go get your ass burnt",
        icon: 'weather-sunny',
    },
    Thunderstorm: {
        colors: ['#00ECBC', "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning',
    },
    Clouds: {
        colors: ['#00C6FB', "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: 'weather-cloudy',
    },
    Snow: {
        colors: ['#7DE2FC', "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: 'weather-snowy',
    },
    Drizzle: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay",
        icon: 'weather-hail',
    },
    Haze: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what this is",
        icon: 'weathers-fog',
    },
    Mist: {
        colors: ['#89F7FE', "#66A6FF"],
        title: "Mist!!",
        subtitle: "Go get some smoke",
        icon: 'weathers-fog',
    }
}

function Weather ({weatherName, temp, wind}) {
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={100} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.wind}>{wind} m/s</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}> {weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}> {weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    weatherName: propTypes.string.isRequired,
    wind: propTypes.number.isRequired,
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: 'white',
        marginTop: 10,
    },
    wind: {
        fontSize: 28,
        backgroundColor: "transparent",
        color: 'white',
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
        marginBottom: 80,
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 10,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: 'white',
        marginBottom: 24,      
    }
})