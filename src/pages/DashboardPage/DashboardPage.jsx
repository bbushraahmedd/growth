
import {useState, useEffect} from 'react';


import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import NavBar from '../../components/NavBar/NavBar';
import {Box, Grid} from '@mui/material';

import * as taskAPI from '../../utils/taskApi';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function DashboardPage({handleLogout}){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function handleAddTask(task){

        try {
            setLoading(true);
            const response = await taskAPI.create(task);
            console.log(response, 'from postapi create');
            
            setTasks([response.task, ...tasks]);
            console.log(response, "RESPONSE.TASK");
            setLoading(false);
        } catch (err) {
            console.log(err, 'look in the handlAddTask'); 
            setError("error in creating task, try again");
        }
    }

async function handleDeleteTask(taskId) {
    try {
        const response = await taskAPI.deleteTask(taskId);
        console.log(response, 'from delete')
        getTasks();
    } catch (err) {
        console.log(err)
        setError('task did not delete')
    }
}

async function getTasks(){
    try {
        const response = await taskAPI.getAll();
        console.log(response, "task");
        setTasks(response.data);
        setLoading(false);
    } catch (err) {
        console.log(err.message, "this is an error in getting the task");
        setLoading(false);
    }
}

useEffect(() => {
    getTasks();
}, []);

   return (
    <Grid>
    <NavBar handleLogout={handleLogout}/>
    <ErrorMessage error={error} />
    <Box maxWidth="md" 
    sx={{ 
        marginLeft: 18, 
        marginTop: 3, 
        boxShadow: 5}}>
    <TaskForm handleAddTask={handleAddTask}/>
    <TaskList 
    tasks={tasks}
    deleteTrip={handleDeleteTask}/>
    </Box>
    </Grid>
    );
}

export default DashboardPage;

