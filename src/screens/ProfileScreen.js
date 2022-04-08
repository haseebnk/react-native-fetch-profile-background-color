import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { NotesContext } from "../context/NotesContext";


export default function ProfileScreen({ navigation, }) {

    // const { id } = route.params
    const { state } = useContext(NotesContext)

    // const note = state.find((record) => {
    //     return record.id === id
    // })




    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return (


                        <View >

                            {console.log(item)}


                            <LinearGradient style={styles.withBorder} colors={[item.color[0], item.color[1]]} title="Welcome">

                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'white', }} >{item.name}</Text>
                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'white', }} >{item.number}</Text>

                            </LinearGradient>


                        </View>


                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginVertical: 10,

        width: '90%',
        height: 158,
        alignSelf: 'center',

    },

    input: {
        height: 50,
        alignSelf: "center",
        backgroundColor: 'white',
        width: '80%',
        margin: 10,

    }

})