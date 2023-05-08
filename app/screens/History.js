import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TaskProvider } from "../components/TaskContext";
import Task from "../components/Tasks";

const History=()=>{

    const {history, setHistory}=useContext(TaskProvider);

    return (
        <>
        {history.length!==0?(
            <>
                <ScrollView>
                {history.map((data, idx)=>{
                    return (
                        <>
                          <Task tas={false} press={idx} key={idx} name={data.task}/>     
                        </>
                    )
                })}

                </ScrollView>
            </>
        ):(
            <>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>No History Yet</Text>
                </View>
            </>
        )}
        
        
        </>
    )
}

export default History;