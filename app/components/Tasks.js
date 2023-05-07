import React, { useContext } from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { TaskProvider } from "./TaskContext";


const Task=props=>{

  const {task, setTask}= useContext(TaskProvider);

  const removeElement=()=>{
    setTask(data=>data.filter((val, id)=>{
      return id!==props.press;
    }))

  }




    return (
        <>
          <TouchableOpacity  style={styles.button}>
              <Checkbox.Item onPress={removeElement} label={props.name} status="unchecked" />
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