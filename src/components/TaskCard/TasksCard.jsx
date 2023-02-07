
import {IconButton, Container, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TasksCard({task, deleteTask}){
   return ( 
    <Container>
        <Box>
            {task.content}
            <IconButton aria-label="delete-task" edge="end" sx={{m: 1, marginLeft: 5}}  
            onClick={() => deleteTask(task._id)}
             >
                <DeleteIcon/>
            </IconButton>
        </Box>
    </Container>
    );
}

export default TasksCard;