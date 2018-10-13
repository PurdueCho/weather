import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY = "f6f330300924cf643e95566988ec3356";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    wind: 0,
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          wind: json.wind.speed,
          isLoaded: true,
        })
    })
  }
  render() {
    const { isLoaded, error, temperature, name, wind } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.ceil(temperature - 273.15)} wind={wind} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the fucking weather!</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  }
});
