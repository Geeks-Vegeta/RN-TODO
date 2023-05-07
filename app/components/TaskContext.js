import React, { createContext,useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const TaskProvider=createContext();

const TaskContext=props=>{

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
    
    
      },[]);

    return (
        <>
        <TaskProvider.Provider value={{task,setTask}}>
            {props.children}
        </TaskProvider.Provider>
        </>
    )

}

export default TaskContext;