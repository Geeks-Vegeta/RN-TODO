import React, {useState, useContext} from "react";
import { Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskProvider } from "../components/TaskContext";
const Create=({navigation})=>{
    const [text, setText] = useState("");
    const {task, setTask} = useContext(TaskProvider);



    const storeData = async (value) => {
        try {
        let d=[...task, {"task":value}]
        const jv = JSON.stringify(d);
        await AsyncStorage.setItem('@TaskTodo', jv);
        navigation.navigate('Home');
        setTask((task)=>{
          return [...task, {"task":value}]
        })
        } catch (e) {
        // saving error
        }
    }


    return (
        <>
        <View>
            <TextInput
            style={{ borderRadius:20, width:400, alignSelf:'center', margin:20 }}
                label="Task"
                value={text}
                mode="outlined"
                onChangeText={text => setText(text)}
            />
             <Button icon="check" onPress={()=>storeData(text)} style={{ width:200, alignSelf:'center', backgroundColor:"#48a84d"}} mode="contained">
                Done
            </Button>
            
        </View>
        </>
    )
}

export default Create;