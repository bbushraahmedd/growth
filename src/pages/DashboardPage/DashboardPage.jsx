
import {useState, useEffect} from 'react';


import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import NavBar from '../../components/NavBar/NavBar';
import {Box, Grid} from '@mui/material';

import * as taskAPI from '../../utils/taskApi';

function DashboardPage(){
    const [tasks, setTasks] = useState([]);

    async function handleAddTask(task){

        try {
            const response = await taskAPI.create(task)
            console.log(response, 'from postapi create')
            
            setTasks([response.task, ...tasks])
            console.log(response.task, "RESPONSE.TASK")
        } catch (err) {
            console.log(err, 'look in the handlAddTask') 
        }
    }

async function getTasks(){
    try {
        const response = await taskAPI.getAll();
        console.log(response, "task");
        setTasks(response.task);
    } catch (err) {
        console.log(err.message, "this is an error in getting the task");
    }
}

useEffect(() => {
    getTasks();
}, []);

   return (
    <Grid>
    <NavBar/>
    <Box maxWidth="md" 
    sx={{ 
        marginLeft: 18, 
        marginTop: 3, 
        boxShadow: 5}}>
    <TaskForm handleAddTask={handleAddTask}/>
    <TaskList tasks={tasks}/>
    </Box>
    </Grid>
    );
}

export default DashboardPage;

