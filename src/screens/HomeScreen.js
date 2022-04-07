// React Native Rotate Image View Using Animation
// https://aboutreact.com/react-native-rotate-image-view-using-animation/

// import React in our code
import { NavigationContainer } from '@react-navigation/native';
import React , {useState , useContext} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableHighlight,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  
} from 'react-native';
import { NotesContext } from "../context/NotesContext"
import LinearGradient from 'react-native-linear-gradient';

const COLORS = [
  {
      id: 1,
      color: ['#F11775', '#FB6580',],


  },
  {
      id: 2,
      color: ['#7AC9FD', '#0071BC', ],


  }
  ,
  {
      id: 3,
      color: ['#7AFDD0', '#00BC89', ],


  },
  {
      id: 4,
      color: ['#6617F1', '#8265FB', ],


  },
  {
      id: 5,
      color: ['#F1D417', '#FBFB65',],


  },

]




const HomeScreen = ({ navigation }) => {

  const [press, setPress] = useState('');

  function questionPick(item) {
      setPress(item.id)
      setColor(item.color)
  }

  function questionClose(item) {
      setPress(item.id)
  }


  const { state, dispatch } = useContext(NotesContext)

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass] = useState("")

  const [color, setColor] = useState([])


  return (
    <View style={{ margin: 20 }}>
      <TextInput
      placeholder='Enter Name'
      style={styles.input}
      value={name}
      onChangeText={(text) => (setName(text))}
      />
       <TextInput
      placeholder='Enter number'
      style={styles.input}
      value={number}
      onChangeText={(text) => (setNumber(text))}
      />
       <TextInput
      placeholder='Enter age'
      style={styles.input}
      value={age}
      />
       <TextInput
      placeholder='Enter email'
      style={styles.input}
      value={email}
      />
       <TextInput
      placeholder='Enter password'
      style={styles.input}
      value={password}
      />

     
      <Button  
     
      
      color={'red'}
      onPress={() => {
        dispatch({ type: "Add", payload: { name, number , color } ,  } , navigation.navigate('profile'))
        }}
      
      title='Register' 
     >


     </Button>
   
                    <FlatList
                        horizontal={true}
                        data={COLORS}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ alignSelf: 'center', }}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity
                                onPress={() => questionPick(item )}
                                style={{ marginTop: 5, padding: 0, marginTop: 20, }}
                            >
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    {press === item.id ?

                                        <TouchableOpacity onPress={() => setPress('')}  >

                                            <LinearGradient
                                                colors={[item.color[0], item.color[1]]}

                                            style={styles.withBorder}>

                                            </LinearGradient>

                                        </TouchableOpacity>

                                        :

                                        <LinearGradient
                                        
                                            colors={[item.color[0], item.color[1]]}
                                        style={styles.withOutBorder}>

                                        </LinearGradient>
                                    }
                                </View>

                            </TouchableOpacity>

                        )}
                    />
                   

    </View>
  )


}

export default HomeScreen;


const styles= StyleSheet.create({
  withOutBorder:
  {
      marginHorizontal: 4,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      width: 38,
      height: 38,
      color: "White",
  }
  ,

  withBorder:
  {
      marginHorizontal: 4,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      width: 38,
      height: 38,
      color: "White",
  },

input:{
  height:50,
  alignSelf:"center",
  backgroundColor:'white' ,
  width:'80%',
  margin:10
}

})