
import TaskCard from '../TaskCard/TasksCard.jsx'

import { Box, Card } from '@mui/material';

function TaskList({tasks}){

   return ( 
    <Box maxWidth='sm' sx={{ 
        marginLeft: 18, 
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',}}
        >
            <Card variant='outlined'>
            {tasks?.map((task) => {
                // getting an error where it says 'maps' undefined, added the ? and now getting a 'TypeError' saying tasks is not iterable soooo idk what to do 😭
                return (
                    <TaskCard 
                    task={task} 
                    key={task._id} 
                    />
                    );
            })}
            </Card>
        
    </Box>
    );
}

export default TaskList;