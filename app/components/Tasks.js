import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Checkbox } from 'react-native-paper';


const Task=props=>{


    return (
        <>
        <TouchableOpacity style={styles.button}>
            <Checkbox.Item onPress={()=>console.log(props.press)} label={props.name} status="unchecked" />
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