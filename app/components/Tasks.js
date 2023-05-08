import React, { useContext } from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { TaskProvider } from "./TaskContext";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Task=props=>{

  const {task, setTask, setHistory, history}= useContext(TaskProvider);

  const removeElementTask=async(idx)=>{
    
    let obj={}
    let x=task.filter((val,id)=>{
      if(id==idx){
        obj=task[id];
      }
    })

    let his=[...history, obj];
    setHistory(his);
    const HistoryValue = JSON.stringify(his);
    await AsyncStorage.setItem('@History', HistoryValue);



    setTask(data=>data.filter((val, id)=>{
      return id!==idx;
    }))
    let items = JSON.parse( await AsyncStorage.getItem('@TaskTodo'));

      items = items.filter((data, id)=>
        id!==idx
      )

    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem('@TaskTodo', jsonValue);

  }


  const removeElementHistory=async(idx)=>{

    setHistory(data=>data.filter((val, id)=>{
      return id!==idx
    }))
    let items = JSON.parse( await AsyncStorage.getItem('@History'));

      items = items.filter((data, id)=>
        id!==idx
      )

    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem('@History', jsonValue);

  }




    return (
        <>
          <TouchableOpacity  style={styles.button}>
              <Checkbox.Item onPress={()=>props.tas?removeElementTask(props.press):removeElementHistory(props.press)} label={props.name} status="unchecked" />
          </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {

      backgroundColor: '#DDDDDD',
      width:400,
      alignSelf:'center',
      borderRadius:8,
      margin:10
    },
  });
  
export default Task;