import React, {useState, useEffect} from "react";
import { Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Create=({navigation})=>{
    const [text, setText] = useState("");
    const [task, setTask] = useState([]);


    useEffect(()=>{

    
        const getTodoData = async () => {
    
            try {
              const jsonValue = await AsyncStorage.getItem('@TaskTodo');
        
              if(jsonValue===null){
                //return again data to local storage
                return [];
                }
                else{
                //else reaturn empty data
                    return JSON.parse(jsonValue);
            }
            } catch(e) {
              // error reading value
              console.log(e);
            }
          }

        //   const clearAllData=()=> {
        //     AsyncStorage.getAllKeys()
        //         .then(keys => AsyncStorage.multiRemove(keys))
        //         .then(() => alert('success'));
        // }
    
          const setdatatolocal=async()=>{
            let cc=await getTodoData();
            setTask(cc);
          }
          setdatatolocal();
        //   clearAllData();
    
      },[])
    


    const storeData = async (value) => {
        try {
        let d=[...task, {"task":value}]
        const jv = JSON.stringify(d);
        await AsyncStorage.setItem('@TaskTodo', jv);
        navigation.navigate('Home');
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