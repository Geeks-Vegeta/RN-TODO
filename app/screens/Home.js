import React,{ useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Task from "../components/Tasks";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home=({navigation})=>{
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
    
          const setdatatolocal=async()=>{
            let cc=await getTodoData();
            setTask(cc);
          }
          setdatatolocal();
    
    
      },[])
    return (
        <>
        <ScrollView>
            {task?(
                <>
                {task.map((data, idx)=>{
                    return (
                        <>
                           <Task press={idx} key={idx} name={data.task}/>     
                        </>
                    )
                })}
                </>
            ):(
                <>
                </>
            )}
                       
         
        </ScrollView>
        <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => navigation.navigate('Create')}
        />
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })