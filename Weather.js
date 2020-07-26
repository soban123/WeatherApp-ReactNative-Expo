import React , {useEffect , useContext , useState} from 'react'
import { View , Text , AsyncStorage ,StyleSheet , Image } from 'react-native'
import {MyContext} from './App'
import { TextInput ,Card , List , Button } from 'react-native-paper';
 
export default function Weather() {

    let [Weather , setWeather] = useState({
        name:'',
        temperature:'',
        humidity:'',
        icon:'',
        feellike:'',
        country:'',
        description:''

    })



      const {globalState, dispatch} = useContext(MyContext);


      useEffect(()=>{

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${globalState}&units=metric&APPID=3fba0ca80c154bfe0ec56b8168dec111`)
        .then(res=>res.json())
        .then(data=> { setWeather({
            name:data.name,
            temperature:data.main.temp ,
            humidity:data.main.humidity,
            icon:data.weather[0].icon,
            feellike:data.main.feels_like,
             country:data.sys.country,
             description:data.weather[0].description

            
        }  )  }  )
      } , [globalState])

console.log('fnl city',Weather)

    return (
        <View style={styles.card}>
            <Image 
                style={{width:150 , height:150 }}
                source={{uri:`http://api.openweathermap.org/img/w/${Weather.icon}.png`}}
            />
          
            <Text style={styles.text}>
                City: {Weather.name}
            </Text>
            <Text style={styles.text}>
                Description: {Weather.description}
            </Text>
            <Text style={styles.text}>
                Temperature: {Weather.temperature} °C 
            </Text>
            <Text style={styles.text}>
                Humidity: {Weather.humidity}
            </Text>
            <Text style={styles.text}>
                Feels Like: {Weather.feellike} °C
            </Text>
            <Text style={styles.text}>
                Country: {Weather.country}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
    card:{
        backgroundColor:'#07233b',
        alignItems:'center',
        marginTop:'auto',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'auto',
        width:'92%',
        height: '92%'
        
    } ,
     text :{
        fontSize:20,
        color:'white',
        marginVertical:15,
        borderBottomColor:'gray',
        borderBottomWidth:1
    }
})