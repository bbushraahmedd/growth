
import {IconButton, Container, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TasksCard({task, deleteTask}){

   return ( 
    <Container>
        <Box>
            <IconButton aria-label="delete-task" edge="end"  onClick={() => deleteTask(task._id)}>
                <DeleteIcon/>
            </IconButton>
                {task.content}
        </Box>
    </Container>
    );
}

export default TasksCard;