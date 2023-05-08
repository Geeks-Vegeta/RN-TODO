import React,{ useContext } from "react";
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import Task from "../components/Tasks";
import { TaskProvider } from "../components/TaskContext";


const Home=({navigation})=>{
    const {task, setTask}=useContext(TaskProvider);

    return (
        <>
            {task.length!==0?(
                <ScrollView>

                {task.map((data, idx)=>{
                    return (
                        <>
                          <Task tas={true} press={idx} key={idx} name={data.task}/>     
                        </>
                    )
                })}
                </ScrollView>

            ):(
                <View style={{flex:1, justifyContent:"center",alignItems:'center'}}>
                    <Text>No Task Yet</Text>
                </View>
            )}
                       
         
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