
import TaskCard from '../TaskCard/TasksCard.jsx'

import { Box, Card } from '@mui/material';

function TaskList({tasks, deleteTask}){
    
    const tasksJsx = tasks
    ? tasks.filter((task) => task)
        .map((task) => {
            
          return <TaskCard 
                    task={task}  
                    key={task._id} 
                    deleteTask={deleteTask}/>;
        } )
    : [];

 return (
    <Box maxWidth='sm' sx={{ 
        marginLeft: 18, 
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',}}
        >
        {tasksJsx}
    </Box>
    );
 }


export default TaskList;